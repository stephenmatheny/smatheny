export default function Projects({ projects }) {
  if (!projects || projects.length === 0) {
    return <p>No projects yet.</p>;
  }
  return (
    <div>
      {projects.map((project) => (
        <div key={project.name}>
          <strong>{project.name}</strong>
          <p>{project.description}</p>
        </div>
      ))}
    </div>
  );
}
