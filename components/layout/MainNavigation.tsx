import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser, faUnlock } from "@fortawesome/free-solid-svg-icons";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useState, useContext } from "react";

import styles from "./MainNavigation.module.css";
import { HeaderCartButton } from "./HeaderCartButton";
import { CartContext } from "../../store/CartContext";

export const MainNavigation = () => {
  const [admin, setAdmin] = useState<boolean>(false);
  const [user, setUser] = useState<boolean>(false);
  const cartCtx = useContext(CartContext);

  const queryClient = useQueryClient();
  const router = useRouter();

  /* Is user admin? */
  const checkAdmin = async () => {
    const response = await fetch("/api/users/get-admin");

    const { message } = await response.json();

    if (message === "Access granted") {
      setAdmin(true);
      setUser(true);
    }
    if (message === "Unathorized access") {
      setAdmin(false);
    }
  };

  /* same check for user */
  const checkUser = async () => {
    const response = await fetch("/api/users/get-user");

    const { message } = await response.json();

    if (message === "Access granted") {
      setUser(true);
    }
    if (message === "Unathorized access") {
      setUser(false);
    }
  };

  checkAdmin();
  checkUser();

  const loggedIn = user || admin;

  /* logout clears all stored data */
  const handleLogOut = async () => {
    const response = await fetch("/api/auth/logout");

    cartCtx.clearCart();

    localStorage.removeItem("userId");
    localStorage.removeItem("cartTotal");
    localStorage.removeItem("cartItems");

    queryClient.removeQueries(["user"]);

    router.replace("/");

    return response.json();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <h2>
          <Link href="/">Platzi's Paradise</Link>
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
              <HeaderCartButton />
            </Link>
          </li>
          {user && (
            <li>
              <Link href="/wishlist">
                <FontAwesomeIcon icon={faHeart} />
              </Link>
            </li>
          )}
          {admin && (
            <li>
              <Link href="/admin">
                <FontAwesomeIcon icon={faUnlock} />
              </Link>
            </li>
          )}
          {loggedIn && (
            <li className={styles.logout} onClick={handleLogOut}>
              Logout
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};
