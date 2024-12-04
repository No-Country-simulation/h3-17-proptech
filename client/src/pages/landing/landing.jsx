import { VscGraphLine } from "react-icons/vsc";
import { RiDashboardLine } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { TbSquareRoundedArrowRight } from "react-icons/tb";
import { MdOutlineHub } from "react-icons/md";
import { AiOutlineIdcard } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import iconCon from "../../assets/multiple-share-svgrepo-com 1.png"
import iconConf from "../../assets/personal-center-basic-information-svgrepo-com 1.png"
import iconDig from "../../assets/newspaper-svgrepo-com 1.png"
import iconSoc from "../../assets/receipt-svgrepo-com 1.png"
import pic1 from "../../assets/1.jpg"
import pic2 from "../../assets/2.jpg"
import pic3 from "../../assets/3.jpg"
import pic4 from "../../assets/4.jpg"
import pic5 from "../../assets/5.jpg"
import "../../colors.css"
import "./landing.css"
export default function LandingPage (){
    //¡Financia terrenos, transforma vidas!
    const topSection = (
        <main id="landingTop">
                <img src={pic1} id="mainImg"/>
                <h1 id="topTitle">¡Financia terrenos, transforma vidas!</h1>
                <p id="topText">Una plataforma diseñada para revolucionar la financiación de terrenos en Latinoamérica.<br />
                Transparente, confiable y accesible para todos.</p>
                <button id="topButton">COMIENZA AHORA</button>
        </main>
    )
    
    //Inversión Inteligente
    const smartInv = (
        <section id="smartInv">
        <img src={pic2} id="smartInvImg"/>
        <div id="smartInvAside">
            <div id="invIconDiv">
                <div id="graphLineIcon">
                <VscGraphLine style={{color: "black"}} />
                </div>
                <h3 id="invest">INVERSIÓN</h3>
            </div>
            <h3 id="titleInvestment">  
            Invierte con propósito
            </h3>
            <p id="investText">
            Convierte tus ahorros en una inversión de alto impacto social y financiero. Descubre cómo financiar terrenos en zonas de alto desarrollo puede generar rendimientos sólidos y confiables.
            </p>
            <button id="investButton">Explorar oportunidades</button>
        </div>
        </section>
    )

    //Tu sueño, nuestra misión
    const finanDream = (
        <section id="finanDream">
            <div id="finanDreamAside">
                <div id="finanDreamIconDiv">
                    <div id="finanDreamIcon">
                        <RiDashboardLine style={{color: "black"}}/>
                    </div>
                    <h3 id="h3Finan">FINANCIACIÓN</h3>
                </div>
                <h3 id="yourDreamTitle">
                Tu sueño, nuestra misión
                </h3>
                <p id="yourDreamText">
                Haz realidad el sueño de tener tu propio terreno con opciones de financiamiento que se adaptan a ti. Te ofrecemos soluciones flexibles, accesibles y seguras para que puedas dar el primer paso hacia tu nuevo hogar. 
                </p>
                <button id="yourDreamButton">
                Conocé Más
                </button>
            </div>
            <img src={pic3} id="yourDreamImg"/>
        </section>
    )

    //¿Quienes somos?
    const whoAreWe = (
        <section id="whoAreWe">
            <img src={pic4} id="whoWeAreImg"/>
            <div id="whoAreWeAside">
                <h2 id="whoWeAreTitle">¿Quienes somos?</h2>
                <p id="whoWeAreText">Somos una plataforma fintech dedicada a transformar el acceso a terrenos en Latinoamérica. Nuestra misión es cerrar la brecha de financiamiento, ofreciendo soluciones accesibles para que las familias puedan adquirir el terreno donde construir su hogar. Al mismo tiempo, brindamos a los inversores una oportunidad sólida de diversificación en un mercado de alta revalorización. Con un enfoque en la inclusión financiera y la transparencia, conectamos a compradores e inversores a través de un proceso 100% digital, ágil y seguro. ¡Juntos, estamos construyendo el futuro de la vivienda en la región!</p>
                <button id="whoWeAreButton">Nuestra historia<TbSquareRoundedArrowRight style={{ coloR: "white"}} /></button>
            </div>
        </section>
    )

    //Nuestro Compromiso
    const nuestroCompromiso = (
        <section id="ourCompr">
           <div id="textDivOurCompr">
                <h2 
                id="titleOurCompr">
                Nuestro Compromiso
                </h2>

                <p 
                id="textOurCompr">
                En Financial.al, trabajamos cada día para crear soluciones que marquen la diferencia. Creemos en la importancia de construir confianza, brindar herramientas accesibles y ofrecer experiencias diseñadas para empoderarte en cada paso del camino. Nuestra prioridad es hacer que tus metas financieras sean alcanzables, con transparencia y dedicación en cada detalle.
                </p>
           </div>
           <img src={pic5} id="ourComprImg"/>
        </section>
    )

    // Por qué somos diferentes??
    const whyUs = [

        {
            icon: iconCon,
            title: "Conexión",
            color: "#B8DEDA",
            text: `Cerramos la brecha 
            entre inversores y 
            compradores, 
            ofreciendo una 
            experiencia confiable y 
            personalizada.`
        },

        {
            icon: iconConf,
            title: "Confianza",
            color: "rgba(248, 235, 205, 0.8)",
            text: `Herramientas de análisis 
            y validación para 
            garantizar inversiones 
            seguras.`
        },

        {
            icon: iconDig,
            title: "100% Digital",
            color: "#FCD4AA",
            text: `Desde simulaciones 
            hasta gestión de 
            financiamiento, todo lo 
            que necesitas en un solo 
            lugar.`
        },

        {
            icon: iconSoc,
            title: "Social",
            color: "#1C695F",
            text: `Promovemos acceso a 
            vivienda digna, creando 
            oportunidades en 
            comunidades en 
            desarrollo.`
        }

]

const isMobile = window.innerWidth <= 480;


const Card = ({ icon, color, title, text }) => (
    <div 
    id="card"
    style={{
        width: isMobile ? "100%" : "20%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }}
    >
      <div id="surroundIcon"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: color,
        width: "25%",
        alignContent: "center",
        justifyContent: "center",
        borderRadius: "15%"
      }}>
      <img src={icon} alt={title} />
      </div>
      <h3 style={{
        color: "#1C695F"
      }}>{title}</h3>
      <p
      style={{
        fontSize: "1.8vh"
      }}
      >{text}</p>
    </div>
  )

  const whyUsSection = (
    <section id="whyUsSection">
        <h2 id="whyUsTitle">¿Por qué somos diferentes?</h2>
        <div id="whyUs">
        {whyUs.map((item, index) => (
            <Card key={index} {...item} />
        ))}
        </div>
    </section>
  );



return (
    <div id="landing">
        {topSection}
        {smartInv} 
        {finanDream}
        {whoAreWe} 
        {nuestroCompromiso} 
        {whyUsSection}
    </div>

)
}
