import Link from "next/link";

import styled from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={styled.header}>
      <div className={styled.logo}>
        <h2>Title of Site</h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
