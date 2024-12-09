import { NavLink } from "react-router-dom";
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
        <NavLink
          to="/user/buyer"
          end
          className={({ isActive }) =>
            `${styles.sidebarButtons} ${
              isActive ? styles.sidebarButtonActive : ""
            }`
          }
        >
          <FaChartBar />
          Financiamiento
        </NavLink>

        <NavLink
          to="/user/buyer/credit-simulator"
          className={({ isActive }) =>
            `${styles.sidebarButtons} ${
              isActive ? styles.sidebarButtonActive : ""
            }`
          }
        >
          <RiMoneyDollarCircleLine />
          Simulador de Crédito
        </NavLink>

        <NavLink
          to="/user/buyer/user-profile"
          end
          className={({ isActive }) =>
            `${styles.sidebarButtons} ${
              isActive ? styles.sidebarButtonActive : ""
            }`
          }
        >
          <FaCircleUser />
          Perfil
        </NavLink>

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
