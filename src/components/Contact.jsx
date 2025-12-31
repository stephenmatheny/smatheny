// src/components/Contact.jsx

function IconEmail(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
      />
    </svg>
  );
}

function IconGithub(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 .5C5.73.5.75 5.62.75 12.02c0 5.13 3.29 9.48 7.86 11.02.58.11.79-.26.79-.57v-2.1c-3.2.71-3.88-1.58-3.88-1.58-.52-1.37-1.28-1.73-1.28-1.73-1.05-.74.08-.72.08-.72 1.16.08 1.78 1.22 1.78 1.22 1.03 1.81 2.7 1.29 3.36.99.1-.77.4-1.29.72-1.58-2.55-.3-5.23-1.31-5.23-5.82 0-1.28.44-2.32 1.17-3.14-.12-.3-.51-1.53.11-3.19 0 0 .96-.31 3.14 1.2.91-.26 1.88-.39 2.85-.39s1.94.13 2.85.39c2.18-1.51 3.14-1.2 3.14-1.2.62 1.66.23 2.89.11 3.19.73.82 1.17 1.86 1.17 3.14 0 4.52-2.69 5.52-5.25 5.81.41.37.78 1.1.78 2.22v3.29c0 .31.21.68.8.57 4.56-1.54 7.85-5.89 7.85-11.02C23.25 5.62 18.27.5 12 .5Z"
      />
    </svg>
  );
}

function IconLinkedIn(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.67H9.32V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z"
      />
    </svg>
  );
}

function getHref(text, value) {
  if (text.toLowerCase() === "email") return `mailto:${value}`;
  return value;
}

function getIcon(text) {
  const t = text.toLowerCase();
  if (t === "email") return IconEmail;
  if (t === "github") return IconGithub;
  if (t === "linkedin") return IconLinkedIn;
  return null;
}

export default function Contact({ links }) {
  if (!Array.isArray(links) || links.length === 0) {
    return <p>No contact links available.</p>;
  }

  return (
    <div className="contactIcons">
      {links.map((link) => {
        const href = getHref(link.text, link.value);
        const isExternal = !href.startsWith("mailto:");
        const Icon = getIcon(link.text);

        return (
          <a
            key={link.text}
            className="iconBtn"
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            aria-label={link.text}
            title={link.text}
          >
            {Icon ? <Icon className="iconBtn__icon" /> : <span>{link.text}</span>}
          </a>
        );
      })}
    </div>
  );
}
