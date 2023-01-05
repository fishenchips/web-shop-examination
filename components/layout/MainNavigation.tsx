import Link from "next/link";
import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faHeart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { CartContext } from "../../store/CartContext";
import styled from "./MainNavigation.module.css";

export const MainNavigation = () => {
  const cartCtx = useContext(CartContext);

  /* transform array into a single number - takes two args, function and starting value (0) */
  const numberOfCartItems = cartCtx.items.reduce((currentNum, item) => {
    return currentNum + item; // add amount later;
  }, 0);

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
            <Link href="/user">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </li>
          <li>
            <Link href="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
              {numberOfCartItems}
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
