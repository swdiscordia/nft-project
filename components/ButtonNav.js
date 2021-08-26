import styles from "../styles/Buton.module.css";
import Link from "next/dist/client/link";

const ButtonNav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.btn0}>
          <a className={styles.test} href="#">
            Starter Pack
          </a>
        </div>
      </Link>
      <Link href="/inventory" passHref>
        <div className={styles.btn0}>
          <a href="#">Inventory</a>
        </div>
      </Link>
      <Link href="/fightmonster" passHref>
        <div className={styles.btn0}>
          <a href="#">Fight Monster</a>
        </div>
      </Link>
      <Link href="/fightmonster" passHref>
        <div className={styles.btn}>
          <a href="#">Connect MetaMask</a>
        </div>
      </Link>
    </div>
  );
};

export default ButtonNav;
