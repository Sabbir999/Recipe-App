import styles from "./Header.module.css";
import cheflogo from "../assets/chef.jpg";

function Header() {
  return (
    <header className={styles.header}>
      <img src={cheflogo} alt="Chef Logo" className={styles.logo} />
      <h1 className={styles.title}>Chef Saifur</h1>
    </header>
  );
}

export default Header;
