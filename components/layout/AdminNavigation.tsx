import Link from "next/link";

import styled from "./AdminNavigation.module.css";

export const AdminNavigation = () => {
  return (
    <nav className={styled.adminNav}>
      <h2>Admin Hub</h2>
      <ul>
        <li>
          <Link href="/admin">Home</Link>
        </li>
        <li>
          <Link href="/admin/products">Products</Link>
        </li>
        <li>
          <Link href="/admin/users">Users</Link>
        </li>
        <li>
          <Link href="/admin/orders">Orders</Link>
        </li>
      </ul>
    </nav>
  );
};
