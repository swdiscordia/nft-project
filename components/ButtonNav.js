import styles from "../styles/Buton.module.css";
import Link from "next/dist/client/link";

const ButtonNav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.btn}>
          <a className={styles.test} href="#">
            Starter Pack
          </a>
        </div>
      </Link>
      <Link href="/inventory" passHref>
        <div className={styles.btn}>
          <a href="#">Inventory</a>
        </div>
      </Link>
      <Link href="/fightmonster" passHref>
        <div className={styles.btn}>
          <a href="#">Fight Monster</a>
        </div>
      </Link>
    </div>
  );
};

export default ButtonNav;
