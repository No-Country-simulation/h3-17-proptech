import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
import { Routes, Route } from "react-router-dom";
import { RegisterOptions } from "./pages/register-options/registerOption";
import LandingPage from "./pages/landing/landing";
import Register from "./pages/register/registerPage";
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
          <Header />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/register" element={<Register />} />
            <Route
              exact
              path="/register-options"
              element={<RegisterOptions />}
            />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
