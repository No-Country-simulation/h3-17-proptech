import React, { useState } from "react";
import "./credit-simulator.css";

// export function CreditSimulator() {
//   const [loanAmount, setLoanAmount] = useState(null);
//   const [advanceAmount, setAdvanceAmount] = useState(null);
//   const [monthlyPayment, setMonthlyPayment] = useState(null);
//   const [repairs, setRepairs] = useState(null);
//   const [cuotes, setCuotes] = useState(null);
//   // const [installments, setInstallments] = useState(null)

//   //valores ficticios para el detalle de simulador
//   const calculateRate = () => {
//     return 9.186;
//   };

//   const calculateTea = () => {
//     return 2.122;
//   };

//   const calculateTotal = () => {
//     return 11500;
//   };
//   //
//   const creditData = {
//     monto: loanAmount,
//     adelanto: advanceAmount,
//     infoautos: monthlyPayment,
//     reparaciones: repairs,
//     cuotas: cuotes,
//   };
//   console.log("credidata:", creditData);
//   const handleInstallments = (action) => {
//     if (action === "increase" && installments < 12) {
//       setInstallments((prev) => prev + 1);
//     } else if (action === "decrease" && installments > 1) {
//       setInstallments((prev) => prev - 1);
//     }
//   };

//   return (
//     // esto es el indicador de progreso en la transaccion de solicitud de financiacion, se modulariza y se usa para todas?
//     <div className="simulator-container">
//       <div className="progress-steps">
//         <div className="step active">01</div>
//         <div className="step-line"></div>
//         <div className="step">02</div>
//         <div className="step-line"></div>
//         <div className="step">03</div>
//         <div className="step-line"></div>
//         <div className="step">04</div>
//         <div className="step-line"></div>
//         <div className="step">05</div>
//       </div>

//       <h1>Simulador de crédito</h1>
//       <p className="subtitle">
//         Elige el adelanto, plan de pagos y calcula las tasas de tu financiación
//       </p>

//       <div className="simulator-content">
//         <div className="input-section">
//           <div className="input-group">
//             <label>¿Cuánto dinero necesitas?</label>
//             <input
//               type="number"
//               value={loanAmount}
//               onChange={(e) => setLoanAmount(e.target.value)}
//             />
//             <span className="detail">El monto mínimo debe ser de XX$</span>
//           </div>

//           <div className="input-group">
//             <label>¿Cuánto podes adelantar?</label>
//             <input
//               type="number"
//               value={advanceAmount}
//               onChange={(e) => setAdvanceAmount(e.target.value)}
//             />
//           </div>

//           <div className="input-group">
//             <label>Infoautos</label>
//             <input
//               type="number"
//               value={monthlyPayment}
//               onChange={(e) => setMonthlyPayment(e.target.value)}
//             />
//             <span className="detail">Detalle explicando</span>
//           </div>

//           <div className="input-group">
//             <label>Reparaciones</label>
//             <input
//               type="number"
//               value={repairs}
//               onChange={(e) => setRepairs(e.target.value)}
//             />
//             <span className="detail-link">Detalle explicando</span>
//           </div>

//           <div className="input-group">
//             <label>¿En cuántas cuotas querés pagar?</label>
//             {/* <div className="installments-control">
//               <button onClick={() => handleInstallments("decrease")}>−</button>
//               <span>{installments}</span>
//               <button onClick={() => handleInstallments("increase")}>+</button>
//             </div> */}
//             <input type="number"></input>
//             <span className="detail-link">Detalle explicando</span>
//           </div>
//         </div>

//         <div className="calculation-details">
//           <h2>Detalle del cálculo</h2>

//           <div className="financial-info">
//             <div className="total-amount">
//               <label>Saldo a financiar</label>
//               <span className="highlight-amount">
//                 {calculateTotal().toLocaleString()}$
//               </span>
//             </div>

//             <div className="terms-info">
//               <div className="term">
//                 <label>Términos de pago: en</label>
//                 <span className="highlight-text">6 Meses</span>
//               </div>

//               <div className="rate">
//                 <label>Nuestra tasa mensual</label>
//                 <span className="highlight-text">{calculateRate()}%</span>
//               </div>

//               <div className="tea">
//                 <label>Tasa de costo</label>
//                 <span className="highlight-text">{calculateTea()}</span>
//               </div>
//             </div>

//             <div className="notes">
//               <p>
//                 • Los valores son en pesos argentinos y son estimativos. El
//                 desembolso definitivo se hará en pesos al tipo de cambio del
//                 día.
//               </p>
//               <p>
//                 • Los intereses por mora comenzarán a generarse al día siguiente
//                 al vencimiento de la cuota.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       <button className="continue-button">CONTINUAR CON ESTA OPCIÓN</button>
//     </div>
//   );
// }

