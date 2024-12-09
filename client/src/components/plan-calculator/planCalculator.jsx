/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState } from "react";
import styles from "./planCalculator.module.css";
import { cuoteoValores } from "../../data/cuoteoValores";
import { useDispatch } from "react-redux";
import { saveSimulationData } from "../../redux/slices/simulatorSlice";

export function PlanCalculator({ handleNextStep }) {
  const [loanAmount, setLoanAmount] = useState(0);
  const [advanceAmount, setAdvanceAmount] = useState(0);
  const [infoAutos, setInfoAutos] = useState(0);
  const [repairs, setRepairs] = useState(0);
  const [cuotes, setCuotes] = useState(6);

  const dispatch = useDispatch();

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

    return "1,53%";
  };

  // guardar data y siguiente:

  const handleContinue = () => {
    const calculatedData = {
      financedAmount: calcularMontoFinanciado(),
      monthlyPayment: calcularCuota(),
      tct: calcularTCT(),
      monthlyRate: calcularTasaMensual(),
    };

    dispatch(
      saveSimulationData({
        loanAmount,
        advanceAmount,
        infoAutos,
        repairs,
        cuotes,
        calculatedData,
      })
    );

    handleNextStep();
  };

  return (
    <div>
      <h1>Simulador de crédito</h1>
      <div className={styles.simulatorContent}>
        <div className={styles.inputSection}>
          <div className={styles.inputGroup}>
            <label>¿Cuánto dinero necesitas?</label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>¿Cuánto puedes adelantar?</label>
            <input
              type="number"
              value={advanceAmount}
              onChange={(e) => setAdvanceAmount(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Infoautos</label>
            <input
              type="number"
              value={infoAutos}
              onChange={(e) => setInfoAutos(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputGroup}>
            <label>Reparaciones</label>
            <input
              type="number"
              value={repairs}
              onChange={(e) => setRepairs(Number(e.target.value))}
            />
          </div>

          <div className={styles.inputGroup}>
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

        <div className={styles.calculationDetails}>
          <h2>Detalle del cálculo</h2>
          <div className={styles.financialInfo}>
            <div className={styles.totalAmount}>
              <label>Saldo a financiar</label>
              <span className={styles.highlightAmount}>
                {calcularMontoFinanciado().toFixed(2)}$
              </span>
            </div>
            <div className={styles.cuotesData}>
              <div className={styles.rate}>
                <label>Cuota mensual</label>
                <span className={styles.highlightText}>{calcularCuota()}$</span>
              </div>

              <div className={styles.tct}>
                <label>Tasa de costo total (TCT)</label>
                <span className={styles.highlightText}>{calcularTCT()}%</span>
              </div>

              <div className={styles.monthlyRate}>
                <label>Tasa mensual</label>
                <span className={styles.highlightText}>
                  {calcularTasaMensual()}%
                </span>
              </div>
            </div>
            <div className={styles.notes}>
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
      <div className={styles.containerButton}>
        <button className={styles.continueButton} onClick={handleContinue}>
          CONTINUAR CON ESTA OPCIÓN
        </button>
      </div>
    </div>
  );
}
