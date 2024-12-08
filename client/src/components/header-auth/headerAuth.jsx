import { profileImg, logoFinancial } from "../../assets/index";
import { IoMenu } from "react-icons/io5";
import { IconButton, Menu, MenuItem } from "@mui/material";
import styles from "./headerAuth.module.css";

export function HeaderAuth() {
  return (
    <div className={styles.headerApp}>
      <div className={styles.profileDesktop}>
        <img src={profileImg} />
      </div>
      <div className={styles.profileMobile}>
        <div className={styles.logo}>
          <img src={logoFinancial} alt="Logo Financial" />
        </div>
        <IconButton className={styles.menuButton}>
          <IoMenu className={styles.menuIcon} />
        </IconButton>
      </div>
    </div>
  );
}
