import Reveal from "./Reveal";
import RevealWords from "./RevealWords";

export default function Experience({ items }) {
  if (!items || items.length === 0) return <p>No experience listed yet.</p>;

  return (
    <div className="stack">
      {items.map((exp, index) => (
        <Reveal
          as="article"
          key={`${exp.org}:${exp.role}`}
          className="surface card card--soft"
          delay={index * 80}
        >
          <div className="experience__header">
            <RevealWords as="h3" className="experience__org" text={exp.org} />
            <RevealWords
              as="span"
              className="experience__dates"
              text={exp.dates}
              delay={80}
            />
          </div>

          <RevealWords as="p" className="experience__role" text={exp.role} delay={120} />

          {exp.summary ? <p className="experience__summary">{exp.summary}</p> : null}

          {Array.isArray(exp.bullets) && exp.bullets.length > 0 ? (
            <ul className="bullets">
              {exp.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          ) : null}
        </Reveal>
      ))}
    </div>
  );
}
