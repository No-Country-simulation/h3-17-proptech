export default function FinancialCard({ amount, rate, term }) {
  return (
    <div className="card">
      <div className="card-amount">${amount.toLocaleString()}</div>
      <div className="card-label">Monto financiable</div>
      
      <div className="card-details">
        <div className="detail-item">
          <div className="detail-value">{rate}%</div>
          <div className="detail-label">Tasa de interés</div>
        </div>
        <div className="detail-item">
          <div className="detail-value">{term}</div>
          <div className="detail-label">Plazo</div>
        </div>
      </div>
      
      <button className="card-button">Ver detalles</button>
    </div>
  )
}

