import styles from "./loginPage.module.css";
import { LoginFormComponent } from "../../components/index";
export function LoginPage() {
  return (
    <>
      <div className={styles.loginPage}>
        <div className={styles.bgTrans}></div>
        <div className={styles.sliderContent}>
          <div className={styles.slider}>
            <h1>Inicia sesión y sigue avanzando</h1>
            <p>
              Accede a tu cuenta para gestionar tus solicitudes de
              financiamiento, personalizar opciones y dar el siguiente paso
              hacia tus metas. Tu futuro financiero está a un clic de distancia.
            </p>
          </div>
        </div>
        <div className={styles.formContent}>
          <LoginFormComponent />
        </div>
      </div>
    </>
  );
}
