import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import RegisterForm from "./components/register-form/register";
import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

import "./App.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/800.css";
import "./colors.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
