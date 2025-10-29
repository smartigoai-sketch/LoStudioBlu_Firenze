export default function ProfLucaBianchi() {
  return (
    <div style={{fontFamily:'Arial, sans-serif', padding:'40px 16px', maxWidth:'800px', margin:'0 auto', color:'#333'}}>
      <a href="/" style={{textDecoration:'none', color:'#2563eb', display:'block', marginBottom:'30px'}}>← Torna alla Home</a>
      <img src="/prof1.jpg" alt="Dr. Luca Bianchi" style={{width:'200px', display:'block', margin:'0 auto 20px'}} />
      <h1 style={{textAlign:'center'}}>Dr. Luca Bianchi</h1>
      <p style={{fontSize:'16px', lineHeight:1.6, textAlign:'justify'}}>
        Specializzato in psicologia clinica e terapia cognitivo-comportamentale, aiuta adolescenti e adulti a superare momenti di crisi,
        ansia e difficoltà relazionali con un approccio empatico e personalizzato. 
      </p>

      <h2 style={{marginTop:'50px', textAlign:'center'}}>Contattami</h2>
      <form
        action="YOUR_APPS_SCRIPT_WEBAPP_URL"
        method="post"
        style={{display:'grid', gap:'16px', maxWidth:'500px', margin:'0 auto'}}
      >
        <input type="hidden" name="professionista" value="Dr. Luca Bianchi" />
        <input type="text" name="nome" placeholder="Tuo nome" required style={{padding:'10px', fontSize:'16px'}} />
        <input type="email" name="email" placeholder="Tua email" required style={{padding:'10px', fontSize:'16px'}} />
        <textarea name="messaggio" placeholder="Il tuo messaggio" rows="4" required style={{padding:'10px', fontSize:'16px'}} />
        <button type="submit" style={{
          padding:'12px',
          fontSize:'16px',
          background:'#2563eb',
          color:'#fff',
          border:'none',
          cursor:'pointer'
        }}>Invia</button>
      </form>
    </div>
  );
}
