import { useEffect } from "react";

/**
 * Učitava klasične <script> tagove (ne ESM) iz /public/js iz baze projekta.
 * Skripte se izvršavaju sekvencijalno i uklanjaju pri unmountu kako bi se
 * izbjegli duplikati kod navigacije između ruta.
 */
export function ExternalScripts({ srcs }: { srcs: string[] }) {
  useEffect(() => {
    const tags: HTMLScriptElement[] = [];
    let cancelled = false;

    (async () => {
      for (const src of srcs) {
        if (cancelled) return;
        await new Promise<void>((resolve) => {
          const s = document.createElement("script");
          s.src = src;
          s.async = false;
          s.onload = () => resolve();
          s.onerror = () => resolve();
          document.body.appendChild(s);
          tags.push(s);
        });
      }
    })();

    return () => {
      cancelled = true;
      tags.forEach((t) => t.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [srcs.join("|")]);

  return null;
}