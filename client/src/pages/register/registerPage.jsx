import styles from "./registerPage.module.css";
import { RegisterFormComponent } from "../../components/index";
import { useLocation } from "react-router-dom";
import { investorImg, buyerImg } from "../../assets";

export function RegisterPage() {
  const location = useLocation();
  const role = location.state?.role || "investor";
  console.log("Role:", role);
  return (
    <div
      className={`${styles.register} ${role === "buyer" ? styles.reverse : ""}`}
    >
      <div className={styles.image}>
        <img src={`${role === "buyer" ? buyerImg : investorImg}`} />
      </div>
      <div className={styles.form}>
        <div className={styles.registerForm}>
          <RegisterFormComponent role={role} />
        </div>
      </div>
    </div>
  );
}
