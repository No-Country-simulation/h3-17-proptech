import { useState } from 'react';
import { logoFinancial, profileImg } from "../../assets";
import './testimonials.css';

export default function TestimonialsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Invertir nunca fue tan sencillo. Financial.al me permitió diversificar mi portafolio con confianza y resultados claros.",
      author: "Nombre",
      role: "Inversor",
      image: profileImg,
    },
    {
      text: "Gracias a esta plataforma, hoy estoy construyendo mi hogar.",
      author: "Nombre",
      role: "Inversor",
      image: profileImg,
    },
    {
      text: "Ya soy dueño de mi terreno y estoy feliz. El proceso fue claro y accesible.",
      author: "Nombre",
      role: "Inversor",
      image: profileImg,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <h3 className="testimonials-subtitle">Testimonios</h3>
        <h2 className="testimonials-title">Lo que dicen de nosotros</h2>
      </div>

      <div className="slider-container">
        <button className="slider-button prev-button" onClick={prevSlide}>
          ←
        </button>
        
        <div 
          className="slider"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-content">
                <img 
                  src={logoFinancial} 
                  alt="Financial.al" 
                  className="company-logo"
                />
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author} 
                    className="author-image"
                  />
                  <div className="author-info">
                    <h4>{testimonial.author}</h4>
                    <p>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="slider-button next-button" onClick={nextSlide}>
          →
        </button>
      </div>

      <div className="slider-nav">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`nav-dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

