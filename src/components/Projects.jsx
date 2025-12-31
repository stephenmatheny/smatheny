export default function Projects({ projects }) {
  if (!projects || projects.length === 0) return <p>No projects yet.</p>;

  return (
    <div className="grid">
      {projects.map((project) => {
        const hasLink = Boolean(project.link);
        const tech =
          Array.isArray(project.tech) && project.tech.length > 0
            ? project.tech
            : [];

        return (
          <article key={project.name} className="card">
            <div className="card__top">
              {hasLink ? (
                <a className="card__titleLink" href={project.link} target="_blank" rel="noreferrer">
                  <h3 className="card__title">{project.name}</h3>
                </a>
              ) : (
                <h3 className="card__title">{project.name}</h3>
              )}
            </div>

            <p className="card__desc">{project.description}</p>

            {tech.length > 0 ? (
              <ul className="tags">
                {tech.map((t) => (
                  <li key={`${project.name}:${t}`} className="tag">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
          </article>
        );
      })}
    </div>
  );
}
