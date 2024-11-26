import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import RegisterForm from './components/register-form/register'
import { Header } from "./components/header/Header";
import './App.css'
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';




function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
      </Routes>
      <Header/>
    </>
  );
}

export default App;
