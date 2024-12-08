import { useLocation } from "react-router-dom";
import { HeaderAuthComponent, HeaderGeneralComponent } from "../index.js";

export function Header() {
  const location = useLocation();
  const generalRoutes = ["/", "/login", "/register", "/register-options"];

  if (generalRoutes.includes(location.pathname)) {
    return <HeaderGeneralComponent />;
  }
  return <HeaderAuthComponent />;
}
