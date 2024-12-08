import { useState } from 'react'
import FinancialCard from "../../data/PlansView - Financial Card/financial-card"
import Pagination from '../../data/PlansView - Financial Card/pagination'
import "./plansView.css"
export function AvailablePlans() {
  const [currentPage, setCurrentPage] = useState(1)
  

  
  // data de prueba
  const plans = [
    {
      id: 1,
      amount: "$500,000",
      rate: "1.531%",
      term: "24 Meses",
      cuotaMensual: "$25,500",
      detalles: "Plan ideal para compras grandes.",
      condiciones: "Aplican restricciones según historial crediticio."
    },
    {
      id: 2,
      amount: "$350,000",
      rate: "1.720%",
      term: "18 Meses",
      cuotaMensual: "$20,300",
      detalles: "Perfecto para financiamiento de mediano plazo.",
      condiciones: "Solo para clientes con ingresos comprobables."
    },
    {
      id: 3,
      amount: "$800,000",
      rate: "1.450%",
      term: "36 Meses",
      cuotaMensual: "$28,400",
      detalles: "Plan recomendado para proyectos grandes.",
      condiciones: "Debe incluir aval o garantía hipotecaria."
    },
    {
      id: 4,
      amount: "$200,000",
      rate: "2.000%",
      term: "12 Meses",
      cuotaMensual: "$18,000",
      detalles: "Ideal para emergencias o necesidades rápidas.",
      condiciones: "No aplican restricciones adicionales."
    },
    {
      id: 5,
      amount: "$650,000",
      rate: "1.610%",
      term: "30 Meses",
      cuotaMensual: "$23,500",
      detalles: "Flexible y adaptable a tus necesidades.",
      condiciones: "Historial crediticio favorable requerido."
    },
    {
      id: 6,
      amount: "$400,000",
      rate: "1.730%",
      term: "20 Meses",
      cuotaMensual: "$22,100",
      detalles: "Para quienes buscan equilibrio entre term y tasa.",
      condiciones: "Debe tener ingresos mínimos de $30,000 mensuales."
    },
    {
      id: 7,
      amount: "$1,000,000",
      rate: "1.300%",
      term: "48 Meses",
      cuotaMensual: "$29,900",
      detalles: "Plan premium para grandes inversiones.",
      condiciones: "Garantía adicional requerida."
    },
    {
      id: 8,
      amount: "$150,000",
      rate: "2.200%",
      term: "6 Meses",
      cuotaMensual: "$27,000",
      detalles: "Plan a corto term para necesidades específicas.",
      condiciones: "No se requieren avales."
    },
    {
      id: 9,
      amount: "$300,000",
      rate: "1.850%",
      term: "15 Meses",
      cuotaMensual: "$19,900",
      detalles: "Financiamiento rápido y accesible.",
      condiciones: "Sujeto a evaluación de riesgo."
    },
    {
      id: 10,
      amount: "$750,000",
      rate: "1.490%",
      term: "40 Meses",
      cuotaMensual: "$26,800",
      detalles: "Ideal para metas a largo term.",
      condiciones: "Debe incluir garantía de propiedad."
    }
  ]
  
  const itemsPerPage = 6
  const totalPages = Math.ceil(plans.length / itemsPerPage)
  const currentPlans = plans.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  return (
    <div className="container">
      <div className="filters">
        <select className="filter-select">
          <option value="">Tasa de interés</option>
          <option value="1.531">1.531%</option>
        </select>
        
        <select className="filter-select">
          <option value="">Plazo deseado</option>
          <option value="24">24 Meses</option>
        </select>
        
        <select className="filter-select">
          <option value="">Monto a financiar</option>
          <option value="500000">$500,000</option>
        </select>
        
        <button className="search-button">Buscar</button>
      </div>

      <div className="pagination-container">
        <Pagination 
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <div className="personalization">
        <h2 className="personalization-title">
          Personaliza tu financiación
        </h2>
        <p className="personalization-text">
          ¿No encontraste una opción que se ajuste a tus necesidades? Personaliza tu financiamiento de manera
          que funcione para ti, ajusta los valores que prefieras y simula tu plan ideal para que encontremos
          la mejor opción para ti.
        </p>
        <button className="simulate-button">Simular</button>
      </div>

      <h2 className="section-title">
        Planes disponibles según tu perfil crediticio
      </h2>

      <div className="cards-grid">
        {currentPlans.map((plan, index) => (
          <FinancialCard
            key={index}
            amount={plan.amount}
            rate={plan.rate}
            term={plan.term}
          />
        ))}
      </div>
    </div>
  )
}

