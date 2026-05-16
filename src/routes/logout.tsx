import { createFileRoute } from "@tanstack/react-router";
import { ExternalScripts } from "@/components/ExternalScripts";

export const Route = createFileRoute("/logout")({
  head: () => ({
    meta: [
      { title: "Odjava – Privatni prostor" },
      { name: "description", content: "Uspješna odjava iz sustava" },
    ],
  }),
  component: LogoutPage,
});

function LogoutPage() {
  return (
    <>


    <main id="main-content" className="main-content">
        <section className="section" style={{'textAlign':'center', 'padding':'4rem 2rem'}}>
            <h1>👋 Odjavili ste se</h1>
            <p style={{'fontSize':'1.2rem', 'margin':'1.5rem 0'}}>Hvala što ste koristili naš sustav!</p>
            <p id="redirect-message">Preusmjeravanje na početnu stranicu za 3 sekunde...</p>
            <a href="/" className="btn-submit" style={{'display':'inline-block', 'marginTop':'2rem'}}>
                Povratak na početnu
            </a>
        </section>
    </main>

    
      <ExternalScripts srcs={["/js/logout.js"]} />
    </>
  );
}
