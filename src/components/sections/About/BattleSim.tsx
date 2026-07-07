import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../../context/LanguageContext';
import { TranslationShape } from '../../../i18n/en';
import warriorSprite from './battle-assets/warrior.svg';
import blackMageSprite from './battle-assets/black-mage.svg';
import whiteMageSprite from './battle-assets/white-mage.svg';
import slimeGrassSprite from './battle-assets/slime-grass.svg';
import slimeWaterSprite from './battle-assets/slime-water.svg';
import slimeFireSprite from './battle-assets/slime-fire.svg';
import styles from './BattleSim.module.css';

type Role = 'warrior' | 'blackMage' | 'whiteMage';
type Element = 'fire' | 'water' | 'grass';
type WhiteSpellId = 'heal' | 'shell' | 'barrier';
type CommandId = 'fight' | 'magic' | 'defend';
type Phase = 'select' | 'resolving' | 'enemyTurn' | 'victory';
type MenuLevel = 'main' | 'spells' | 'targets';

interface Unit {
  id: Role;
  sprite: string;
  hp: number;
  maxHp: number;
  mp: number;
  maxMp: number;
  defending: boolean;
  physShield: number; // turns remaining of boosted physical defense
  magicShield: number; // turns remaining of boosted magic defense
}

interface Monster {
  element: Element;
  sprite: string;
  hp: number;
  maxHp: number;
}

interface MenuItem {
  id: string;
  label: string;
  meta?: string;
  disabled: boolean;
}

interface Spell {
  id: Element;
  cost: number;
}

interface WhiteSpell {
  id: WhiteSpellId;
  cost: number;
}

type LogEvent =
  | { type: 'appear'; element: Element }
  | { type: 'attack'; actor: Role; dmg: number; mpGain: number }
  | { type: 'spellDamage'; actor: Role; spell: Element; dmg: number; effectiveness: 'super' | 'weak' | 'neutral'; cost: number }
  | { type: 'spellHeals'; actor: Role; spell: Element; heal: number; cost: number }
  | { type: 'heal'; actor: Role; target: Role; amount: number; cost: number }
  | { type: 'shellCast'; actor: Role; target: Role; cost: number }
  | { type: 'barrierCast'; actor: Role; target: Role; cost: number }
  | { type: 'defend'; actor: Role; mpGain: number }
  | { type: 'monsterAttack'; target: Role; dmg: number; reduced: boolean }
  | { type: 'monsterMagic'; target: Role; element: Element; dmg: number; reduced: boolean }
  | { type: 'defeated' };

const renderLog = (event: LogEvent, t: TranslationShape): string => {
  const name = (id: Role) => t.battle.units[id];
  switch (event.type) {
    case 'appear':
      return t.battle.messages.appear(t.battle.elements[event.element]);
    case 'attack':
      return t.battle.messages.attack(name(event.actor), event.dmg, event.mpGain);
    case 'spellDamage': {
      const note = event.effectiveness === 'super' ? t.battle.superEffective : event.effectiveness === 'weak' ? t.battle.notEffective : '';
      return t.battle.messages.spellDamage(name(event.actor), t.battle.spellLabels[event.spell], event.dmg, note, event.cost);
    }
    case 'spellHeals':
      return t.battle.messages.spellHeals(name(event.actor), t.battle.spellLabels[event.spell], event.heal, event.cost);
    case 'heal':
      return t.battle.messages.heal(name(event.actor), name(event.target), event.amount, event.cost);
    case 'shellCast':
      return t.battle.messages.shellCast(name(event.actor), t.battle.whiteSpellLabels.shell, name(event.target), event.cost);
    case 'barrierCast':
      return t.battle.messages.barrierCast(name(event.actor), t.battle.whiteSpellLabels.barrier, name(event.target), event.cost);
    case 'defend':
      return t.battle.messages.defend(name(event.actor), event.mpGain);
    case 'monsterAttack':
      return t.battle.messages.monsterAttack(t.battle.monsterName, name(event.target), event.dmg, event.reduced);
    case 'monsterMagic':
      return t.battle.messages.monsterMagic(t.battle.monsterName, t.battle.elementVerbs[event.element], name(event.target), event.dmg, event.reduced);
    case 'defeated':
      return t.battle.messages.defeated(t.battle.monsterName);
  }
};

