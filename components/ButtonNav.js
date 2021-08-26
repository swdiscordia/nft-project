import styles from "../styles/Buton.module.css";
import Link from "next/dist/client/link";

const ButtonNav = () => {
  return (
    <div className={styles.container}>
      <Link href="/" passHref>
        <div className={styles.btn}>
          <a className={styles.test} href="#">
            Read more
          </a>
        </div>
      </Link>
      <Link href="/" passHref>
        <div className={styles.btn}>
          <a href="#">Read more</a>
        </div>
      </Link>
      <Link href="/" passHref>
        <div className={styles.btn}>
          <a href="#">Read more</a>
        </div>
      </Link>
    </div>
  );
};

export default ButtonNav;
