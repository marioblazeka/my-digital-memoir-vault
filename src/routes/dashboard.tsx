import { createFileRoute } from "@tanstack/react-router";
import { ExternalScripts } from "@/components/ExternalScripts";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard – Privatni prostor" },
      { name: "description", content: "Privatni dashboard za ulogirane korisnike" },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  return (
    <>


    {/* Skip to content */}
    <a id="pojo-a11y-skip-content" className="pojo-skip-link" tabIndex={1} accessKey="s" href="#main-content" role="link">Preskoči na sadržaj</a>

    {/* NAVIGACIJSKA TRAKA */}
    <nav className="navbar">
        <div className="navbar-container">
            <h1 className="navbar-title">🏠 Privatni prostor</h1>
            <div className="navbar-right">
                <span id="welcome-name" className="welcome-text">Učitavanje...</span>
                <button id="logout-btn" className="btn-logout">Odjava</button>
            </div>
        </div>
    </nav>

    <main id="main-content" className="main-content main-dashboard">
        
        {/* POZDRAVNA PORUKA */}
        <section className="section welcome-section">
            <div className="welcome-card">
                <h2>👋 Dobrodošli, <span id="username-display">-</span>!</h2>
                <p className="welcome-message">Uspješno ste se ulogirani na privatni dio web stranice.</p>
                <div className="success-badge">
                    ✅ Prijava je uspješna
                </div>
            </div>
        </section>

        {/* INFORMACIJE O KORISNIKU */}
        <section className="section user-info-section">
            <h3>📋 Vaši podaci:</h3>
            <div className="info-grid">
                <div className="info-item">
                    <strong>Korisničko ime:</strong>
                    <span id="display-username">-</span>
                </div>
                <div className="info-item">
                    <strong>Vrijeme logiranja:</strong>
                    <span id="display-time">-</span>
                </div>
                <div className="info-item">
                    <strong>Status:</strong>
                    <span className="status-active">🟢 Aktivno</span>
                </div>
                <div className="info-item">
                    <strong>Pristupna razina:</strong>
                    <span className="access-level">Registrirani korisnik</span>
                </div>
            </div>
        </section>

        {/* PRIVATNI SADRŽAJ */}
        <section className="section private-content-section">
            <h3>🔒 Privatni sadržaj</h3>
            <div className="private-content">
                <p>
                    Ovaj sadržaj je dostupan <strong>samo registriranim korisnicima</strong> koji su se uspješno ulogirani.
                </p>
                <div className="feature-list">
                    <h4>Dostupne mogućnosti:</h4>
                    <ul>
                        <li>✓ Pristup privatnim informacijama</li>
                        <li>✓ Mogućnost pregleda personaliziranih sadržaja</li>
                        <li>✓ Sigurna komunikacija kroz šifriranu konekciju (HTTPS)</li>
                        <li>✓ Zaštita podataka kroz session management</li>
                        <li>✓ Mogućnost "Zapamti me" za bržu sljedeću prijavu</li>
                    </ul>
                </div>
            </div>
        </section>

        {/* SIGURNOSNE INFORMACIJE */}
        <section className="section security-section">
            <h3>🔐 Sigurnosne informacije</h3>
            <div className="security-info">
                <p>
                    <strong>Važno:</strong> Nikada ne dijelite svoju lozinku s nikime. 
                    Ako koristite javno računalo, obavezno se odjavite prije nego što napustite stranicu.
                </p>
                <p style={{'marginTop':'1rem'}}>
                    <strong>Session vrijeme:</strong> Vaša prijava će istjeći nakon 30 minuta neaktivnosti 
                    iz sigurnosnih razloga.
                </p>
            </div>
        </section>

    </main>

    {/* Back to top */}
    <button id="backToTop" className="back-to-top" aria-label="Vrati se na vrh stranice">↑</button>

    <footer className="footer">
        <p><small>&copy; 2026. Privatni prostor. Sva prava zadržana.</small></p>
    </footer>

    {/* JAVASCRIPT - Učitavanje korisničkih podataka i odjava */}
    
      <ExternalScripts srcs={["/js/dashboard.js", "/js/accessibility-widget.js"]} />
    </>
  );
}
