import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faUser } from "@fortawesome/free-solid-svg-icons";
import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/router";

import styles from "./MainNavigation.module.css";
import { HeaderCartButton } from "./HeaderCartButton";

export const MainNavigation = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const handleLogOut = async () => {
    const response = await fetch("/api/auth/logout");

    localStorage.removeItem("userId");

    queryClient.removeQueries(["user"]);

    router.push("/");

    return response.json();
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
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
              <HeaderCartButton />
            </Link>
          </li>
          <li>
            <Link href="/wishlist">
              <FontAwesomeIcon icon={faHeart} />
            </Link>
          </li>
          <li className={styles.logout} onClick={handleLogOut}>
            Logout
          </li>
        </ul>
      </nav>
    </header>
  );
};
