import styles from "./registerPage.module.css";
import RegisterForm from "../../components/register-form/register";
import { Footer } from "../../components/footer/footer";

export default function Register() {
  return (
    <div className={styles.register}>
      <div className={styles.image}>
        <img src="https://placehold.co/376x768" alt="imagen referencial" />
      </div>
      <div className={styles.form}>
        <div className={styles.registerForm}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
