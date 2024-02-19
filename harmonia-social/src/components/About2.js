import nossoProjeto from "../assets/5.2.jpg"

const About2 = () => {
  return ( 
    <section id="about2" className="blue">
      <img src={nossoProjeto} alt="" />
      <div className="aboutText">
        <h1>Doações</h1>
          <p>O objetivo com o valor, é: Comprar materiais básicos para oficinas de artes, pipoca para o cinema, e materiais escolares básicos. Com música tudo é melhor!</p>
          <p>Se você tem lápis de cor que não usa mais, canetinhas, materiais escolares básicos, folhas, cadernos, livros… tudo isso é importante para o projeto, não precisa ser novo.</p>
          <p>Apoie essa causa!</p>
    </div>
  </section>
   );
}
 
export default About2;