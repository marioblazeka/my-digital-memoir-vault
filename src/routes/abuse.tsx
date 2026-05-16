import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/abuse")({
  component: AbusePage,
  head: () => ({
    meta: [
      { title: "Prijava zlouporabe / Report Abuse — Mario Blažeka" },
      {
        name: "description",
        content:
          "Prijavite neprikladan sadržaj, phishing, kršenje autorskih ili žigovnih prava. Report inappropriate content, phishing, copyright or trademark infringement.",
      },
    ],
  }),
});

type Card = {
  icon: string;
  titleHr: string;
  titleEn: string;
  descHr: string;
  descEn: string;
  subject: string;
};

const CARDS: Card[] = [
  {
    icon: "🎣",
    titleHr: "Phishing ili Spam",
    titleEn: "Phishing or Spam",
    descHr: "Prijavite sumnjive poruke, lažne obrasce ili neželjenu poštu.",
    descEn: "Report suspicious messages, fake forms or unsolicited mail.",
    subject: "Prijava: Phishing / Spam",
  },
  {
    icon: "©️",
    titleHr: "Kršenje autorskih prava",
    titleEn: "Copyright Infringement",
    descHr: "Sadržaj koji koristi vaš autorski materijal bez dopuštenja.",
    descEn: "Content that uses your copyrighted material without permission.",
    subject: "Prijava: Kršenje autorskih prava",
  },
  {
    icon: "™️",
    titleHr: "Kršenje žiga",
    titleEn: "Trademark Infringement",
    descHr: "Neovlaštena uporaba zaštićenog imena, znaka ili logotipa.",
    descEn: "Unauthorized use of a protected name, mark or logo.",
    subject: "Prijava: Kršenje žiga",
  },
  {
    icon: "🚫",
    titleHr: "Općenita zlouporaba",
    titleEn: "General Abuse",
    descHr: "Uvredljiv, štetan ili na bilo koji drugi način neprikladan sadržaj.",
    descEn: "Offensive, harmful or otherwise inappropriate content.",
    subject: "Prijava: Općenita zlouporaba",
  },
];

function AbusePage() {
  const email = "mario@example.com";

  return (
    <main id="main-content" className="main-content" tabIndex={-1}>
      <header className="header hero-section">
        <h1>🚨 Prijava zlouporabe · Report Abuse</h1>
        <p style={{ marginTop: "0.5rem" }}>
          <Link to="/" className="btn-link">← Početna / Home</Link>
        </p>
      </header>

      <section className="section" aria-labelledby="abuse-title">
        <h2 id="abuse-title">Prijava zlouporabe i kršenja prava</h2>
        <p>
          <strong>Hrvatski:</strong> Predan sam sprječavanju zlouporabe i kršenja
          prava na ovoj stranici. Možete prijaviti svaki neprikladan sadržaj
          objavljen na ovom portalu. Svaka prijava se ozbiljno razmatra i
          obrađuje u najkraćem mogućem roku.
        </p>
        <p>
          <strong>English:</strong> I am committed to preventing abuse and
          infringement of rights on this website. You can report any
          inappropriate content published here. Every report is reviewed and
          processed as quickly as possible.
        </p>
        <p>
          Odaberite vrstu prijave u nastavku. Po zaprimanju prijave kreira se
          jedinstveni ID slučaja koji se može koristiti za praćenje statusa.
          Obrada obično traje <strong>do 3 radna dana</strong>, ovisno o složenosti.
          <br />
          <em>
            Choose the type of report below. Upon receipt a unique ticket ID is
            created to track the report. Processing usually takes up to 3
            business days, depending on the case.
          </em>
        </p>
      </section>

      <section className="section" aria-label="Vrste prijava">
        <div className="abuse-grid">
          {CARDS.map((c) => (
            <article key={c.titleEn} className="abuse-card">
              <div className="abuse-icon" aria-hidden="true">{c.icon}</div>
              <h3 className="abuse-title">
                {c.titleHr}
                <span className="abuse-title-en">{c.titleEn}</span>
              </h3>
              <p className="abuse-desc">{c.descHr}</p>
              <p className="abuse-desc abuse-desc-en"><em>{c.descEn}</em></p>
              <a
                className="abuse-btn"
                href={`mailto:${email}?subject=${encodeURIComponent(c.subject)}`}
              >
                Pošalji prijavu / Send a Report
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Mario Blažeka — Kolegij: Web aplikacije</p>
      </footer>
    </main>
  );
}
