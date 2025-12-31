export default function Projects({ projects }) {
  if (!projects || projects.length === 0) {
    return <p>No projects yet.</p>;
  }

  return (
    <div>
      {projects.map((project) => {
        const hasLink = Boolean(project.link);
        const techLine =
          Array.isArray(project.tech) && project.tech.length > 0
            ? project.tech.join(", ")
            : null;

        return (
          <div key={project.name} style={{ marginBottom: "1rem" }}>
            <div>
              {hasLink ? (
                <a href={project.link} target="_blank" rel="noreferrer">
                  <strong>{project.name}</strong>
                </a>
              ) : (
                <strong>{project.name}</strong>
              )}
            </div>

            <p style={{ margin: "0.25rem 0" }}>{project.description}</p>

            {techLine ? (
              <p style={{ margin: 0 }}>
                <em>Tech:</em> {techLine}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}