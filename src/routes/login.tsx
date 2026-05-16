import { createFileRoute } from "@tanstack/react-router";
import { ExternalScripts } from "@/components/ExternalScripts";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Prijava – Privatni prostor" },
      { name: "description", content: "Prijava na privatni dio web stranice" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <>


    {/* Skip to content */}
    <a id="pojo-a11y-skip-content" className="pojo-skip-link" tabIndex={1} accessKey="s" href="#main-content" role="link">Preskoči na sadržaj</a>

    <main id="main-content" className="main-content">
        <header className="header">
            <h1>🔐 Prijava na sustav</h1>
            <p className="tagline">Privatni prostor za registrirane korisnike</p>
        </header>

        <section className="section login-section">
            
            {/* PORUKA GREŠKE - Uvijek se prikazuje prvi put */}
            <div id="error-message" className="error-message" style={{'display':'none'}}>
                <strong>⚠️ Podaci nisu točni!</strong>
                <p>Molimo provjerite korisničko ime i lozinku.</p>
            </div>

            {/* PORUKA USPJEHA */}
            <div id="success-message" className="success-message" style={{'display':'none'}}>
                <strong>✅ Uspješno ste se ulogirani!</strong>
                <p>Preusmjeravanje na dashboard...</p>
            </div>

            {/* LOGIN FORMA */}
            <form id="login-form" className="login-form">
                
                <div className="form-group">
                    <label htmlFor="username">Korisničko ime ili email:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username" 
                        required 
                        placeholder="npr. mario ili mario@example.com"
                        aria-label="Korisničko ime"
                        autoComplete="username"
                     />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Lozinka:</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        required 
                        placeholder="password"
                        aria-label="Lozinka"
                        autoComplete="current-password"
                     />
                </div>

                <div className="form-group checkbox">
                    <input 
                        type="checkbox" 
                        id="remember" 
                        name="remember" 
                     />
                    <label htmlFor="remember">Zapamti me na ovom uređaju (30 dana)</label>
                </div>

                <button type="submit" className="btn-submit">Prijava</button>
            </form>

            {/* DEMO PODACI */}
            <div className="demo-info">
                <h3>🧪 Testni podaci:</h3>
                <ul>
                    <li><strong>Korisničko ime:</strong> mario</li>
                    <li><strong>Lozinka:</strong>********</li>
                </ul>
                <p style={{'marginTop':'1rem', 'fontSize':'0.9rem', 'color':'#666'}}>
                    ℹ️ <em>Napomena: Pokušajte ponovno sa točnim podacima.</em>
                </p>
            </div>

            {/* POVRATAK NA POČETNU */}
            <p className="login-footer">
                <a href="/">← Povratak na početnu stranicu</a>
            </p>
        </section>
    </main>

    {/* Back to top */}
    <button id="backToTop" className="back-to-top" aria-label="Vrati se na vrh stranice">↑</button>

    <footer className="footer">
        <p><small>&copy; 2026. Privatni prostor. Sva prava zadržana.</small></p>
    </footer>

    {/* JAVASCRIPT - Login logika */}
    
    
      <ExternalScripts srcs={["/js/login.js", "/js/accessibility-widget.js"]} />
    </>
  );
}
