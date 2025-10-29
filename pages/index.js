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
      <section id="home" style={{textAlign:'center', padding:'60px 20px'}}>
        <img src="/logo.png" alt="Logo Studio Blu" style={{width:'100px', marginBottom:'20px'}} />
        <h2 style={{fontSize:'28px', marginBottom:'10px'}}>Benvenuti nello Studio Blu</h2>
        <p style={{maxWidth:'600px', margin:'0 auto', fontSize:'16px', lineHeight:1.6}}>
          Un luogo dedicato all’ascolto, alla crescita personale e al benessere psicologico.
        </p>
      </section>

      {/* CHI SIAMO */}
      <section id="chi-siamo" style={{padding:'60px 20px', background:'#f8f8f8'}}>
        <h2 style={{textAlign:'center', fontSize:'26px', marginBottom:'30px'}}>Chi siamo</h2>
        <div style={{
          display:'grid',
          gridTemplateColumns:'repeat(auto-fit, minmax(200px, 1fr))',
          gap:'20px',
          maxWidth:'900px',
          margin:'0 auto'
        }}>
          <div style={{
            border:'1px solid #ddd',
            borderRadius:'10px',
            padding:'20px',
            textAlign:'center',
            transition:'transform 0.3s',
            background:'#fff'
          }}>
            <img src="/prof1.jpg" alt="Psicologo 1" style={{width:'100%', borderRadius:'8px', marginBottom:'10px'}} />
            <h3>Nome Psicologo 1</h3>
            <p>Psicologo clinico</p>
          </div>

          <div style={{
            border:'1px solid #ddd',
            borderRadius:'10px',
            padding:'20px',
            textAlign:'center',
            background:'#fff'
          }}>
            <img src="/prof2.jpg" alt="Psicologo 2" style={{width:'100%', borderRadius:'8px', marginBottom:'10px'}} />
            <h3>Nome Psicologo 2</h3>
            <p>Psicoterapeuta</p>
          </div>

          <div style={{
            border:'1px solid #ddd',
            borderRadius:'10px',
            padding:'20px',
            textAlign:'center',
            background:'#fff'
          }}>
            <img src="/prof3.jpg" alt="Psicologo 3" style={{width:'100%', borderRadius:'8px', marginBottom:'10px'}} />
            <h3>Nome Psicologo 3</h3>
            <p>Psicologo infantile</p>
          </div>

          <div style={{
            border:'1px solid #ddd',
            borderRadius:'10px',
            padding:'20px',
            textAlign:'center',
            background:'#fff'
          }}>
            <img src="/prof4.jpg" alt="Psicologo 4" style={{width:'100%', borderRadius:'8px', marginBottom:'10px'}} />
            <h3>Nome Psicologo 4</h3>
            <p>Consulente relazionale</p>
          </div>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" style={{padding:'60px 20px'}}>
        <h2 style={{textAlign:'center', fontSize:'26px', marginBottom:'10px'}}>Contatti</h2>
        <p style={{textAlign:'center', marginBottom:'5px'}}>📧 info@studioblu.it</p>
        <p style={{textAlign:'center'}}>📞 +39 333 000 0000</p>
      </section>

      {/* JOIN US */}
      <section id="join-us" style={{padding:'60px 20px', background:'#f8f8f8'}}>
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