const cuoteoValores = {
  6: (175710 / 1000000) * 1.05,
  9: (119790 / 1000000) * 1.05,
  12: (91860 / 1000000) * 1.05,
  18: (63990 / 1000000) * 1.05,
  24: (50110 / 1000000) * 1.05,
  30: (41830 / 1000000) * 1.05,
  36: (36340 / 1000000) * 1.05,
  48: (29570 / 1000000) * 1.05,
  60: (25600 / 1000000) * 1.05,
  72: (23020 / 1000000) * 1.05,
  84: (21240 / 1000000) * 1.05,
  96: (19950 / 1000000) * 1.05,
  120: (18260 / 1000000) * 1.05,
  150: (17060 / 1000000) * 1.05,
  180: (16380 / 1000000) * 1.05,
};

export function CreditSimulator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [advanceAmount, setAdvanceAmount] = useState(0);
  const [infoAutos, setInfoAutos] = useState(0);
  const [repairs, setRepairs] = useState(0);
  const [cuotes, setCuotes] = useState(6);

  // Calcula el saldo a financiar
  const calcularMontoFinanciado = () => {
    const totalDeductions =
      Number(advanceAmount) + Number(infoAutos) - Number(repairs);
    return loanAmount - totalDeductions;
  };

  // Calcula la cuota mensual
  const calcularCuota = () => {
    const montoFinanciado = calcularMontoFinanciado();
    const cuoteo = cuoteoValores[cuotes];
    console.log("cuoteo :", cuoteo);
    if (!cuoteo) return "Cantidad de cuotas no válida.";
    return (montoFinanciado * cuoteo).toFixed(2);
  };

  // Calcula la Tasa de Costo Total (TCT)
  const calcularTCT = () => {
    const montoFinanciado = calcularMontoFinanciado();
    const cuotaMensual = calcularCuota();
    if (isNaN(cuotaMensual)) return cuotaMensual;
    const totalPagado = cuotaMensual * cuotes;
    const tct = ((totalPagado - montoFinanciado) / montoFinanciado) * 100;
    return tct.toFixed(2);
  };

  // Calcula la Tasa Mensual
  const calcularTasaMensual = () => {
    const montoFinanciado = calcularMontoFinanciado();
    const cuotaMensual = calcularCuota();
    if (isNaN(cuotaMensual)) return cuotaMensual;

    let tasa = 0.01;
    const iteracionesMax = 100;
    const precision = 1e-6;
    let iteraciones = 0;

    while (iteraciones < iteracionesMax) {
      const valorPresente =
        (cuotaMensual / tasa) * (1 - Math.pow(1 + tasa, -cuotes));
      const error = montoFinanciado - valorPresente;

      if (Math.abs(error) < precision) {
        return (tasa * 100).toFixed(2);
      }

      tasa += error > 0 ? 0.0001 : -0.0001;
      iteraciones++;
    }

    return "Error";
  };

  return (
    <div className="simulator-container">
      {/* esto es el indicador de progreso en la transaccion de solicitud de financiacion, se modulariza y se usa para todas? */}

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
      <div className="simulator-content">
        <div className="input-section">
          <div className="input-group">
            <label>¿Cuánto dinero necesitas?</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>¿Cuánto puedes adelantar?</label>
            <input
              type="number"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Infoautos</label>
            <input
              type="number"
              value={infoAutos}
              onChange={(e) => setInfoAutos(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>Reparaciones</label>
            <input
              type="number"
              value={repairs}
              onChange={(e) => setRepairs(Number(e.target.value))}
            />
          </div>

          <div className="input-group">
            <label>¿En cuántas cuotas quieres pagar?</label>
            <select
              value={cuotes}
              onChange={(e) => setCuotes(Number(e.target.value))}
            >
              {Object.keys(cuoteoValores).map((key) => (
                <option key={key} value={key}>
                  {key} cuotas
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="calculation-details">
          <h2>Detalle del cálculo</h2>
          <div className="financial-info">
            <div className="total-amount">
              <label>Saldo a financiar</label>
              <span className="highlight-amount">
                {calcularMontoFinanciado().toFixed(2)}$
              </span>
            </div>
            <div className="cuotes-data">
              <div className="rate">
                <label>Cuota mensual</label>
                <span className="highlight-text">{calcularCuota()}$</span>
              </div>

              <div className="tct">
                <label>Tasa de costo total (TCT)</label>
                <span className="highlight-text">{calcularTCT()}%</span>
              </div>

              <div className="monthly-rate">
                <label>Tasa mensual</label>
                <span className="highlight-text">{calcularTasaMensual()}%</span>
              </div>
            </div>
            <div className="notes">
              <p>
                • Los valores son en pesos argentinos y son estimativos. El
                desembolso definitivo se hará en pesos al tipo de cambio del
                día.
              </p>
              <p>
                • Los intereses por mora comenzarán a generarse al día siguiente
                al vencimiento de la cuota.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=".container-button">
        <button className="continue-button">CONTINUAR CON ESTA OPCIÓN</button>
        </div>
    </div>
  );
}
