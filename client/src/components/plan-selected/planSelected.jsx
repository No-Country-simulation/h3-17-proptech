import styles from "./planSelected.module.css";
import { useSelector } from "react-redux";

export function PlanSelected({ handleNextStep, handlePreviousStep }) {
  const {
    loanAmount,
    advanceAmount,
    infoAutos,
    repairs,
    cuotes,
    calculatedData,
  } = useSelector((state) => state.simulator);
  return (
    <div className={styles.content}>
      <div className={styles.titles}>
        <h1>Tu plan seleccionado</h1>
        <p>Te compartimos el detalle del plan que elegiste</p>
      </div>
      <div className={styles.cardsContent}>
        <div className={styles.card}>
          <p>Monto Solicitado</p>
          <h3>${loanAmount}</h3>
        </div>
        <div className={styles.card}>
          <p>Adelanto</p>
          <h3>${advanceAmount}</h3>
        </div>
        <div className={styles.card}>
          <p>Infoauto</p>
          <h3>${infoAutos}</h3>
        </div>
        <div className={styles.card}>
          <p>Reparaciones</p>
          <h3>${repairs}</h3>
        </div>
        <div className={styles.card}>
          <p>Cuotas</p>
          <h3> {cuotes}</h3>
        </div>
        <div className={styles.card}>
          <p>Monto de cuota</p>
          <h3>${calculatedData.monthlyPayment}</h3>
        </div>
        <div className={styles.card}>
          <p>Tasa de interes mensual</p>
          <h3>{calculatedData.monthlyRate}</h3>
        </div>
        <div className={styles.card}>
          <p>Costo total financiado</p>
          <h3>${calculatedData.financedAmount}</h3>
        </div>
      </div>
      <div className={styles.textcontent}>
        <h4>¿Qué sigue despues de seleccionar tu plan?</h4>
        <p>
          ¡Genial! Ahora necesitamos algunos documentos para avanzar con tu
          solicitud de financiamiento. En el próximo paso, podrás cargar tu DNI,
          comprobantes de ingresos y otros archivos requeridos para validar tu
          solicitud. Es rápido y sencillo, y te guiaremos en cada paso. Cuando
          completes esta etapa, revisaremos tu información y te notificaremos el
          estado de tu solicitud. ¡Estamos cada vez más cerca!
        </p>
      </div>
      <div className={styles.buttonscontent}>
        <button className={styles.buttonback} onClick={handlePreviousStep}>
          Editar los Parámetros
        </button>
        <button className={styles.buttonnext} onClick={handleNextStep}>
          Continuar con la solicitud
        </button>
      </div>
    </div>
  );
}
