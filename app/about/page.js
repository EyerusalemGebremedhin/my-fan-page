export default function About() {
  return (
    <main style={{ padding: "2rem", maxWidth: "800px", margin: "0 auto" }}>
      <header style={{ marginBottom: "3rem", borderBottom: "1px solid #334155", paddingBottom: "1.5rem" }}>
        <h1 style={{ fontSize: "2.75rem", fontWeight: "700", marginBottom: "0.5rem" }}>About My Page</h1>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem" }}>Why I made this chess project.</p>
      </header>

      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#38bdf8" }}>Why Chess?</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "1.05rem" }}>
          Hey! I built this site because I really love chess. It is a great strategy game that keeps your brain active. I wanted a cool place to show off my favorite pieces, what they do, and how awesome they look in a custom dark mode design.
        </p>
      </section>

      <section style={{ marginBottom: "2.5rem", background: "#1e293b", padding: "1.5rem", borderRadius: "12px", border: "1px solid #334155" }}>
        <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem", color: "#fbbf24" }}>🎯 My Personal Goals</h2>
        <ul style={{ color: "#cbd5e1", lineHeight: "2", paddingLeft: "1.5rem" }}>
          <li>Get better at the Italian Game opening</li>
          <li>Hit a 1200 rating online</li>
          <li>Stop making silly blunders during fast games</li>
        </ul>
      </section>

      <section>
        <h2 style={{ fontSize: "1.75rem", marginBottom: "1rem", color: "#38bdf8" }}>How I Play</h2>
        <p style={{ color: "#cbd5e1", lineHeight: "1.7", fontSize: "1.05rem" }}>
          I like fighting for the middle of the board right away. Moving my Knights and Bishops out early to setup a big attack is my favorite way to play.
        </p>
      </section>
    </main>
  );
}
