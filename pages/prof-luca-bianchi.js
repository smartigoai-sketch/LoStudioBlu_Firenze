export default function ProfLucaBianchi() {
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:'40px 16px', maxWidth:'800px', margin:'0 auto', color:'#333'}}>
      <a href="/" className="back-home">← Torna alla Home</a>

      <img src="/prof1.jpg" alt="Dr. Luca Bianchi" style={{width:'200px', display:'block', margin:'0 auto 20px'}} />
      <h1 style={{textAlign:'center'}}>Dr. Luca Bianchi</h1>
      <p style={{fontSize:'16px', lineHeight:1.6, textAlign:'justify'}}>
        Specializzato in psicologia clinica e terapia cognitivo-comportamentale, aiuta adolescenti e adulti a superare momenti di crisi,
        ansia e difficoltà relazionali con un approccio empatico e personalizzato.
      </p>

      <h2 style={{marginTop:'50px', textAlign:'center'}}>Contattami</h2>
      <form
        action="YOUR_APPS_SCRIPT_URL"
        method="post"
        style={{display:'grid', gap:'16px', maxWidth:'500px', margin:'0 auto'}}
      >
        <input type="hidden" name="professionista" value="Dr. Luca Bianchi" />
        <input type="text" name="nome" placeholder="Tuo nome" required style={{padding:'10px', fontSize:'16px'}} />
        <input type="email" name="email" placeholder="Tua email" required style={{padding:'10px', fontSize:'16px'}} />
        <textarea name="messaggio" placeholder="Il tuo messaggio" rows="4" required style={{padding:'10px', fontSize:'16px'}} />
        <button type="submit">Invia</button>
      </form>

      <style>{`
        a {
          color: #444 !important;
          text-decoration: none !important;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        a:hover { color: #000 !important; }
        a:visited { color: #444 !important; }

        .back-home {
          display: inline-block;
          margin-bottom: 30px;
          font-size: 15px;
          color: #555;
          transition: all 0.2s ease;
        }
        .back-home:hover {
          color: #000;
          transform: translateX(-3px);
        }

        button[type="submit"] {
          background: #f2f2f2;
          color: #222;
          border: 1px solid #ddd;
          border-radius: 0;
          font-size: 16px;
          padding: 12px 16px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        button[type="submit"]:hover {
          background: #e8e8e8;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
        }
        button[type="submit"]:active {
          background: #ddd;
        }
      `}</style>
    </div>
  );
}

