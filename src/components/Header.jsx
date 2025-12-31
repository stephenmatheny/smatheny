export default function Header({ firstName, lastName, headline }) {
  return (
    <header className="hero">
      <div className="hero__top">
        <h1 className="hero__name">
          {firstName} <span className="hero__last">{lastName}</span>
        </h1>
      </div>

      <p className="hero__headline">{headline}</p>
      
      <div className="hero__actions">
        <a
          href="/Stephen-Matheny-Resume.pdf"
          className="btn btn--primary"
          target="_blank"
          rel="noreferrer"
        >
          Download Resume
        </a>
      </div>
    </header>
  );
}
