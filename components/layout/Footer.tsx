import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <div>
          <Link href="/press">Press</Link>
        </div>
        <div>
          <Link href="/faq">FAQ</Link>
        </div>
        <div>
          <Link href="/terms-conditions">Terms & Conditions</Link>
        </div>
        <div>
          <Link href="/privacy">Privacy Policy</Link>
        </div>
        <div>
          <Link href="/returns">Return Policy</Link>
        </div>
        <div>
          <Link href="/about-us">About Us</Link>
        </div>
      </div>
      <div className={styles.trademark}>
        <h4>Platzi's Paradise</h4>
        <p>All rights reserved {currentYear}</p>
      </div>
    </footer>
  );
};
