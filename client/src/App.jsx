import { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import RegisterForm from './components/register-form/register'
import './App.css'
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/800.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path="/" element={<RegisterForm />} />
      </Routes>
    </>
  )
}

export default App
