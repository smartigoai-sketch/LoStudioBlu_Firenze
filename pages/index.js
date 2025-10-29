import { useState, useEffect } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Chiude il menu quando si clicca un link
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link =>
      link.addEventListener("click", () => setMenuOpen(false))
    );
  }, []);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", color: "#333", margin: 0 }}>
      {/* HEADER RESPONSIVE */}
      <header
        style={{
          position: "sticky",
          top: 0,
          background: "#fff",
          borderBottom: "1px solid #ddd",
          padding: "12px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 100,
        }}
      >
        <h1 style={{ margin: 0, fontSize: "20px" }}>Studio Blu Firenze</h1>

        {/* MENU DESKTOP */}
        <nav className="desktop-menu" style={{ display: "none" }}>
          <a href="#home" style={{ margin: "0 12px", textDecoration: "none",
color: "#000", color: "#333" }}>
            Home
          </a>
          <a href="#chi-siamo" style={{ margin: "0 12px", textDecoration: "none",
color: "#000", color: "#333" }}>
            Chi siamo
              </a>
          <a href="#contatti" style={{ margin: "0 12px", textDecoration: "none",
color: "#000", color: "#333" }}>
            Contatti
          </a>
          <a href="#join-us" style={{ margin: "0 12px", textDecoration: "none",
color: "#000", color: "#333" }}>
            Join Us
          </a>
        </nav>

        {/* MENU MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            border: "none",
            background: "transparent",
            fontSize: "24px",
            cursor: "pointer",
            display: "block",
          }}
        >
          ☰
        </button>

        {menuOpen && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              right: 0,
              background: "#fff",
              boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              width: "100%",
              textAlign: "right",
              padding: "10px 20px",
            }}
          >
            <a href="#home" style={{ padding: "8px 0" }}>
              Home
            </a>
            <a href="#chi-siamo" style={{ padding: "8px 0" }}>
              Chi siamo
            </a>
            <a href="#contatti" style={{ padding: "8px 0" }}>
              Contatti
            </a>
            <a href="#join-us" style={{ padding: "8px 0" }}>
              Join Us
            </a>
          </div>
        )}
      </header>

      {/* HOME */}
      <section id="home" style={{ textAlign: "center", padding: "40px 16px" }}>
        <img
          src="/logo.png"
          alt="Logo Studio Blu Firenze"
          style={{
            width: "320px",
            maxWidth: "90%",
            marginBottom: "20px",
            filter: "drop-shadow(0 0 10px rgba(0,0,0,0.2))",
          }}
        />
        <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
          Benvenuti nello Studio Blu Firenze
        </h2>
        <p style={{ maxWidth: "600px", margin: "0 auto", lineHeight: 1.6 }}>
          Un luogo dedicato all’ascolto, alla crescita personale e al benessere
          psicologico.
        </p>
      </section>

    {/* CHI SIAMO */}
<section id="chi-siamo" style={{ padding: "40px 16px", background: "#f8f8f8" }}>
  <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "30px" }}>
    Chi siamo
  </h2>

  {/* griglia responsive: mai 3+1 */}
  <div className="cs-grid">
    {[
      {
        img: "/prof1.jpg",
        nome: "Dr. Luca Bianchi",
        ruolo: "Psicologo clinico",
        descrizione:
          "Specializzato in psicologia clinica e terapia cognitivo-comportamentale. Aiuta adolescenti e adulti a superare momenti di crisi, ansia e difficoltà relazionali.",
        link: "/prof-luca-bianchi",
      },
      {
        img: "/prof2.jpg",
        nome: "Dott.ssa Giulia Rossi",
        ruolo: "Psicoterapeuta",
        descrizione:
          "Sostegno individuale e di coppia, lavoro su comunicazione ed emozioni con approccio centrato sulla persona.",
        link: "/prof-giulia-rossi",
      },
      {
        img: "/prof3.jpg",
        nome: "Dott.ssa Anna Verdi",
        ruolo: "Psicologa dell’età evolutiva",
        descrizione:
          "Segue bambini e adolescenti con difficoltà scolastiche, comportamentali o emotive, in collaborazione con famiglia e scuola.",
        link: "/prof-anna-verdi",
      },
      {
        img: "/prof4.jpg",
        nome: "Dr. Marco Neri",
        ruolo: "Consulente relazionale",
        descrizione:
          "Supporta individui e coppie nei momenti di cambiamento, migliorando consapevolezza e qualità delle relazioni.",
        link: "/prof-marco-neri",
      },
    ].map((p, i) => (
      <a key={i} href={p.link} className="cs-card">
        <img src={p.img} alt={p.nome} style={{ width: "100%", marginBottom: 16 }} />
        <h3 style={{ fontSize: 18, marginBottom: 4 }}>{p.nome}</h3>
        <p style={{ color: "#555", fontWeight: "bold", marginBottom: 8 }}>{p.ruolo}</p>
        <p style={{ fontSize: 15, lineHeight: 1.5, color: "#444", margin: 0 }}>{p.descrizione}</p>
      </a>
    ))}
  </div>

  {/* stile inline dedicato alla griglia/card */}
  <style>{`
    .cs-grid {
      display: grid;
      gap: 20px;
      max-width: 1000px;
      margin: 0 auto;
    }
    @media (max-width: 600px) {
      .cs-grid { grid-template-columns: 1fr; }
    }
    @media (min-width: 601px) and (max-width: 950px) {
      .cs-grid { grid-template-columns: repeat(2, 1fr); }
    }
    @media (min-width: 951px) {
      .cs-grid { grid-template-columns: repeat(4, 1fr); }
    }

    .cs-card {
      display: block;
      background: #fff;
      text-decoration: none;
      color: #000;
      padding: 24px;
      box-shadow: 0 0 12px rgba(0,0,0,0.08);
      transition: transform .25s ease, box-shadow .25s ease;
    }
    .cs-card:hover {
      box-shadow: 0 0 20px rgba(37,99,235,0.3);
      transform: translateY(-4px);
    }
  `}</style>
</section>


      {/* CONTATTI */}
      <section id="contatti" style={{ padding: "40px 16px" }}>
        <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "10px" }}>
          Contatti
        </h2>
        <p style={{ textAlign: "center" }}>📧 info@studioblufirenze.it</p>
        <p style={{ textAlign: "center" }}>📞 +39 333 000 0000</p>
      </section>

      {/* JOIN US */}
      <section id="join-us" style={{ padding: "40px 16px", background: "#f8f8f8" }}>
        <h2 style={{ textAlign: "center", fontSize: "26px", marginBottom: "10px" }}>
          Join Us
        </h2>
        <p style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto" }}>
          Se sei un professionista e vuoi collaborare con noi, invia la tua
          candidatura a <b>hr@studioblufirenze.it</b>
        </p>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          fontSize: "14px",
          color: "#666",
          borderTop: "1px solid #ddd",
          padding: "20px",
        }}
      >
        © {new Date().getFullYear()} Studio Blu Firenze — Cookie & Privacy
      </footer>

      {/* STILI RESPONSIVE INLINE */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: block !important; }
          button { display: none !important; }
        }
      `}</style>
    </div>
  );
}
