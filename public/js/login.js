document.getElementById('login-form').addEventListener('submit', function(e) {
            e.preventDefault();

            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const remember = document.getElementById('remember').checked;

            const errorMsg = document.getElementById('error-message');
            const successMsg = document.getElementById('success-message');

            // Prvo: Uvijek prikaži grešku
            errorMsg.style.display = 'block';
            successMsg.style.display = 'none';

            // Čekaj 1.5 sekunde, pa pokušaj stvarnu prijavu
            setTimeout(() => {
                // Provjera je li prvi pokušaj (uvijek prikaži grešku prvi put)
                if (!sessionStorage.getItem('first_attempt')) {
                    sessionStorage.setItem('first_attempt', 'true');
                    // Prikaži grešku i vrati se na formu
                    errorMsg.style.display = 'block';
                    successMsg.style.display = 'none';
                    document.getElementById('username').focus();
                    return;
                }

                // Drugi pokušaj - provjeri kredencijale
                const validUsers = {
                    'mario': 'password',
                    'mario@example.com': 'password',
                    'test': 'password',
                    'test@example.com': 'password'
                };

                // Provjera kredencijala
                if (validUsers[username] && validUsers[username] === password) {
                    // USPJEŠNA PRIJAVA
                    errorMsg.style.display = 'none';
                    successMsg.style.display = 'block';

                    // Spremi podatke u localStorage
                    const userData = {
                        username: username,
                        login_time: new Date().toLocaleString('hr-HR'),
                        remember: remember
                    };

                    localStorage.setItem('user_data', JSON.stringify(userData));
                    localStorage.setItem('logged_in', 'true');

                    // Ako je odabran "Zapamti me"
                    if (remember) {
                        localStorage.setItem('remember_token', 'token_' + Date.now());
                    }

                    // Redirekcija nakon 1.5 sekunde
                    setTimeout(() => {
                        window.location.href = '/dashboard';
                    }, 1500);

                } else {
                    // NEUSPJEŠNA PRIJAVA
                    errorMsg.style.display = 'block';
                    successMsg.style.display = 'none';
                    document.getElementById('password').value = '';
                    document.getElementById('username').focus();
                }
            }, 1500);
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
