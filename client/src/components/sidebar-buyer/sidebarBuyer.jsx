import styles from "./sidebarBuyer.module.css";
import { logoFinancial } from "../../assets";
import { FaChartBar } from "react-icons/fa";
import { RiMoneyDollarCircleLine, RiLogoutBoxRLine } from "react-icons/ri";
import { GrDatabase } from "react-icons/gr";

import { FaCircleUser } from "react-icons/fa6";

export function SidebarBuyer() {
  return (
    <div className={styles.sidebarBuyer}>
      <div className={styles.logoContainer}>
        <img src={logoFinancial} />
      </div>
      <div className={styles.buttonsContainer}>
        <button className={styles.sidebarButtons}>
          <FaChartBar />
          Financiamiento
        </button>
        <button className={styles.sidebarButtons}>
          <RiMoneyDollarCircleLine />
          Simulador de Crédito
        </button>
        <button className={styles.sidebarButtons}>
          <FaCircleUser />
          Perfil
        </button>
        <button className={styles.sidebarButtons}>
          <GrDatabase />
          Solicitudes
        </button>
        <button className={styles.sidebarButtons}>
          <RiLogoutBoxRLine />
          Cerrar Sesión
        </button>
      </div>
    </div>
  );
}
