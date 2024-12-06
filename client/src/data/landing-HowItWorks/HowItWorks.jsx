import './how-it-works.css';
import pic1 from "../../assets/ComoFunciona1.png"
import pic2 from "../../assets/ComoFunciona2.png"
import pic3 from "../../assets/ComoFunciona3.png"


export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      image: pic1,
      title: "Regístrate",
      description: "Crea tu cuenta en minutos y accede al ecosistema financiero que conecta sueños con oportunidades."
    },
    {
      number: 2,
      image: pic2,
      title: "Explora oportunidades",
      description: "Busca terrenos en ubicaciones estratégicas o evalúa opciones de inversión con análisis detallado."

    },
    {
      number: 3,
      image: pic3,
      title: "Invierte o financia",
      description: "Evalúa riesgos, revisa métricas y toma decisiones informadas directamente desde nuestra plataforma."
    }
  ];

  return (
    <section className="process">
      <div className="process-header">
        <h3 className="process-title">El proceso</h3>
        <h2 className="process-subtitle">¿Cómo funciona?</h2>
      </div>
      
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.number} className="step">
            <div className="step-number">{step.number}</div>
            <img 
              src={step.image} 
              alt={step.title} 
              className="step-image"
            />
            <h3 className="step-title">{step.title}</h3>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

