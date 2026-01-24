import Reveal from "./Reveal";
import RevealWords from "./RevealWords";

export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return <p>No projects yet.</p>;

  return (
    <div className="grid">
      {projects.map((project, index) => {
        const hasLink = Boolean(project.link);
        const tech =
          Array.isArray(project.tech) && project.tech.length > 0
            ? project.tech
            : [];

        return (
          <Reveal
            as="article"
            key={project.name}
            className="surface card"
            delay={index * 70}
          >
            {hasLink ? (
              <a className="card__titleLink" href={project.link} target="_blank" rel="noreferrer">
                <RevealWords as="h3" className="card__title" text={project.name} />
              </a>
            ) : (
              <RevealWords as="h3" className="card__title" text={project.name} />
            )}

            <RevealWords
              as="p"
              className="card__desc"
              text={project.description}
              delay={90}
            />

            {tech.length > 0 ? (
              <ul className="pillList tags">
                {tech.map((t) => (
                  <li key={`${project.name}:${t}`} className="pill tag">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </Reveal>
        );
      })}
    </div>
  );
}
