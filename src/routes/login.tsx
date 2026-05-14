import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/login")({
  head: () => ({ meta: [{ title: "Prijava – Privatni prostor" }, { name: "description", content: "Prijava na privatni dio web stranice" }] }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  useEffect(() => {
    const form = document.getElementById('login-form') as HTMLFormElement | null;
    const onSubmit = (e: Event) => {
      e.preventDefault();
      const username = (document.getElementById('username') as HTMLInputElement).value.trim();
      const password = (document.getElementById('password') as HTMLInputElement).value;
      const remember = (document.getElementById('remember') as HTMLInputElement).checked;
      const errorMsg = document.getElementById('error-message') as HTMLElement;
      const successMsg = document.getElementById('success-message') as HTMLElement;
      errorMsg.style.display = 'block';
      successMsg.style.display = 'none';
      setTimeout(() => {
        if (!sessionStorage.getItem('first_attempt')) {
          sessionStorage.setItem('first_attempt', 'true');
          errorMsg.style.display = 'block';
          (document.getElementById('username') as HTMLInputElement).focus();
          return;
        }
        const validUsers: Record<string,string> = { 'mario':'password','mario@example.com':'password','test':'password','test@example.com':'password' };
        if (validUsers[username] && validUsers[username] === password) {
          errorMsg.style.display = 'none';
          successMsg.style.display = 'block';
          const userData = { username, login_time: new Date().toLocaleString('hr-HR'), remember };
          localStorage.setItem('user_data', JSON.stringify(userData));
          localStorage.setItem('logged_in', 'true');
          if (remember) localStorage.setItem('remember_token', 'token_' + Date.now());
          setTimeout(() => navigate({ to: '/dashboard' }), 1500);
        } else {
          errorMsg.style.display = 'block';
          successMsg.style.display = 'none';
          (document.getElementById('password') as HTMLInputElement).value = '';
          (document.getElementById('username') as HTMLInputElement).focus();
        }
      }, 1500);
    };
    form?.addEventListener('submit', onSubmit);
    const backToTop = document.getElementById('backToTop') as HTMLElement | null;
    const onScroll = () => { if (backToTop) backToTop.style.display = window.scrollY > 300 ? 'block' : 'none'; };
    const toTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    window.addEventListener('scroll', onScroll);
    backToTop?.addEventListener('click', toTop);
    return () => {
      form?.removeEventListener('submit', onSubmit);
      window.removeEventListener('scroll', onScroll);
      backToTop?.removeEventListener('click', toTop);
    };
  }, [navigate]);
  return (<>
{/* Skip to content */}
    <a id="pojo-a11y-skip-content" className="pojo-skip-link" tabIndex={1} accessKey="s" href="#main-content" role="link">Preskoči na sadržaj</a>

    <main id="main-content" className="main-content">
        <header className="header">
            <h1>🔐 Prijava na sustav</h1>
            <p className="tagline">Privatni prostor za registrirane korisnike</p>
        </header>

        <section className="section login-section">
            
            {/* PORUKA GREŠKE - Uvijek se prikazuje prvi put */}
            <div id="error-message" className="error-message" style={{'display': 'none'}}>
                <strong>⚠️ Podaci nisu točni!</strong>
                <p>Molimo provjerite korisničko ime i lozinku.</p>
            </div>

            {/* PORUKA USPJEHA */}
            <div id="success-message" className="success-message" style={{'display': 'none'}}>
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
                <p style={{'marginTop': '1rem', 'fontSize': '0.9rem', 'color': '#666'}}>
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
  </>);
}
