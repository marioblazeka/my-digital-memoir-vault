import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalScripts } from "@/components/ExternalScripts";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mario Blažeka – Osobna web stranica | Web aplikacije" },
      { name: "description", content: "Mario Blažeka - Osobna web stranica | Web aplikacije - Edukativni sadržaj sa web alatima" },
      { property: "og:title", content: "Mario Blažeka – Osobna web stranica" },
      { property: "og:description", content: "Edukativni web alati za kolegij Web aplikacije." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>


    {/* JAVASCRIPT ZA TRČEĆI TEKST U KARTICI */}
    

    {/* Skip to content */}
    <a id="pojo-a11y-skip-content" className="pojo-skip-link" tabIndex={1} accessKey="s" href="#main-content" role="link">Preskoči na sadržaj</a>

    {/* Kolačići banner */}
    <div id="cookie-banner" className="cookie-banner" role="dialog" aria-live="polite" aria-label="Obavijest o kolačićima">
        <div className="cookie-container">
            <div className="cookie-title">Ove stranice koriste kolačiće</div>
            <div className="cookie-desc">
                Ova web stranica koristi kolačiće radi poboljšanja vašeg iskustva pregledavanja. 
                <a href="#kolacici-section" className="cookie-more">Saznaj više</a>
            </div>
            <div className="cookie-buttons">
                <button id="accept-cookies" className="cookie-btn accept-btn">Prihvaćam</button>
                <button id="reject-cookies" className="cookie-btn reject-btn">Ne prihvaćam</button>
            </div>
        </div>
    </div>

    <main id="main-content" className="main-content" tabIndex={-1}>

        {/* HERO SEKCIJA SA ANIMIRANIM TEKSTOM */}
        <header className="header hero-section">
            
            {/* KREIRAJUĆI TEKST - Animirani tekst u krug */}
            <div className="rotating-text-container">
                <svg viewBox="0 0 300 300" className="rotating-text-svg">
                    {/* Cirkularna putanja za tekst */}
                    <defs>
                        <path id="circlePath" 
                              d="M 150, 150 m -120, 0 a 120,120 0 1,1 240,0 a 120,120 0 1,1 -240,0" 
                              fill="none" />
                    </defs>
                    
                    {/* Tekst koji se vrti u krug */}
                    <text className="rotating-text" fontSize="18" fontWeight="bold" fill="#000000" letterSpacing="4">
                        <textPath
                            href="#circlePath"
                            startOffset="0"
                            textLength="754"
                            lengthAdjust="spacingAndGlyphs"
                        >
                            ★ Mario Blažeka ★ Osobna Web stranica ★ Kolegij: Web aplikacije ★
                        </textPath>
                    </text>
                </svg>
            </div>

            <div className="hero-content">
                <h1>Mario Blažeka</h1>
                <p className="subtitle">🎓 Osobna web stranica | Kolegij: Web aplikacije</p>
                <p className="description">Informativni sadržaj sa primjerima web alata za edukaciju</p>
                <div className="hero-buttons">
                    <a href="#web-alati" className="btn-primary">Vidi web alate</a>
                    <a href="/login" className="btn-secondary">Privatni prostor</a>
                </div>
            </div>
        </header>

        {/* O MENI SEKCIJA */}
        <section className="section about-section" aria-labelledby="about-title">
            <h2 id="about-title"><Link to="/o-meni" className="about-link">👨‍💻 O meni</Link></h2>
            <div className="about-content">
                <p>
                    Pozdrav! Ja sam <strong>Mario Blažeka</strong>, student na <strong>Fakultetu informatike</strong>.
                    Ova web stranica je izrada u sklopu kolegija <strong>Web aplikacije</strong>.
                </p>
                <p>
                    Na ovoj stranici ćete pronaći edukativne materijale, primjere koda i pregled 
                    <strong>raznih web alata</strong> koji se koriste u modernoj web razvoj praksi.
                </p>
            </div>
        </section>

        {/* WEB ALATI SEKCIJA */}
        <section id="web-alati" className="section web-tools-section" aria-labelledby="tools-title">
            <h2 id="tools-title">🛠️ Web alati za edukaciju</h2>
            <p className="intro-text">
                Evo pregleda najvažnijih web alata koji se koristi u kolegiju <strong>Web aplikacije</strong>:
            </p>

            {/* FRONTEND */}
            <div className="tools-category">
                <h3>📱 Frontend - Rad sa korisničkim sučeljem</h3>
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="tool-icon">🏗️</div>
                        <h4>HTML5</h4>
                        <p><strong>Verzija:</strong> HTML5 (2024)</p>
                        <p><strong>Opis:</strong> Osnovna struktura web stranica.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Semantički HTML elementi</li>
                                <li>Multimedija (audio, video)</li>
                                <li>Forme i validacija</li>
                            </ul>
                        </div>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🎨</div>
                        <h4>CSS3</h4>
                        <p><strong>Verzija:</strong> CSS3 (Moduli)</p>
                        <p><strong>Opis:</strong> Stilizacija i responsive dizajn.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Flexbox & Grid sustavi</li>
                                <li>Animacije i prijelazi</li>
                                <li>Media queries (responsive)</li>
                            </ul>
                        </div>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">⚡</div>
                        <h4>JavaScript (ES6+)</h4>
                        <p><strong>Verzija:</strong> ECMAScript 2024</p>
                        <p><strong>Opis:</strong> Interaktivnost na web stranicama.</p>
                        <div className="tool-features">
                            <ul>
                                <li>DOM manipulacija</li>
                                <li>Event handling</li>
                                <li>REST API pozivi</li>
                            </ul>
                        </div>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">📦</div>
                        <h4>Bootstrap 5</h4>
                        <p><strong>Verzija:</strong> 5.3.x</p>
                        <p><strong>Opis:</strong> CSS framework za brzu izradou responsive web stranica.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Grid sistem (12 stupaca)</li>
                                <li>Gotove komponente</li>
                                <li>Responsive breakpoints</li>
                            </ul>
                        </div>
                        <a href="https://getbootstrap.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">⚛️</div>
                        <h4>React.js</h4>
                        <p><strong>Verzija:</strong> 18.x</p>
                        <p><strong>Opis:</strong> Biblioteka za izgradnju interaktivnih sučelja.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Komponente i JSX</li>
                                <li>State management</li>
                                <li>Hooks</li>
                            </ul>
                        </div>
                        <a href="https://react.dev/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">💚</div>
                        <h4>Vue.js</h4>
                        <p><strong>Verzija:</strong> 3.x</p>
                        <p><strong>Opis:</strong> Progressive framework za web aplikacije.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Reaktivni podaci</li>
                                <li>Two-way binding</li>
                                <li>Direktivne</li>
                            </ul>
                        </div>
                        <a href="https://vuejs.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>
                </div>
            </div>

            {/* BACKEND */}
            <div className="tools-category">
                <h3>🖥️ Backend - Server-side razvoj</h3>
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="tool-icon">📧</div>
                        <h4>Node.js</h4>
                        <p><strong>Verzija:</strong> 20.x LTS</p>
                        <p><strong>Opis:</strong> JavaScript runtime za server-side aplikacije.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Non-blocking I/O</li>
                                <li>Event-driven arhitektura</li>
                                <li>NPM ekosistem</li>
                            </ul>
                        </div>
                        <a href="https://nodejs.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🚀</div>
                        <h4>Express.js</h4>
                        <p><strong>Verzija:</strong> 4.x</p>
                        <p><strong>Opis:</strong> Minimalistički web framework za Node.js.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Routing</li>
                                <li>Middleware</li>
                                <li>REST API razvoj</li>
                            </ul>
                        </div>
                        <a href="https://expressjs.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🐘</div>
                        <h4>PHP</h4>
                        <p><strong>Verzija:</strong> 8.2+</p>
                        <p><strong>Opis:</strong> Server-side scripting jezik za web razvoj.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Server-side rendering</li>
                                <li>Baza podataka integracija</li>
                                <li>Session management</li>
                            </ul>
                        </div>
                        <a href="https://www.php.net/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🐍</div>
                        <h4>Python</h4>
                        <p><strong>Verzija:</strong> 3.11+</p>
                        <p><strong>Opis:</strong> Fleksibilan jezik za web i podatkovne analize.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Django framework</li>
                                <li>Flask mikro-framework</li>
                                <li>Artificial Intelligence</li>
                            </ul>
                        </div>
                        <a href="https://www.python.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🗄️</div>
                        <h4>Baze podataka (SQL)</h4>
                        <p><strong>Verzije:</strong> MySQL, PostgreSQL, SQLite</p>
                        <p><strong>Opis:</strong> Pohrana i upravljanje strukturiranim podacima.</p>
                        <div className="tool-features">
                            <ul>
                                <li>CRUD operacije</li>
                                <li>Transakcije</li>
                                <li>Indeksiranje</li>
                            </ul>
                        </div>
                        <a href="https://www.mysql.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">📄</div>
                        <h4>MongoDB (NoSQL)</h4>
                        <p><strong>Verzija:</strong> 6.x+</p>
                        <p><strong>Opis:</strong> NoSQL baza za fleksibilnu pohranu podataka.</p>
                        <div className="tool-features">
                            <ul>
                                <li>JSON dokumenti</li>
                                <li>Skalabilnost</li>
                                <li>Fleksibilan šema</li>
                            </ul>
                        </div>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>
                </div>
            </div>

            {/* DEVOPS */}
            <div className="tools-category">
                <h3>⚙️ DevOps, verzioniranje i alati</h3>
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="tool-icon">🔀</div>
                        <h4>Git & GitHub</h4>
                        <p><strong>Verzija:</strong> Git 2.40+</p>
                        <p><strong>Opis:</strong> Sustav za verzioniranje koda i suradnja.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Commit & Push/Pull</li>
                                <li>Branch management</li>
                                <li>GitHub Pages</li>
                            </ul>
                        </div>
                        <a href="https://github.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🐋</div>
                        <h4>Docker</h4>
                        <p><strong>Verzija:</strong> 24.x</p>
                        <p><strong>Opis:</strong> Kontejnerizacija za brzu deploymentaciju.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Docker Images</li>
                                <li>Kontejneri</li>
                                <li>Docker Compose</li>
                            </ul>
                        </div>
                        <a href="https://www.docker.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">💻</div>
                        <h4>Visual Studio Code</h4>
                        <p><strong>Verzija:</strong> 1.85+</p>
                        <p><strong>Opis:</strong> Najpopularniji editor za web razvoj.</p>
                        <div className="tool-features">
                            <ul>
                                <li>IntelliSense</li>
                                <li>Debugger</li>
                                <li>Extensions</li>
                            </ul>
                        </div>
                        <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">📦</div>
                        <h4>npm & Yarn</h4>
                        <p><strong>Verzija:</strong> npm 10.x, Yarn 4.x</p>
                        <p><strong>Opis:</strong> Package managers za JavaScript dependencije.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Instalacija paketa</li>
                                <li>Versioniranje</li>
                                <li>Script runner</li>
                            </ul>
                        </div>
                        <a href="https://www.npmjs.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">📦</div>
                        <h4>Webpack / Vite</h4>
                        <p><strong>Verzija:</strong> Webpack 5.x, Vite 5.x</p>
                        <p><strong>Opis:</strong> Bundleri i build alati za optimizaciju.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Code splitting</li>
                                <li>Asset minification</li>
                                <li>Hot module reload</li>
                            </ul>
                        </div>
                        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">📮</div>
                        <h4>Postman</h4>
                        <p><strong>Verzija:</strong> 11.x</p>
                        <p><strong>Opis:</strong> Alat za testiranje REST API-ja.</p>
                        <div className="tool-features">
                            <ul>
                                <li>API zahtjevi</li>
                                <li>Automatizirana testiranja</li>
                                <li>Dokumentacija</li>
                            </ul>
                        </div>
                        <a href="https://www.postman.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>
                </div>
            </div>

            {/* EDUKACIJA */}
            <div className="tools-category">
                <h3>📚 Edukativni resursi i platforme</h3>
                <div className="tools-grid">
                    <div className="tool-card">
                        <div className="tool-icon">📖</div>
                        <h4>MDN Web Docs</h4>
                        <p><strong>Izdavač:</strong> Mozilla Foundation</p>
                        <p><strong>Opis:</strong> Osnovna dokumentacija za web tehnologije.</p>
                        <div className="tool-features">
                            <ul>
                                <li>HTML, CSS, JavaScript</li>
                                <li>Web API-ji</li>
                                <li>Best practices</li>
                            </ul>
                        </div>
                        <a href="https://developer.mozilla.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🎓</div>
                        <h4>Codecademy</h4>
                        <p><strong>Tip:</strong> Interaktivna platforma</p>
                        <p><strong>Opis:</strong> Online tečajevi za programiranje.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Hands-on vježbe</li>
                                <li>Instant povratne informacije</li>
                                <li>Certificate</li>
                            </ul>
                        </div>
                        <a href="https://www.codecademy.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">💜</div>
                        <h4>FreeCodeCamp</h4>
                        <p><strong>Tip:</strong> Besplatna platforma</p>
                        <p><strong>Opis:</strong> Besplatni tečajevi i videozapisi za web razvoj.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Video tečajevi</li>
                                <li>Certifikati</li>
                                <li>Projekti</li>
                            </ul>
                        </div>
                        <a href="https://www.freecodecamp.org/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🔍</div>
                        <h4>Stack Overflow</h4>
                        <p><strong>Tip:</strong> Q&A platforma</p>
                        <p><strong>Opis:</strong> Najveća zajednica za rješavanje problema.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Pitanja i odgovori</li>
                                <li>Tagging sustav</li>
                                <li>Reputacija</li>
                            </ul>
                        </div>
                        <a href="https://stackoverflow.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🌐</div>
                        <h4>W3Schools</h4>
                        <p><strong>Tip:</strong> Tutorial stranica</p>
                        <p><strong>Opis:</strong> Jednostavni tutoriali za web tehnologije.</p>
                        <div className="tool-features">
                            <ul>
                                <li>HTML, CSS, JS tutoriali</li>
                                <li>"Try it Yourself" editor</li>
                                <li>Reference</li>
                            </ul>
                        </div>
                        <a href="https://www.w3schools.com/" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>

                    <div className="tool-card">
                        <div className="tool-icon">🚀</div>
                        <h4>GitHub Learning Lab</h4>
                        <p><strong>Tip:</strong> Praktični tečajevi</p>
                        <p><strong>Opis:</strong> Tečajevi za Git i GitHub s projektima.</p>
                        <div className="tool-features">
                            <ul>
                                <li>Git & GitHub osnove</li>
                                <li>Kolaboracija</li>
                                <li>CI/CD</li>
                            </ul>
                        </div>
                        <a href="https://github.com/skills" target="_blank" rel="noreferrer" className="btn-link">Saznaj više →</a>
                    </div>
                </div>
            </div>
        </section>

        {/* PRISTUPAČNOST SEKCIJA */}
        <section className="section" aria-labelledby="wcag-title">
            <h2 id="wcag-title">♿ Pristupačnost – WCAG Standards</h2>
            <p>
                <strong>The Web Content Accessibility Guidelines (WCAG)</strong> su temeljne smjernice za pristupačnost web sadržaja. 
                Ova stranica slijedi WCAG 2.1 Level AA standarde za pristupačnost svima.
            </p>
            <h3>POUR principi:</h3>
            <ul className="pour-list">
                <li><strong>P – Perceivable:</strong> Svi elementi su vidljivi i dostupni svim osjetilima</li>
                <li><strong>O – Operable:</strong> Sadržajem se može upravljati tipkovnicom</li>
                <li><strong>U – Understandable:</strong> Informacije su jasne i razumljive</li>
                <li><strong>R – Robust:</strong> Funkcionira u svim preglednicima i tehnologijama</li>
            </ul>
        </section>

        {/* KOLAČIĆI SEKCIJA */}
        <section id="kolacici-section" className="section" aria-labelledby="cookie-policy">
            <h2 id="cookie-policy">🍪 Politika kolačića</h2>
            <p>
                Ova stranica koristi kolačiće samo za poboljšanje korisničkog iskustva. Nema praćenja treće strane.
            </p>
            <div className="cookie-full-text">
                <h3>Koje kolačiće koristimo?</h3>
                <ul>
                    <li><strong>Nužni kolačići:</strong> Za osnovnu funkcionalnost</li>
                    <li><strong>Funkcionalni kolačići:</strong> Za pamćenje postavki</li>
                    <li><strong>Session kolačići:</strong> Za autentifikaciju korisnika</li>
                </ul>
            </div>
        </section>

        {/* KONTAKT SEKCIJA */}
        <section className="section contact-section" aria-labelledby="contact-title">
            <h2 id="contact-title">📞 Kontakt</h2>
            <div className="contact-info">
                <p><strong>Email:</strong> <a href="mailto:mario@example.com">mario@example.com</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/marioblazeka" target="_blank" rel="noreferrer">github.com/marioblazeka</a></p>
                <p><strong>Fakultet:</strong> Fakultet informatike - Kolegij: Web aplikacije</p>
                <p><strong>Akademska godina:</strong> 2025/2026</p>
            </div>
        </section>

        {/* PRIJAVA ZLOUPORABE */}
        <section className="section" aria-labelledby="abuse-link-title">
            <h2 id="abuse-link-title">🚨 Prijava zlouporabe / Report Abuse</h2>
            <p>
                Uočili ste neprikladan sadržaj, phishing, kršenje autorskih ili žigovnih prava?
                Prijavite to putem stranice za zlouporabu.
                <br />
                <em>Spotted inappropriate content, phishing, copyright or trademark infringement? Report it on the dedicated page.</em>
            </p>
            <p>
                <Link to="/abuse" className="btn-link">Otvori prijavu / Open report page →</Link>
            </p>
        </section>

        {/* VISITOR COUNTER & STATISTICS */}
        <div id="stats-widget" className="stats-widget">
          <div className="stats-toggle" title="Statistika">
            📊
          </div>
          <div className="stats-panel" style={{'display':'none'}}>
            <div className="stats-header">
              <h3>📈 Statistika portala</h3>
              <button className="stats-close" aria-label="Zatvori">✕</button>
            </div>
            <div className="stats-content">
              <div className="stat-item">
                <span className="stat-label">👥 Ukupno posjetitelja:</span>
                <span className="stat-value" id="total-visitors">0</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">👤 Trenutno online:</span>
                <span className="stat-value" id="current-visitors">0</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">📅 Posjetitelja danas:</span>
                <span className="stat-value" id="today-visitors">0</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">⏱️ Učitavanja stranice:</span>
                <span className="stat-value" id="page-loads">0</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">⌚ Vrijeme na portalu:</span>
                <span className="stat-value" id="visit-time">0m 0s</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🌐 Vremenski pojas:</span>
                <span className="stat-value" id="timezone">HR</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">📱 Uređaj:</span>
                <span className="stat-value" id="device-type">Desktop</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">💻 Browser:</span>
                <span className="stat-value" id="browser-type">Chrome</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <span className="stat-label">🔗 Zadnja posjeta:</span>
                <span className="stat-value" id="last-visit">Sada</span>
              </div>
              <div className="stat-item">
                <span className="stat-label">🎯 Česta stranica:</span>
                <span className="stat-value" id="most-viewed">index.html</span>
              </div>
            </div>
          </div>
        </div>

        {/* JAVASCRIPT ZA STATISTIKU */}
        

    </main>

    {/* Back to top */}
    <button id="backToTop" className="back-to-top" aria-label="Vrati se na vrh stranice">↑</button>

    {/* Footer */}
    <footer className="footer">
        <p><small>&copy; 2026 Mario Blažeka. Osobna web stranica za kolegij Web aplikacije. Sva prava zadržana.</small></p>
    </footer>

    {/* JAVASCRIPT ZA KOLAČIĆE I BACK-TO-TOP */}
    

    {/* ACCESSIBILITY WIDGET - 29 mogućnosti pristupačnosti */}
    
      <ExternalScripts srcs={["/js/index-tab.js", "/js/index-stats.js", "/js/index-cookies.js", "/js/accessibility-widget.js"]} />
    </>
  );
}
