import styled from "./Layout.module.css";
import { MainNavigation } from "./MainNavigation";

export const Layout = (props: any) => {
  return (
    <div>
      <MainNavigation />
      <main className={styled.main}>{props.children}</main>
    </div>
  );
};
