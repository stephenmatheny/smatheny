export default function Header({ firstName, lastName, headline }) {
  return (
    <header className="hero">
      <div className="hero__top">
        <h1 className="hero__name">
          {firstName} <span className="hero__last">{lastName}</span>
        </h1>
      </div>

      <p className="hero__headline">{headline}</p>
    </header>
  );
}
