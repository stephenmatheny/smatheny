export default function Header({ firstName, lastName, headline }) {
  return (
    <header className="surface hero">
      <h1 className="hero__name">
        {firstName} <span className="hero__last">{lastName}</span>
      </h1>

      <p className="hero__headline">{headline}</p>

      <div className="hero__actions">
        <a
          href="/Stephen_Matheny_Full_Stack_Software_Engineer.pdf"
          className="hero__link hero__link--primary"
          target="_blank"
          rel="noreferrer"
        >
          View Resume (PDF)
        </a>

        <span className="hero__divider">·</span>

        <a
          href="https://github.com/stephenmatheny"
          className="hero__link"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <span className="hero__divider">·</span>

        <a
          href="https://www.linkedin.com/in/stephenmatheny"
          className="hero__link"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <span className="hero__divider">·</span>

        <a
          href="mailto:stephen@smatheny.com"
          className="hero__link"
        >
          Email
        </a>
      </div>
    </header>
  );
}
