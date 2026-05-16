import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Kontakt – Mario Blažeka" },
      { name: "description", content: "Kontakt informacije – Mario Blažeka" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main id="main-content" className="main-content">
      <header className="header">
        <h1>📞 Kontakt</h1>
        <p className="tagline">Slobodno me kontaktirajte</p>
      </header>
      <section className="section contact-section">
        <div className="contact-info">
          <p><strong>Email:</strong> <a href="mailto:mario@example.com">mario@example.com</a></p>
          <p><strong>GitHub:</strong> <a href="https://github.com/marioblazeka" target="_blank" rel="noreferrer">github.com/marioblazeka</a></p>
          <p><strong>Fakultet:</strong> Fakultet informatike – Kolegij: Web aplikacije</p>
        </div>
        <p className="login-footer"><Link to="/">← Povratak na početnu stranicu</Link></p>
      </section>
      <footer className="footer">
        <p><small>&copy; 2026 Mario Blažeka. Sva prava zadržana.</small></p>
      </footer>
    </main>
  );
}
