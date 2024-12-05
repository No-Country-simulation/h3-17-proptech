import styles from "./cardsWhy.module.css";
export const CardsWhy = ({ icon, color, title, text }) => (
  <div id="card" className={styles.card}>
    <div
      id="surroundIcon"
      className={styles.cardIcon}
      style={{ backgroundColor: color }}
    >
      <img src={icon} alt={title} />
    </div>
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);
