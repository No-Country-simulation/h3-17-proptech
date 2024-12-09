import React, { useState } from 'react'
import './credit-simulator.css'

export function CreditSimulator() {
  const [loanAmount, setLoanAmount] = useState(null)
  const [advanceAmount, setAdvanceAmount] = useState(null)
  const [monthlyPayment, setMonthlyPayment] = useState(null)
  const [repairs, setRepairs] = useState(null)
  const [installments, setInstallments] = useState(null)

  //valores ficticios para el detalle de simulador
  const calculateRate = () => {
    return 9.186
  }

  const calculateTea = () => {
    return 2.122
  }

  const calculateTotal = () => {
    return 11500
  }
  //

  const handleInstallments = (action) => {
    if (action === 'increase' && installments < 12) {
      setInstallments(prev => prev + 1)
    } else if (action === 'decrease' && installments > 1) {
      setInstallments(prev => prev - 1)
    }
  }

  return (
    // esto es el indicador de progreso en la transaccion de solicitud de financiacion, se modulariza y se usa para todas?
    <div className="simulator-container">
      <div className="progress-steps">
        <div className="step active">01</div>
        <div className="step-line"></div>
        <div className="step">02</div>
        <div className="step-line"></div>
        <div className="step">03</div>
        <div className="step-line"></div>
        <div className="step">04</div>
        <div className="step-line"></div>
        <div className="step">05</div>
      </div>
  

      <h1>Simulador de crédito</h1>
      <p className="subtitle">Elige el adelanto, plan de pagos y calcula las tasas de tu financiación</p>

      <div className="simulator-content">
        <div className="input-section">
          <div className="input-group">
            <label>¿Cuánto dinero necesitas?</label>
            <input 
              type="number" 
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
            />
            <span className="detail">El monto mínimo debe ser de XX$</span>
          </div>

          <div className="input-group">
            <label>¿Cuánto podes adelantar?</label>
            <input 
              type="number"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Infoautos</label>
            <input 
              type="number"
              value={monthlyPayment}
              onChange={(e) => setMonthlyPayment(e.target.value)}
            />
            <span className="detail">Detalle explicando</span>
          </div>

          <div className="input-group">
            <label>Reparaciones</label>
            <input 
              type="number"
              value={repairs}
              onChange={(e) => setRepairs(e.target.value)}
            />
            <span className="detail-link">Detalle explicando</span>
          </div>

          <div className="input-group">
            <label>¿En cuántas cuotas querés pagar?</label>
            <div className="installments-control">
              <button onClick={() => handleInstallments('decrease')}>−</button>
              <span>{installments}</span>
              <button onClick={() => handleInstallments('increase')}>+</button>
            </div>
            <span className="detail-link">Detalle explicando</span>
          </div>
        </div>

        <div className="calculation-details">
          <h2>Detalle del cálculo</h2>
          
          <div className="financial-info">
            <div className="total-amount">
              <label>Saldo a financiar</label>
              <span className="highlight-amount">{calculateTotal().toLocaleString()}$</span>
            </div>

            <div className="terms-info">
              <div className="term">
                <label>Términos de pago: en</label>
                <span className="highlight-text">6 Meses</span>
              </div>
              
              <div className="rate">
                <label>Nuestra tasa mensual</label>
                <span className="highlight-text">{calculateRate()}%</span>
              </div>
              
              <div className="tea">
                <label>Tasa de costo</label>
                <span className="highlight-text">{calculateTea()}</span>
              </div>
            </div>

            <div className="notes">
              <p>• Los valores son en pesos argentinos y son estimativos. El desembolso definitivo se hará en pesos al tipo de cambio del día.</p>
              <p>• Los intereses por mora comenzarán a generarse al día siguiente al vencimiento de la cuota.</p>
            </div>
          </div>
        </div>
      </div>

      <button className="continue-button">
        CONTINUAR CON ESTA OPCIÓN
      </button>
    </div>
  )
}

