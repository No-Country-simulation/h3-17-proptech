import React from "react";
import { Button } from "@mui/material";
import {
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaCircleArrowRight,
} from "react-icons/fa6";

import { logoFinancial } from "../../assets";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerDesktop}>
        <div className={styles.area1}>
          <div className={styles.logoArea}>
            <div className={styles.logo}>
              <img src={logoFinancial} alt="logo" />
            </div>
          </div>
          <div className={styles.contact}>
            <ul>
              <li>
                <FaLocationDot color="white" /> Dirección
              </li>
              <li>
                <FaPhone color="white" /> Teléfono
              </li>
              <li>
                <FaEnvelope color="white" /> Correo
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.area2}>
          <div className={styles.labels}>
            <ul>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
        </div>
        <div className={styles.area3}>
          <div className={styles.sub}>
            <h4> Lorem ipsum dolor sit amet, consectetur</h4>
            <Button
              variant="outlined"
              size="small"
              endIcon={<FaCircleArrowRight />}
              className={styles.buttonFoot}
            >
              Button
            </Button>
          </div>
          <div className={styles.copyright}>
            <p>©2024 Brand, Inc.</p>
            <p>Privacy</p>
            <p>Terms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
