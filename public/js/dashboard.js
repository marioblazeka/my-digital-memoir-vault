// Provjera je li korisnik logiran
        function checkAuth() {
            const isLoggedIn = localStorage.getItem('logged_in');
            const userData = localStorage.getItem('user_data');

            if (!isLoggedIn || !userData) {
                // Nema logiranja - preusmjeri na login
                window.location.href = 'login.html';
                return;
            }

            return JSON.parse(userData);
        }

        // Učitaj korisničke podatke
        function loadUserData() {
            const user = checkAuth();
            
            if (user) {
                const displayName = user.username.split('@')[0]; // Ako je email, prikaži samo dio prije @
                
                document.getElementById('welcome-name').textContent = displayName;
                document.getElementById('username-display').textContent = displayName;
                document.getElementById('display-username').textContent = user.username;
                document.getElementById('display-time').textContent = user.login_time;
            }
        }

        // Odjava
        document.getElementById('logout-btn').addEventListener('click', function() {
            if (confirm('Jeste li sigurni da se želite odjaviti?')) {
                // Obriši podatke
                localStorage.removeItem('logged_in');
                localStorage.removeItem('user_data');
                localStorage.removeItem('remember_token');
                sessionStorage.removeItem('first_attempt');
                
                // Poruka
                alert('Uspješno ste se odjavili!');
                
                // Redirekcija
                window.location.href = 'index.html';
            }
        });

        // Back to top
        var backToTop = document.getElementById("backToTop");
        window.addEventListener("scroll", function() {
            if (window.scrollY > 300) {
                backToTop.style.display = "block";
            } else {
                backToTop.style.display = "none";
            }
        });
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });

        // Učitaj podatke pri učitavanju stranice
        document.addEventListener('DOMContentLoaded', loadUserData);

        // Provjera authentifikacije nakon 1 sekunde
        setTimeout(checkAuth, 1000);
