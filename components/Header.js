export default function Header() {
  return (
    <header style={{
      position:'sticky',top:0,zIndex:10,background:'#fff',
      borderBottom:'1px solid #eee',padding:'12px 16px',
      display:'flex',justifyContent:'space-between',alignItems:'center'
    }}>
      <strong>Studio di Psicologia</strong>
      <nav style={{display:'flex',gap:'12px'}}>
        <a href="#home">Home</a>
        <a href="#chi-siamo">Chi siamo</a>
        <a href="#contatti">Contatti</a>
        <a href="#join-us">Join Us</a>
      </nav>
    </header>
  );
}
