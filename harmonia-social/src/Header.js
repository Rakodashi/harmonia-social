const Header = () => {
  return ( 
    <header>
      <a href="#" id="home" title="Centro Cultural Harmonia Social" alt="Harmonia Social logo"><img src="../assets/hs-icon.svg" alt="" id="logo" />
      <span id="HomeText">
        <h1 class="logo-top">Centro cultural</h1>
        <h1 class="logo-btm">Harmonia Social</h1>
      </span>
    </a>
    <span class="social-btns">
      <a href="https://instagram.com/harmoniasocial?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer noopener"><img src="../assets/instagram.svg" alt="Instagram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src="../assets/whatsapp.svg" alt="Whatsapp" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src="../assets/telegram.svg" alt="Telegram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src="../assets/youtube.svg" alt="Youtube" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src="../assets/facebook.svg" alt="Facebook" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src="../assets/patreon.svg" alt="Patreon" /></a>
    </span>
    </header>
   );
}
 
export default Header;