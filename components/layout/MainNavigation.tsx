import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
            <Link href="/categories">Categories</Link>
          </li>
          <li>
            <Link href="/login">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
          <li>
            <Link href="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
