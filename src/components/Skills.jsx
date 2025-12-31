export default function Skills({ skillGroups }) {
  if (!skillGroups || skillGroups.length === 0) {
    return <p>No skills listed yet.</p>;
  }

  return (
    <div className="skills">
      {skillGroups.map((group) => (
        <div key={group.name} className="skills__group">
          <h3 className="skills__title">{group.name}</h3>

          {Array.isArray(group.items) && group.items.length > 0 ? (
            <ul className="skills__list">
              {group.items.map((item) => (
                <li key={`${group.name}:${item}`} className="skills__item">
                  {item}
                </li>
              ))}
            </ul>
          ) : (
            <p className="skills__empty">No items.</p>
          )}
        </div>
      ))}
    </div>
  );
}
