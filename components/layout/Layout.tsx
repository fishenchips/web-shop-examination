import { Footer } from "./Footer";
import styles from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props: any) => {
  /* Styling the general page used */
  return (
    <div className={styles.outer}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
      <Footer />
    </div>
  );
};
