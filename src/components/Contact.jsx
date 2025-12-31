export default function Contact({ links }) {
  const entries = Object.entries(links || {});

  if (entries.length === 0) {
    return <p>No contact links available.</p>
  }

  return (
    <ul>
      {entries.map(([key, value]) => {
        const isEmail = key === "email";
        const href = isEmail ? `mailto:${value}` : value;

        return (
          <li key={key}>
            <a
              href={href}
              target={isEmail ? undefined : "_blank"}
              rel={isEmail ? undefined : "noreferrer"}
            >
              {isEmail ? value : key}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