const TURN_ORDER: Role[] = ['warrior', 'blackMage', 'whiteMage'];
const MONSTER_MAX_HP = 130;
const DEFEND_MULTIPLIER = 0.35;
const SHIELD_MULTIPLIER = 0.5;
const SHIELD_DURATION = 3;
const MP_REGEN_ON_ACTION = 3;

const SPELLS: Spell[] = [
  { id: 'fire', cost: 6 },
  { id: 'water', cost: 7 },
  { id: 'grass', cost: 6 },
];
const MIN_SPELL_COST = Math.min(...SPELLS.map((s) => s.cost));

const WHITE_SPELLS: WhiteSpell[] = [
  { id: 'heal', cost: 5 },
  { id: 'shell', cost: 6 },
  { id: 'barrier', cost: 6 },
];
const MIN_WHITE_SPELL_COST = Math.min(...WHITE_SPELLS.map((s) => s.cost));

const MONSTER_SPRITES: Record<Element, string> = {
  fire: slimeFireSprite,
  water: slimeWaterSprite,
  grass: slimeGrassSprite,
};
// fire beats grass, grass beats water, water beats fire
const STRONG_AGAINST: Record<Element, Element> = { fire: 'grass', grass: 'water', water: 'fire' };

const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
const randomElement = (): Element => (['fire', 'water', 'grass'] as Element[])[rand(0, 2)];

const multiplierFor = (attacker: Element, defender: Element) => {
  if (STRONG_AGAINST[attacker] === defender) return 1.6;
  if (STRONG_AGAINST[defender] === attacker) return 0.5;
  return 1;
};

const initialParty = (): Unit[] => [
  { id: 'warrior', sprite: warriorSprite, hp: 60, maxHp: 60, mp: 0, maxMp: 0, defending: false, physShield: 0, magicShield: 0 },
  { id: 'blackMage', sprite: blackMageSprite, hp: 34, maxHp: 34, mp: 24, maxMp: 24, defending: false, physShield: 0, magicShield: 0 },
  { id: 'whiteMage', sprite: whiteMageSprite, hp: 38, maxHp: 38, mp: 24, maxMp: 24, defending: false, physShield: 0, magicShield: 0 },
];

const initialMonster = (): Monster => {
  const element = randomElement();
  return { element, sprite: MONSTER_SPRITES[element], hp: MONSTER_MAX_HP, maxHp: MONSTER_MAX_HP };
};

const commandsFor = (unit: Unit, t: TranslationShape): MenuItem[] => {
  const list: MenuItem[] = [];
  list.push({ id: 'fight', label: t.battle.commands.fight, disabled: false });
  if (unit.id === 'blackMage') {
    list.push({ id: 'magic', label: t.battle.commands.magic, disabled: unit.mp < MIN_SPELL_COST });
  } else if (unit.id === 'whiteMage') {
    list.push({ id: 'magic', label: t.battle.commands.magic, disabled: unit.mp < MIN_WHITE_SPELL_COST });
  }
  list.push({ id: 'defend', label: t.battle.commands.defend, disabled: false });
  return list;
};

