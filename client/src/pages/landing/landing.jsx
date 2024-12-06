import { VscGraphLine } from "react-icons/vsc";
import { RiDashboardLine } from "react-icons/ri";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { pic1, pic2, pic3, pic4, pic5 } from "../../assets/index";
import { CardWhyComponent } from "../../components/index";
import { whyUs } from "../../data/whyUs";
import HowItWorks from "../../data/landing-HowItWorks/HowItWorks";
import TestimonialsSlider from "../../data/landing-TestimonialsSlider/TestimonialsSlider";
import "../../colors.css";
import "./landing.css";

export function LandingPage() {
  //¡Financia terrenos, transforma vidas!
  const topSection = (
    <main id="landingTop">
      <div id="mainImgContent">
        <img src={pic1} id="mainImg" />
      </div>

      <h1 id="topTitle">¡Financia terrenos, transforma vidas!</h1>
      <p id="topText">
        Una plataforma diseñada para revolucionar la financiación de terrenos en
        Latinoamérica.
        <br />
        Transparente, confiable y accesible para todos.
      </p>
      <button id="topButton">COMIENZA AHORA</button>
    </main>
  );
  //Inversión Inteligente
  const smartInv = (
    <section id="smartInv">
      <img src={pic2} id="smartInvImg" />
      <div id="smartInvAside">
        <div id="invIconDiv">
          <div id="graphLineIcon">
            <VscGraphLine style={{ color: "black" }} />
          </div>
          <h3 id="invest">INVERSIÓN</h3>
        </div>
        <h3 id="titleInvestment">Invierte con propósito</h3>
        <p id="investText">
          Convierte tus ahorros en una inversión de alto impacto social y
          financiero. Descubre cómo financiar terrenos en zonas de alto
          desarrollo puede generar rendimientos sólidos y confiables.
        </p>
        <button className="regularButton">Explorar oportunidades</button>
      </div>
    </section>
  );

  //Tu sueño, nuestra misión
  const finanDream = (
    <section id="finanDream">
      <div id="finanDreamAside">
        <div id="finanDreamIconDiv">
          <div id="finanDreamIcon">
            <RiDashboardLine style={{ color: "black" }} />
          </div>
          <h3 id="h3Finan">FINANCIACIÓN</h3>
        </div>
        <h3 id="yourDreamTitle">Tu sueño, nuestra misión</h3>
        <p id="yourDreamText">
          Haz realidad el sueño de tener tu propio terreno con opciones de
          financiamiento que se adaptan a ti. Te ofrecemos soluciones
          flexibles,accesibles y seguras para que puedas dar el primer paso
          hacia tu nuevo hogar.
        </p>
        <button className="regularButton">Conocé Más</button>
      </div>
      <div id="DeamImgContent">
        <img src={pic3} id="yourDreamImg" />
      </div>
    </section>
  );
  //¿Quienes somos?
  const whoAreWe = (
    <section id="whoAreWe">
      <div id="whoWeAreImgContent">
        <img src={pic4} id="whoWeAreImg" />
      </div>

      <div id="whoAreWeAside">
        <h2 id="whoWeAreTitle">¿Quienes somos?</h2>
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
        <button className="buttonOutline">
          Nuestra historia
          <TbSquareRoundedArrowRight className="iconButton" />
        </button>
      </div>
    </section>
  );
  //Nuestro Compromiso
  const nuestroCompromiso = (
    <section id="ourCompr">
      <div id="textDivOurCompr">
        <h2 id="titleOurCompr">Nuestro Compromiso</h2>

        <p id="textOurCompr">
          En Financial.al, trabajamos cada día para crear soluciones que marquen
          la diferencia. Creemos en la importancia de construir confianza,
          brindar herramientas accesibles y ofrecer experiencias diseñadas para
          empoderarte en cada paso del camino. Nuestra prioridad es hacer que
          tus metas financieras sean alcanzables, con transparencia y dedicación
          en cada detalle.
        </p>
      </div>
      <div id="imgContent">
        <img src={pic5} id="ourComprImg" />
      </div>
    </section>
  );
  // Por qué somos diferentes??
  const whyUsSection = (
    <section id="whyUsSection">
      <h2 id="whyUsTitle">¿Por qué somos diferentes?</h2>
      <div id="whyUs">
        {whyUs.map((item, index) => (
          <CardWhyComponent key={index} {...item} />
        ))}
      </div>
    </section>
  );
  //
  return (
    <div id="landing">
      {topSection}
      {smartInv}
      {finanDream}
      {whoAreWe}
      {nuestroCompromiso}
      {whyUsSection}
      <HowItWorks />
      <TestimonialsSlider />
    </div>
  );
}
