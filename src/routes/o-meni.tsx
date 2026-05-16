import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/o-meni")({
  head: () => ({
    meta: [
      { title: "O meni — Mario Blažeka" },
      { name: "description", content: "Upoznajte Maria Blažeku, studenta informatike i autora ove edukativne web stranice." },
      { property: "og:title", content: "O meni — Mario Blažeka" },
      { property: "og:description", content: "Upoznajte Maria Blažeku, studenta informatike i autora ove edukativne web stranice." },
    ],
  }),
  component: OMeniPage,
});

function OMeniPage() {
  return (
    <>
      <main id="main-content" className="main-content" tabIndex={-1}>
        <section className="section about-section" aria-labelledby="about-title">
          <h2 id="about-title">👨‍💻 O meni</h2>
          <div className="about-content">
            <p>
              Pozdrav! Ja sam <strong>Mario Blažeka</strong>, student na <strong>Fakultetu informatike</strong>.
              Ova web stranica je izrađena u sklopu kolegija <strong>Web aplikacije</strong>.
            </p>
            <p>
              Na ovoj stranici ćete pronaći edukativne materijale, primjere koda i pregled
              <strong> raznih web alata</strong> koji se koriste u modernoj web razvoj praksi.
            </p>
            <p>
              Cilj mi je približiti osnovne i napredne tehnologije web razvoja na jednostavan
              i pregledan način, s posebnim fokusom na praktičnu primjenu i učenje kroz primjere.
            </p>
          </div>
          <div className="hero-buttons" style={{ marginTop: "2rem" }}>
            <Link to="/" className="btn-primary">← Natrag na početnu</Link>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p><small>&copy; 2026 Mario Blažeka. Osobna web stranica za kolegij Web aplikacije. Sva prava zadržana.</small></p>
      </footer>
    </>
  );
}
