export default function Header({ firstName, lastName, headline }) {
  return (
    <header>
      <h1>
        {firstName} {lastName}
      </h1>

      <p>{headline}</p>
    </header>
  );
}
