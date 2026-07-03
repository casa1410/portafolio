interface P5TextProps {
  text: string;
  className?: string;
}

const VOWELS = new Set(['a', 'e', 'i', 'o', 'u']);

/** Renders text with Persona 5 mixed-case style: consonants large+bold, vowels small. */
export const P5Text = ({ text, className }: P5TextProps) => (
  <span className={className}>
    {text.split('').map((char, i) => {
      if (!/[a-zA-Z]/.test(char)) return <span key={i}>{char}</span>;
      const isVowel = VOWELS.has(char.toLowerCase());
      return (
        <span
          key={i}
          style={{
            display: 'inline-block',
            fontSize: isVowel ? '0.72em' : '1em',
            fontWeight: isVowel ? 500 : 900,
            letterSpacing: isVowel ? '0.05em' : 'inherit',
            lineHeight: 1,
          }}
        >
          {isVowel ? char.toLowerCase() : char.toUpperCase()}
        </span>
      );
    })}
  </span>
);
