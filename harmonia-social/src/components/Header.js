import logo from "../assets/hs-icon.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import telegram from "../assets/telegram.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import patreon from "../assets/patreon.svg"
import vakinha from "../assets/vakinha.svg"

const Header = () => {
  return ( 
    <header>
      <a href="#" id="home" title="Centro Cultural Harmonia Social" alt="Harmonia Social logo"><img src={logo} alt="Harmonia Social | Botão Home" id="logo" />
      <span id="HomeText">
        <h1 className="logo-top">Centro cultural</h1>
        <h1 className="logo-btm">Harmonia Social</h1>
      </span>
    </a>
    <span className="social-btns">
      <a href="https://instagram.com/harmoniasocial?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="Instagram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={whatsapp} alt="Whatsapp" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={telegram} alt="Telegram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={youtube} alt="Youtube" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={facebook} alt="Facebook" /></a>
      <a href="https://www.vakinha.com.br/vaquinha/harmonia-social-thiago-martins" target="_blank" rel="noreferrer noopener"><img src={vakinha} alt="Vakinha" /></a>
    </span>
    </header>
   );
}
 
export default Header;