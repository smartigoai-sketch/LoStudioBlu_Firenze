export default function Home() {
  return (
    <div style={{fontFamily:'Arial, sans-serif', margin:0, padding:0, color:'#333'}}>
      {/* HEADER */}
      <header style={{
        position:'sticky',
        top:0,
        background:'#fff',
        borderBottom:'1px solid #ddd',
        padding:'12px 20px',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        zIndex:100
      }}>
        <h1 style={{margin:0, fontSize:'20px'}}>Studio Blu Psicologia</h1>
        <nav style={{display:'flex', gap:'20px'}}>
          <a href="#home" style={{textDecoration:'none', color:'#333'}}>Home</a>
          <a href="#chi-siamo" style={{textDecoration:'none', color:'#333'}}>Chi siamo</a>
          <a href="#contatti" style={{textDecoration:'none', color:'#333'}}>Contatti</a>
          <a href="#join-us" style={{textDecoration:'none', color:'#333'}}>Join Us</a>
        </nav>
      </header>

      {/* HOME */}
      <section id="home" style={{textAlign:'center', padding:'40px 20px'}}>
        <img 
  src="/logo.png" 
  alt="Logo Studio Blu" 
  style={{
    width:'280px',       // dimensione raddoppiata
    maxWidth:'90%',      // si adatta su mobile
    marginBottom:'30px', // un po’ più di spazio sotto
    filter:'drop-shadow(0 0 10px rgba(0,0,0,0.15))' // leggero effetto glow
  }} 
/>

        <h2 style={{fontSize:'28px', marginBottom:'10px'}}>Benvenuti nello Studio Blu</h2>
        <p style={{maxWidth:'600px', margin:'0 auto', fontSize:'16px', lineHeight:1.6}}>
          Un luogo dedicato all’ascolto, alla crescita personale e al benessere psicologico.
        </p>
      </section>

    {/* CHI SIAMO */}
<section id="chi-siamo" style={{padding:'40px 20px', background:'#f8f9fa'}}>
  <h2 style={{textAlign:'center', fontSize:'28px', marginBottom:'40px'}}>Chi siamo</h2>
  <div style={{
    display:'grid',
    gridTemplateColumns:'repeat(auto-fit, minmax(220px, 1fr))',
    gap:'28px',
    maxWidth:'1000px',
    margin:'0 auto'
  }}>
   {[
  { img:'/prof1.jpg', nome:'Dr. Luca Bianchi', ruolo:'Psicologo clinico', descrizione:'Specializzato...', link:'/prof-luca-bianchi' },
  { img:'/prof2.jpg', nome:'Dott.ssa Giulia Rossi', ruolo:'Psicoterapeuta', descrizione:'Si occupa...', link:'/prof-giulia-rossi' },
  { img:'/prof3.jpg', nome:'Dott.ssa Anna Verdi', ruolo:'Psicologa dell’età evolutiva', descrizione:'Segue...', link:'/prof-anna-verdi' },
  { img:'/prof4.jpg', nome:'Dr. Marco Neri', ruolo:'Consulente relazionale', descrizione:'Supporta...', link:'/prof-marco-neri' }
].map((p, i) => (
  <a
    key={i}
    href={p.link}
    style={{
      textDecoration:'none',
      color:'#000',
      background:'#fff',
      padding:'24px',
      boxShadow:'0 0 12px rgba(0,0,0,0.08)',
      transition:'transform 0.25s ease, box-shadow 0.25s ease',
      display:'block'
    }}
    onMouseEnter={(e)=>{e.currentTarget.style.boxShadow='0 0 20px rgba(37,99,235,0.3)'; e.currentTarget.style.transform='translateY(-4px)';}}
    onMouseLeave={(e)=>{e.currentTarget.style.boxShadow='0 0 12px rgba(0,0,0,0.08)'; e.currentTarget.style.transform='translateY(0)';}}
  >
    <img src={p.img} alt={p.nome} style={{width:'100%', marginBottom:'16px'}} />
    <h3 style={{margin:'8px 0 4px', fontSize:'18px'}}>{p.nome}</h3>
    <p style={{margin:'0 0 12px', color:'#555', fontWeight:'bold'}}>{p.ruolo}</p>
    <p style={{margin:0, fontSize:'15px', lineHeight:1.5, color:'#444'}}>{p.descrizione}</p>
  </a>
))}


  </div>
</section>


      {/* CONTATTI */}
      <section id="contatti" style={{padding:'40px 20px'}}>
        <h2 style={{textAlign:'center', fontSize:'26px', marginBottom:'10px'}}>Contatti</h2>
        <p style={{textAlign:'center', marginBottom:'5px'}}>📧 info@studioblu.it</p>
        <p style={{textAlign:'center'}}>📞 +39 333 000 0000</p>
      </section>

      {/* JOIN US */}
      <section id="join-us" style={{padding:'40px 20px', background:'#f8f8f8'}}>
        <h2 style={{textAlign:'center', fontSize:'26px', marginBottom:'10px'}}>Join Us</h2>
        <p style={{textAlign:'center', maxWidth:'600px', margin:'0 auto'}}>
          Se sei un professionista e vuoi collaborare con noi, invia la tua candidatura a <b>hr@studioblu.it</b>
        </p>
      </section>

      {/* FOOTER */}
      <footer style={{
        textAlign:'center',
        fontSize:'14px',
        color:'#666',
        borderTop:'1px solid #ddd',
        padding:'20px'
      }}>
        © {new Date().getFullYear()} Studio Blu Psicologia — Cookie & Privacy
      </footer>
    </div>
  );
}

