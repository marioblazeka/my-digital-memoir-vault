import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

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

const contactSchema = z.object({
  name: z.string().trim().min(2, "Ime mora imati barem 2 znaka").max(100, "Ime je predugačko"),
  email: z.string().trim().email("Neispravna email adresa").max(255),
  subject: z.string().trim().min(2, "Predmet je obavezan").max(150),
  message: z.string().trim().min(5, "Poruka mora imati barem 5 znakova").max(2000, "Poruka je predugačka"),
});

function OMeniPage() {
  const [status, setStatus] = useState<null | { type: "ok" | "err"; msg: string }>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      subject: (form.elements.namedItem("subject") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      setStatus({ type: "err", msg: parsed.error.issues[0]?.message ?? "Provjerite unos." });
      return;
    }
    const body = `${parsed.data.message}\n\n— ${parsed.data.name} <${parsed.data.email}>`;
    window.location.href =
      `mailto:blazekamario@gmail.com?subject=${encodeURIComponent(parsed.data.subject)}` +
      `&body=${encodeURIComponent(body)}`;
    setStatus({ type: "ok", msg: "Otvaram vaš email klijent…" });
  };

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

        {/* KONTAKT KARTICA */}
        <section className="section" aria-labelledby="contact-card-title">
          <h2 id="contact-card-title">📬 Kontakt forma</h2>
          <div className="contact-grid">
            <div className="contact-info-card">
              <h3>Kontakt podaci</h3>
              <ul className="contact-list">
                <li>
                  <span className="contact-ico" aria-hidden="true">📍</span>
                  <div>
                    <strong>Adresa</strong>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Murska+12%2C+40320+Donji+Kraljevec"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Murska 12, 40320 Donji Kraljevec
                    </a>
                  </div>
                </li>
                <li>
                  <span className="contact-ico" aria-hidden="true">📞</span>
                  <div>
                    <strong>Telefon</strong>
                    <a href="tel:+385915008312">+385 91 500 8312</a>
                  </div>
                </li>
                <li>
                  <span className="contact-ico" aria-hidden="true">✉️</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:blazekamario@gmail.com">blazekamario@gmail.com</a>
                  </div>
                </li>
              </ul>

              <div className="contact-map">
                <iframe
                  title="Lokacija na Google Maps — Murska 12, Donji Kraljevec"
                  src="https://www.google.com/maps?q=Murska+12,+40320+Donji+Kraljevec&output=embed"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <form className="contact-form-card" onSubmit={handleSubmit} noValidate>
              <h3>Pošalji poruku</h3>
              <div className="form-row">
                <label htmlFor="cf-name">Ime i prezime</label>
                <input id="cf-name" name="name" type="text" required maxLength={100} autoComplete="name" />
              </div>
              <div className="form-row">
                <label htmlFor="cf-email">Email</label>
                <input id="cf-email" name="email" type="email" required maxLength={255} autoComplete="email" />
              </div>
              <div className="form-row">
                <label htmlFor="cf-subject">Predmet</label>
                <input id="cf-subject" name="subject" type="text" required maxLength={150} />
              </div>
              <div className="form-row">
                <label htmlFor="cf-message">Poruka</label>
                <textarea id="cf-message" name="message" rows={5} required maxLength={2000} />
              </div>
              {status && (
                <p
                  className={status.type === "ok" ? "form-msg form-ok" : "form-msg form-err"}
                  role={status.type === "err" ? "alert" : "status"}
                >
                  {status.msg}
                </p>
              )}
              <button type="submit" className="contact-submit-btn">
                ✉️ Pošalji poruku
              </button>
              <p className="form-hint">
                Klikom na "Pošalji poruku" otvara se vaš email klijent s pripremljenom porukom.
              </p>
            </form>
          </div>
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
