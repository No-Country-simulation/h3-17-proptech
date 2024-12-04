import { Routes, Route } from "react-router-dom";
import { HeaderComponent, FooterComponent } from "./components/index";
import {
  LandingPage,
  RegisterOptions,
  RegisterPage,
  LoginPage,
} from "./pages/index";
import "./App.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";
import "./colors.css";

function App() {
  return (
    <>
      <div className="appContainer">
        <header>
          <HeaderComponent />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route
              exact
              path="/register-options"
              element={<RegisterOptions />}
            />
            <Route exact path="/register" element={<RegisterPage />} />
            <Route exact path="/login" element={<LoginPage />} />
          </Routes>
        </main>
        <footer>
          <FooterComponent />
        </footer>
      </div>
    </>
  );
}

export default App;
