export default function Layout({ children }) {
  return (
    <div className="page">
      <main className="container">{children}</main>
    </div>
  );
}
