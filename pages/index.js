
import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main style={{maxWidth:'900px',margin:'40px auto',padding:'0 16px'}}>
        <section id="home" style={{textAlign:'center',marginBottom:'60px'}}>
          <img src="/logo.png" alt="Logo Studio" style={{width:'120px',margin:'0 auto 20px'}} />
          <h1>Studio di Psicologia</h1>
          <p>Benvenuti: un luogo di ascolto e percorsi personalizzati per il benessere psicologico.</p>
        </section>

        <section id="chi-siamo" style={{marginBottom:'60px'}}>
          <h2>Chi siamo</h2>
          <p>Prossimamente qui mostreremo i professionisti dello studio.</p>
        </section>

        <section id="contatti" style={{marginBottom:'60px'}}>
          <h2>Contatti</h2>
          <p>Email: info@tuodominio.it</p>
          <p>Telefono: +39 333 000 0000</p>
        </section>

        <section id="join-us" style={{marginBottom:'60px'}}>
          <h2>Join Us</h2>
          <p>Se sei un professionista e vuoi collaborare, scrivici a hr@tuodominio.it</p>
        </section>
      </main>

      <footer style={{
        borderTop:'1px solid #eee',padding:'20px',textAlign:'center',fontSize:'14px',color:'#555'
      }}>
        Cookie & Privacy — utilizziamo solo cookie tecnici.
      </footer>
    </>
  );
}
