import styles from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props: any) => {
  return (
    <div className={styles.outer}>
      <MainNavigation />
      <main className={styles.main}>{props.children}</main>
    </div>
  );
};
