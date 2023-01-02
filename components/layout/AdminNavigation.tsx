import Link from "next/link";

export const AdminNavigation = () => {
  return (
    <section>
      <ul>
        <li>
          <Link href="/admin">Admin</Link>
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
    </section>
  );
};
