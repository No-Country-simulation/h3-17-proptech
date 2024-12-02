import styles from "./registerOption.module.css";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export function RegisterOptions() {
  return (
    <div className={styles.register}>
      <div className={styles.investor}>
        <Link to="/register" state={{ role: "investor" }}>
          <div className={styles.title}>
            <h2>Quiero ser Inversor</h2>
            <FaArrowRight className={styles.icon} />
          </div>
        </Link>
        <div className={styles.content}>
          <p>
            Invertí en un futuro con impacto. Como inversor, tendrás acceso a
            herramientas avanzadas para analizar y financiar la compra de
            terrenos en Latinoamérica. Descubrí oportunidades de inversión
            seguras y ayudá a familias a construir su hogar mientras hacés
            crecer tu capital.
          </p>
          <hr className={styles.line} />
        </div>
      </div>
      <div className={styles.buyer}>
        <Link to="/register" state={{ role: "buyer" }}>
          <div className={styles.title}>
            <h2>Quiero ser Comprador</h2>
            <FaArrowRight className={styles.icon} />
          </div>
        </Link>
        <div className={styles.content}>
          <p>
            Hacemos tu sueño accesible. Como comprador, te ofrecemos opciones de
            financiamiento flexibles para adquirir el terreno donde construirás
            tu hogar. Uní fuerzas con inversores para convertir tu proyecto en
            realidad, con transparencia y confianza.
          </p>
          <hr className={styles.line} />
        </div>
      </div>
    </div>
  );
}
