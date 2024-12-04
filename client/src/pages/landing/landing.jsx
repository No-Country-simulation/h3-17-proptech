import { VscGraphLine } from "react-icons/vsc";
import { RiDashboardLine } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { MdOutlineHub } from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import defaultImg from "../../assets/default.jpg";
import "./landing.css";
export function LandingPage() {
  const topSection = (
    <main id="landingTop">
      <img src={defaultImg} id="mainImg" />
      <h1 id="topTitle">¡Financia terrenos, transforma vidas!</h1>
      <p id="topText">
        Una plataforma diseñada para revolucionar la financiación de terrenos en
        Latinoamérica.
        <br />
        Transparente, confiable y accesible para todos.
      </p>
      <button id="topButton">Button</button>
    </main>
  );

  const smartInv = (
    <section id="smartInv">
      <img src={defaultImg} id="smartInvImg" />
      <div id="smartInvAside">
        <div id="invIconDiv">
          <div id="graphLineIcon">
            <VscGraphLine style={{ color: "black" }} />
          </div>
        </div>
        <h3 id="titleInvestment">Inversión Inteligente</h3>
        <p id="investText">
          Sé parte del cambio: financia oportunidades habitacionales,
          diversifica tu portafolio y genera rendimientos sólidos con total
          transparencia. Conecta con compradores, impulsa el desarrollo y
          construye un legado que trascienda.
        </p>
        <button id="investButton">Button</button>
      </div>
    </section>
  );

  const finanDream = (
    <section id="finanDream">
      <img />
      <div id="finanDreamAside">
        <span></span>
        <h3 id="yourDreamTitle">Tu sueño, nuestra misión</h3>
        <p id="yourDreamText">
          Haz realidad el sueño de tener tu propio terreno con opciones de
          financiamiento que se adaptan a ti. Te ofrecemos soluciones flexibles,
          accesibles y seguras para que puedas dar el primer paso hacia tu nuevo
          hogar.
        </p>
        <button id="yourDreamButton">Button</button>
      </div>
    </section>
  );

  const whoAreWe = (
    <section id="whoAreWe">
      <img id="whoWeAreImg" />
      <div id="whoAreWeAside">
        <h3 id="whoWeAreTitle">¿Quienes somos?</h3>
        <p id="whoWeAreText">
          Somos una plataforma fintech dedicada a transformar el acceso a
          terrenos en Latinoamérica. Nuestra misión es cerrar la brecha de
          financiamiento, ofreciendo soluciones accesibles para que las familias
          puedan adquirir el terreno donde construir su hogar. Al mismo tiempo,
          brindamos a los inversores una oportunidad sólida de diversificación
          en un mercado de alta revalorización. Con un enfoque en la inclusión
          financiera y la transparencia, conectamos a compradores e inversores a
          través de un proceso 100% digital, ágil y seguro. ¡Juntos, estamos
          construyendo el futuro de la vivienda en la región!
        </p>
        <button id="whoWeAreButton">Button</button>
      </div>
    </section>
  );

  return (
    <div id="landing">
      {topSection}
      {smartInv}
    </div>
  );
}