export const BattleSim = () => {
  const { t } = useLanguage();
  const unitName = (id: Role) => t.battle.units[id];

  const [party, setParty] = useState<Unit[]>(initialParty());
  const [monster, setMonster] = useState<Monster>(initialMonster);
  const [logEvent, setLogEvent] = useState<LogEvent>(() => ({ type: 'appear', element: monster.element }));
  const [actorIndex, setActorIndex] = useState(0);
  const [phase, setPhase] = useState<Phase>('select');
  const [menuLevel, setMenuLevel] = useState<MenuLevel>('main');
  const [pendingWhiteSpell, setPendingWhiteSpell] = useState<WhiteSpellId | null>(null);
  const [cursor, setCursor] = useState(0);
  const [monsterHitKey, setMonsterHitKey] = useState(0);
  const [partyHitKeys, setPartyHitKeys] = useState<Record<Role, number>>({ warrior: 0, blackMage: 0, whiteMage: 0 });

  const partyRef = useRef(party);
  const monsterRef = useRef(monster);
  const phaseRef = useRef(phase);
  partyRef.current = party;
  monsterRef.current = monster;
  phaseRef.current = phase;

  const actor = party[actorIndex];
  const commands = commandsFor(actor, t);

  const blackSpellItems: MenuItem[] = [
    ...SPELLS.map((s) => ({
      id: s.id,
      label: t.battle.spellLabels[s.id],
      meta: `${s.cost} ${t.battle.mpLabel}`,
      disabled: partyRef.current.find((u) => u.id === 'blackMage')!.mp < s.cost,
    })),
    { id: 'back', label: t.battle.back, disabled: false },
  ];

  const whiteSpellItems: MenuItem[] = [
    ...WHITE_SPELLS.map((s) => ({
      id: s.id,
      label: t.battle.whiteSpellLabels[s.id],
      meta: `${s.cost} ${t.battle.mpLabel}`,
      disabled: partyRef.current.find((u) => u.id === 'whiteMage')!.mp < s.cost,
    })),
    { id: 'back', label: t.battle.back, disabled: false },
  ];

  const targetItems: MenuItem[] = [
    ...party.map((u) => ({
      id: u.id,
      label: unitName(u.id),
      meta: `${u.hp}/${u.maxHp}`,
      disabled: false,
    })),
    { id: 'back', label: t.battle.back, disabled: false },
  ];

  const activeList = menuLevel === 'targets' ? targetItems : menuLevel === 'spells' ? (actor.id === 'blackMage' ? blackSpellItems : whiteSpellItems) : commands;

  useEffect(() => {
    setMenuLevel('main');
    setCursor(0);
  }, [actorIndex]);

  const updateUnit = (id: Role, fn: (u: Unit) => Unit) => {
    setParty((prev) => {
      const next = prev.map((u) => (u.id === id ? fn(u) : u));
      partyRef.current = next;
      return next;
    });
  };

  const damageMonster = (amount: number) => {
    monsterRef.current = { ...monsterRef.current, hp: Math.max(0, monsterRef.current.hp - amount) };
    setMonster(monsterRef.current);
    setMonsterHitKey((k) => k + 1);
  };

  const healMonster = (amount: number) => {
    monsterRef.current = { ...monsterRef.current, hp: Math.min(monsterRef.current.maxHp, monsterRef.current.hp + amount) };
    setMonster(monsterRef.current);
  };

  const startNewBattle = () => {
    const fresh = initialParty();
    partyRef.current = fresh;
    setParty(fresh);
    const freshMonster = initialMonster();
    monsterRef.current = freshMonster;
    setMonster(freshMonster);
    setActorIndex(0);
    setMenuLevel('main');
    setPendingWhiteSpell(null);
    setCursor(0);
    setLogEvent({ type: 'appear', element: freshMonster.element });
    setPhase('select');
  };

  const afterAction = async () => {
    await sleep(1000);

    if (monsterRef.current.hp <= 0) {
      setLogEvent({ type: 'defeated' });
      setPhase('victory');
      await sleep(3500);
      if (phaseRef.current === 'victory') startNewBattle();
      return;
    }

    if (actorIndex < TURN_ORDER.length - 1) {
      setActorIndex((i) => i + 1);
      setPhase('select');
    } else {
      await runEnemyTurn();
    }
  };

  const runEnemyTurn = async () => {
    setPhase('enemyTurn');
    await sleep(700);

    const alive = partyRef.current;
    const target = alive[rand(0, alive.length - 1)];
    const useMagic = rand(1, 100) <= 35;
    const rawDmg = useMagic ? rand(10, 18) : rand(6, 14);
    const wasGuarding = target.defending;
    const shieldActive = useMagic ? target.magicShield > 0 : target.physShield > 0;
    const reduced = wasGuarding || shieldActive;
    const finalDmg = wasGuarding
      ? Math.max(1, Math.round(rawDmg * DEFEND_MULTIPLIER))
      : shieldActive
        ? Math.max(1, Math.round(rawDmg * SHIELD_MULTIPLIER))
        : rawDmg;

    setParty((prev) => {
      const next = prev.map((u) => {
        const decayedPhys = Math.max(0, u.physShield - 1);
        const decayedMagic = Math.max(0, u.magicShield - 1);
        if (u.id === target.id) {
          return { ...u, hp: Math.max(1, u.hp - finalDmg), defending: false, physShield: decayedPhys, magicShield: decayedMagic };
        }
        return { ...u, physShield: decayedPhys, magicShield: decayedMagic };
      });
      partyRef.current = next;
      return next;
    });
    setPartyHitKeys((prev) => ({ ...prev, [target.id]: prev[target.id] + 1 }));

    if (useMagic) {
      setLogEvent({ type: 'monsterMagic', target: target.id, element: monsterRef.current.element, dmg: finalDmg, reduced });
    } else {
      setLogEvent({ type: 'monsterAttack', target: target.id, dmg: finalDmg, reduced });
    }

    await sleep(1100);
    setActorIndex(0);
    setPhase('select');
  };

  const handleBlackSpell = async (spell: Spell) => {
    if (phase !== 'select') return;
    const bm = partyRef.current.find((u) => u.id === 'blackMage')!;
    if (bm.mp < spell.cost) return;

    setPhase('resolving');
    setMenuLevel('main');
    updateUnit('blackMage', (u) => ({ ...u, mp: u.mp - spell.cost, defending: false }));

    if (spell.id === monsterRef.current.element) {
      const heal = rand(16, 24);
      healMonster(heal);
      setLogEvent({ type: 'spellHeals', actor: 'blackMage', spell: spell.id, heal, cost: spell.cost });
    } else {
      const mult = multiplierFor(spell.id, monsterRef.current.element);
      const base = rand(16, 24);
      const dmg = Math.round(base * mult);
      damageMonster(dmg);
      const effectiveness = mult > 1 ? 'super' : mult < 1 ? 'weak' : 'neutral';
      setLogEvent({ type: 'spellDamage', actor: 'blackMage', spell: spell.id, dmg, effectiveness, cost: spell.cost });
    }

    await afterAction();
  };

  const handleWhiteTarget = async (targetId: Role) => {
    if (phase !== 'select' || !pendingWhiteSpell) return;
    const wm = partyRef.current.find((u) => u.id === 'whiteMage')!;
    const spell = WHITE_SPELLS.find((s) => s.id === pendingWhiteSpell)!;
    if (wm.mp < spell.cost) return;

    setPhase('resolving');
    setMenuLevel('main');
    updateUnit('whiteMage', (u) => ({ ...u, mp: u.mp - spell.cost, defending: false }));

    if (spell.id === 'heal') {
      const heal = rand(14, 22);
      updateUnit(targetId, (u) => ({ ...u, hp: Math.min(u.maxHp, u.hp + heal) }));
      setLogEvent({ type: 'heal', actor: 'whiteMage', target: targetId, amount: heal, cost: spell.cost });
    } else if (spell.id === 'shell') {
      updateUnit(targetId, (u) => ({ ...u, physShield: SHIELD_DURATION }));
      setLogEvent({ type: 'shellCast', actor: 'whiteMage', target: targetId, cost: spell.cost });
    } else if (spell.id === 'barrier') {
      updateUnit(targetId, (u) => ({ ...u, magicShield: SHIELD_DURATION }));
      setLogEvent({ type: 'barrierCast', actor: 'whiteMage', target: targetId, cost: spell.cost });
    }

    setPendingWhiteSpell(null);
    await afterAction();
  };

  const handleCommand = async (cmd: CommandId) => {
    if (phase !== 'select') return;

    if (cmd === 'magic') {
      setMenuLevel('spells');
      setCursor(0);
      return;
    }

    setPhase('resolving');
    const current = partyRef.current.find((u) => u.id === actor.id)!;

    if (cmd === 'fight') {
      const dmg = current.id === 'warrior' ? rand(14, 22) : rand(6, 10);
      damageMonster(dmg);
      const mpGain = Math.min(MP_REGEN_ON_ACTION, current.maxMp - current.mp);
      updateUnit(current.id, (u) => ({ ...u, mp: u.mp + mpGain, defending: false }));
      setLogEvent({ type: 'attack', actor: current.id, dmg, mpGain });
    } else if (cmd === 'defend') {
      const mpGain = Math.min(MP_REGEN_ON_ACTION, current.maxMp - current.mp);
      updateUnit(current.id, (u) => ({ ...u, mp: u.mp + mpGain, defending: true }));
      setLogEvent({ type: 'defend', actor: current.id, mpGain });
    }

    await afterAction();
  };

  const handleSelect = (item: MenuItem) => {
    if (item.disabled) return;

    if (menuLevel === 'targets') {
      if (item.id === 'back') {
        setMenuLevel('spells');
        setCursor(0);
      } else {
        handleWhiteTarget(item.id as Role);
      }
      return;
    }

    if (menuLevel === 'spells') {
      if (item.id === 'back') {
        setMenuLevel('main');
        setCursor(0);
      } else if (actor.id === 'blackMage') {
        handleBlackSpell(SPELLS.find((s) => s.id === item.id)!);
      } else {
        setPendingWhiteSpell(item.id as WhiteSpellId);
        setMenuLevel('targets');
        setCursor(0);
      }
      return;
    }

    handleCommand(item.id as CommandId);
  };

  // Keyboard navigation for the command / spell / target menu
  useEffect(() => {
    if (phase !== 'select') return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        setCursor((c) => (c - 1 + activeList.length) % activeList.length);
      } else if (e.key === 'ArrowDown') {
        setCursor((c) => (c + 1) % activeList.length);
      } else if (e.key === 'Enter' || e.key === ' ') {
        handleSelect(activeList[cursor]);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phase, cursor, actorIndex, menuLevel]);

  const commandTitle =
    menuLevel === 'targets' ? `${t.battle.targetPrompt}:`
      : menuLevel === 'spells' ? `${t.battle.spellPrompt}:`
      : `${t.battle.turnPrefix}: ${unitName(actor.id)}`;

  return (
    <div className={styles.box}>
      <span className={styles.title}>{t.battle.title}</span>

      <div className={styles.enemyArea}>
        <div key={monsterHitKey} className={styles.spriteShake}>
          <img src={monster.sprite} alt="Slime" className={styles.enemySprite} />
        </div>
        <div className={styles.enemyBarRow}>
          <span className={styles.enemyName}>{t.battle.messages.enemyLabel(t.battle.monsterName, t.battle.elements[monster.element])}</span>
          <div className={styles.hpTrack}>
            <div className={styles.hpFill} style={{ width: `${(monster.hp / monster.maxHp) * 100}%` }} />
          </div>
        </div>
      </div>

      <div className={styles.logBox}>{renderLog(logEvent, t)}</div>

      {phase === 'select' && (
        <div className={styles.commandBox}>
          <span className={styles.commandTitle}>{commandTitle}</span>
          <div className={styles.commandList}>
            {activeList.map((item, i) => (
              <button
                key={item.id}
                className={`${styles.commandItem} ${i === cursor ? styles.commandItemActive : ''} ${item.disabled ? styles.commandItemDisabled : ''}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setCursor(i)}
                disabled={item.disabled}
              >
                <span className={styles.commandArrow}>{i === cursor ? '▸' : ''}</span>
                {item.label}
                {item.meta !== undefined && <span className={styles.commandCost}>{item.meta}</span>}
              </button>
            ))}
          </div>
        </div>
      )}

      <div className={styles.partyList}>
        {party.map((u, i) => (
          <div
            className={`${styles.unitRow} ${phase !== 'victory' && i === actorIndex ? styles.unitRowActive : ''}`}
            key={u.id}
          >
            <div key={partyHitKeys[u.id]} className={styles.spriteShake}>
              <img src={u.sprite} alt={unitName(u.id)} className={styles.unitSprite} />
            </div>
            <div className={styles.unitInfo}>
              <span className={styles.unitName}>
                {unitName(u.id)}
                {u.defending && <span className={styles.statusTag}> ({t.battle.guardTag})</span>}
                {u.physShield > 0 && <span className={styles.statusTag}> ({t.battle.shellTag})</span>}
                {u.magicShield > 0 && <span className={styles.statusTag}> ({t.battle.barrierTag})</span>}
              </span>
              <div className={styles.statRow}>
                <span className={styles.statLabel}>{t.battle.hpLabel}</span>
                <div className={styles.statTrack}>
                  <div className={styles.hpFill} style={{ width: `${(u.hp / u.maxHp) * 100}%` }} />
                </div>
                <span className={styles.statValue}>{u.hp}/{u.maxHp}</span>
              </div>
              {u.maxMp > 0 && (
                <div className={styles.statRow}>
                  <span className={styles.statLabel}>{t.battle.mpLabel}</span>
                  <div className={styles.statTrack}>
                    <div className={styles.mpFill} style={{ width: `${(u.mp / u.maxMp) * 100}%` }} />
                  </div>
                  <span className={styles.statValue}>{u.mp}/{u.maxMp}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {phase === 'victory' && (
        <div className={styles.victoryOverlay} onClick={startNewBattle}>
          <span className={styles.victoryText}>{t.battle.victoryText}</span>
          <span className={styles.victoryHint}>{t.battle.victoryHint}</span>
        </div>
      )}
    </div>
  );
};
