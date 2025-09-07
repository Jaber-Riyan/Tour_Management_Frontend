import { Outlet } from "react-router";

export default function AdminLayout() {
  return (
    <div>
      <h1>This is The AdminLayout</h1>
      <Outlet />
    </div>
  );
}
