export default function Experience({ items }) {
  if (!items || items.length === 0) {
    return <p>No experience listed yet.</p>
  }

  return (
    <div className="experience">
      {items.map((exp) => (
        <div key={`${exp.org}:${exp.role}`} className="experience__item">
          <div className="experience__header">
            <h3 className="experience__org">{exp.org}</h3>
            <span className="experience__dates">{exp.dates}</span>
          </div>

          <p className="experience__role">{exp.role}</p>

          {exp.summary && (
            <p className="experience__summary">{exp.summary}</p>
          )}

          {Array.isArray(exp.bullets) && exp.bullets.length > 0 && (
            <ul className="experience__bullets">
              {exp.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}
