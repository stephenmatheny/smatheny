export default function Header({ firstName, lastName, headline, links }) {
  return (
    <header>
      <h1>
        {firstName} {lastName}
      </h1>

      <p>{headline}</p>

      <nav>
        <ul>
          {Object.entries(links).map(([key, value]) => {
            const isEmail = key === "email";
            const href = isEmail ? `mailto:${value}` : value;

            return (
              <li key={key}>
                <a
                  href={href}
                  target={isEmail ? undefined : "_blank"}
                  rel={isEmail ? undefined : "noreferrer"}
                >
                  {value}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
