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
        </section>

        {/* Profesionalni razvoj */}
        <section className="section about-section" aria-labelledby="career-title">
          <h2 id="career-title">🎖️ Profesionalni put</h2>
          <div className="about-content">
            <p>
              Profesionalni razvoj započeo sam u <strong>Oružanim snagama Republike Hrvatske</strong>, gdje sam napredovao od vojnika do časnika te se specijalizirao u području protuminskog djelovanja, pirotehnike i EOD/IED zaštite te robotike, uz razne međunarodne obuke i certifikate stečene u Hrvatskoj, Europi i SAD-u.
            </p>
            <p>
              Nakon časnog otpusta iz vojske <strong>2011. godine</strong> karijeru nastavljam u sustavu zaštite i spašavanja, a potom u <strong>Ministarstvu unutarnjih poslova RH</strong>, gdje danas radim kao viši voditelj dežurne smjene u Županijskom centru 112.
            </p>
            <p>
              Kontinuirano se stručno usavršavam u području pedagogije, informatike i upravljanja sustavima, te <strong>2017.</strong> završavam pedagoško-psihološko-didaktičko-metodičku izobrazbu nastavnika (FOI Varaždin). Godine <strong>2023.</strong> upisujem diplomski studij informatike – nastavni smjer, koji je u završnoj fazi.
            </p>
            <p>
              Od <strong>2013. godine</strong> upravljam trgovačkim društvom specijaliziranim za tehničku analizu i testiranje strojeva i opreme. Godine <strong>2022.</strong> izabran sam za predsjednika <strong>Udruge za informatiku, bežične mreže i napredne tehnologije DKWIRELESS Donji Kraljevec</strong>.
            </p>
            <p>
              Autor sam i idejni začetnik verificiranog programa <strong>Radionica mehatronike za osnovne škole</strong>, odobrenog od Ministarstva znanosti i obrazovanja za provedbu na području cijele Republike Hrvatske. Aktivno se služim engleskim jezikom, osnovno njemačkim, te kontinuirano djelujem u području tehničke edukacije, informatike i civilne zaštite.
            </p>
            <p>
              Dugogodišnji sam volonter u vatrogastvu, posjedujem brojne tehničke i operativne dozvole te kontinuirano sudjelujem u aktivnostima zaštite, spašavanja i tehničke edukacije. U privatnom životu sam suprug i otac dvoje djece.
            </p>
          </div>
        </section>

        {/* Mediji */}
        <section className="section web-tools-section" aria-labelledby="media-title">
          <h2 id="media-title">📰 O nama kroz medije</h2>
          <ul className="media-list">
            <li>
              <a href="https://medjimurski.hr/foto-u-djecjem-vrticu-fticek-predskolci-uce-pocetno-programiranje-i-osnove-robotike/" target="_blank" rel="noreferrer">
                U dječjem vrtiću Ftiček predškolci uče početno programiranje i osnove robotike
              </a>
            </li>
            <li>
              <a href="https://medjimurski.hr/foto-u-os-donji-kraljevec-zapoceo-program-biciklom-sigurno-u-prometu/" target="_blank" rel="noreferrer">
                U OŠ Donji Kraljevec započeo program „Biciklom sigurno u prometu"
              </a>
            </li>
            <li>
              <a href="https://emedjimurje.net.hr/vijesti/drustvo/300711/donji-kraljevec-zanimljiva-radionica-mjerili-brzinu-lopte-nakon-udarca-brzinu-trcanja/" target="_blank" rel="noreferrer">
                Zanimljiva radionica – mjerili brzinu lopte nakon udarca i brzinu trčanja
              </a>
            </li>
            <li>
              <a href="https://os-draskovec.skole.hr/od-koda-do-pokreta-spoj-tehnologije-i-maste-u-informatickoj-ucionici/" target="_blank" rel="noreferrer">
                Od koda do pokreta – spoj tehnologije i mašte u informatičkoj učionici
              </a>
            </li>
            <li>
              <a href="https://www.skola-hodosan.hr/radionica-mehatronike/" target="_blank" rel="noreferrer">
                Radionica mehatronike – Škola Hodošan
              </a>
            </li>
            <li>
              <a href="https://emedjimurje.net.hr/vijesti/drustvo/2761205/bicikliskticki-ispit-os-donji-kraljevec-potpisala-sporazum-o-suradnji-u-provedbi-projekta-biciklom-sigurno-u-prometu/" target="_blank" rel="noreferrer">
                Biciklistički ispit – OŠ Donji Kraljevec potpisala sporazum o suradnji
              </a>
            </li>
            <li>
              <a href="https://emedjimurje.net.hr/vijesti/drustvo/3072204/steam-festival-u-cakovcu-spoj-znanosti-i-igre-koji-potice-a-ha-trenutke/" target="_blank" rel="noreferrer">
                STEAM festival u Čakovcu – spoj znanosti i igre
              </a>
            </li>
          </ul>
        </section>

        {/* LinkedIn */}
        <section className="section about-section" aria-labelledby="linkedin-title" style={{ textAlign: "center" }}>
          <h2 id="linkedin-title">🔗 LinkedIn profil</h2>
          <p style={{ marginBottom: "1.5rem" }}>
            Saznajte više o mom profesionalnom iskustvu i povežite se sa mnom.
          </p>
          <a
            href="https://hr.linkedin.com/in/mario-bla%C5%BEeka-47190058"
            target="_blank"
            rel="noreferrer"
            className="btn-link"
          >
            Posjeti LinkedIn profil →
          </a>
        </section>

        <section className="section about-section" style={{ textAlign: "center" }}>
          <div className="hero-buttons" style={{ justifyContent: "center" }}>
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
