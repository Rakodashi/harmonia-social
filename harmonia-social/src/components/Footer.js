import logo from "../assets/hs-icon.svg"
import instagram from "../assets/instagram.svg"
import whatsapp from "../assets/whatsapp.svg"
import telegram from "../assets/telegram.svg"
import youtube from "../assets/youtube.svg"
import facebook from "../assets/facebook.svg"
import vakinha from "../assets/vakinha.svg"

const Footer = () => {
  return ( 
    <footer>
    <span className="social-btns">
      <a href="https://instagram.com/harmoniasocial?igshid=MzRlODBiNWFlZA==" target="_blank" rel="noreferrer noopener"><img src={instagram} alt="Instagram" id="instagram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={whatsapp} alt="Whatsapp" className="whatsapp" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={telegram} alt="Telegram" className="telegram" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={youtube} alt="Youtube" className="youtube" /></a>
      <a href="#" target="_blank" rel="noreferrer noopener"><img src={facebook} alt="Facebook" className="facebook" /></a>
      <a href="https://www.vakinha.com.br/vaquinha/harmonia-social-thiago-martins" target="_blank" rel="noreferrer noopener"><img src={vakinha} alt="vakinha" className="vakinha" /></a>
    </span>
    <div href="#" id="footer-logo" title="Centro Cultural Harmonia Social" alt="Harmonia Social logo"><img src={logo} alt="" id="footerLogo" />
    <span id="FooterText">
      <h1 className="logo-top">Centro cultural</h1>
      <h1 className="logo-btm">Harmonia Social</h1>
    </span>
  </div>
</footer>
   );
}
 
export default Footer;