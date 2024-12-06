import { profileImg } from "../../assets/index";
import styles  from "./headerLogin.module.css";

export function HeaderLogin() {
  return (
    <div className={styles.headerApp}>
      <div className={styles.profile}>
        <img src={profileImg} />
      </div>
    </div>
  );
}
