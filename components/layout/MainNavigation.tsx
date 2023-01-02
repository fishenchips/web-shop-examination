import Link from "next/link";

import styled from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={styled.header}>
      <div className={styled.logo}>
        <h2>
          <Link href="/">Title of Site</Link>
        </h2>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/cart">Cart</Link>
          </li>
          <li>
            <Link href="/wishlist">Wish list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
