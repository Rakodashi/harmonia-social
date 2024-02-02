import NossoProjeto from "../assets/7.jpg"

const About = () => {
  return ( 
    <section id="about">
        <div className="aboutText">
          <h1>Nosso Projeto</h1>
            <p>O projeto Harmonia Social visa levar aos jovens da Taquara, cultura e musicalização. Com aulas de música e a sua história, história da música brasileira, oficina de percussão, artes, cinema, dança, e muito entretenimento.</p>
            <br />
            <p>A missão é entregar aos jovens, os valores culturais brasileiros, e assim ajudar a reconhecer quem somos e da onde viemos. Também faz parte da missão, melhorar as relações pessoais , o intelecto e o caráter daqueles que fazem parte do projeto.</p>
        </div>
        <img src={NossoProjeto} alt="" />
      </section>
   );
}
 
export default About;