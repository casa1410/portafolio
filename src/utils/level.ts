const ANCHOR_YEAR = 2026;
const ANCHOR_LEVEL = 25;
const BIRTHDAY_MONTH = 3; // April (0-indexed)
const BIRTHDAY_DAY = 27;
const MS_PER_DAY = 1000 * 60 * 60 * 24;

const birthdayInYear = (year: number) => new Date(year, BIRTHDAY_MONTH, BIRTHDAY_DAY);

export interface LevelProgress {
  level: number;
  daysElapsed: number;
  totalDays: number;
  daysRemaining: number;
  percent: number;
}

/** Level 25 on 2026-04-27, +1 every April 27th after that; XP bar fills one day at a time. */
export function getLevelProgress(now: Date = new Date()): LevelProgress {
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  let recentBirthdayYear = today.getFullYear();
  if (today < birthdayInYear(recentBirthdayYear)) {
    recentBirthdayYear -= 1;
  }

  const lastBirthday = birthdayInYear(recentBirthdayYear);
  const nextBirthday = birthdayInYear(recentBirthdayYear + 1);

  const level = ANCHOR_LEVEL + (recentBirthdayYear - ANCHOR_YEAR);
  const daysElapsed = Math.round((today.getTime() - lastBirthday.getTime()) / MS_PER_DAY);
  const totalDays = Math.round((nextBirthday.getTime() - lastBirthday.getTime()) / MS_PER_DAY);
  const percent = Math.min(100, (daysElapsed / totalDays) * 100);

  return {
    level,
    daysElapsed,
    totalDays,
    daysRemaining: totalDays - daysElapsed,
    percent,
  };
}
