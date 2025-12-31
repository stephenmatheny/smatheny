export default function Section({ title, children }) {
    return (
        <section style={{ marginBottom: "2.5rem" }}>
            <h2 style={{ marginBottom: "0.75rem" }}>{title}</h2>
            <div>{children}</div>
        </section>
    )
}
