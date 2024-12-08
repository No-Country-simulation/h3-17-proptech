import { Outlet } from "react-router-dom";
import styles from "./dashboardLayout.module.css";
import { SidebarBuyer } from "../../components/index";
export function DashboardLayout() {
  console.log("Renderizando DashboardLayout");
  return (
    <div className={styles.content}>
      <aside>
        <SidebarBuyer />
      </aside>
      <section>
        <Outlet />
      </section>
    </div>
  );
}
