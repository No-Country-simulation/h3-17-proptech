import { HeaderComponent, FooterComponent } from "./components/index";
import { RouterViews } from "./routes/routerView";
import { useLocation } from "react-router-dom";

import "./App.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";
import "./colors.css";

function App() {
  const location = useLocation();
  const generalRoutes = ["/", "/login", "/register", "/register-options"];

  return (
    <>
      <div className="appContainer">
        <header>
          <HeaderComponent />
        </header>
        <main>
          <RouterViews />
        </main>
        {generalRoutes.includes(location.pathname) && (
          <footer>
            <FooterComponent />
          </footer>
        )}
      </div>
    </>
  );
}
export default App;
