import { useState } from 'react'
import { FiEdit2, FiUser, FiCalendar, FiMapPin, FiMail, FiPhone } from 'react-icons/fi'
import {profileImg} from "../../assets/index"
import './userProfile.css'
import { useSelector } from 'react-redux'

export default function UserProfile() {

  const { user } = useSelector((state) => state.login);

  console.log(user)

  const [userData] = useState({
    name: 'Matias Gonzalez',
    date: '26 de Junio, 1980',
    address: '123, Calle, Ciudad Provincia',
    email: 'email@gmail.com',
    phone: '01112345689'
  })


  return (
    <div className="dashboard">
      <div className="gradient-bg"></div>
      
      <div className="content">
        <div className="profile-section">
          <div className="avatar-container">
            <img 
              src={profileImg} 
              alt="Profile" 
              className="avatar"
            />
            <button className="edit-button">
              <FiEdit2 />
            </button>
          </div>
          
          <h1>¡Hola, Matias!</h1>
          <p className="subtitle">Este es tu resumen financiero.</p>
          
          <button className="validate-button">
            Validar identidad
          </button>
        </div>

        <div className="info-grid">
          <div className="personal-info">
            <div className="section-header">
              <h2>Datos Personales</h2>
              <button className="edit-button">
                <FiEdit2 />
              </button>
            </div>

            <div className="info-list">
              <div className="info-item">
                <FiUser />
                <span>{userData.name}</span>
              </div>
              <div className="info-item">
                <FiCalendar />
                <span>{userData.date}</span>
              </div>
              <div className="info-item">
                <FiMapPin />
                <span>{userData.address}</span>
              </div>
              <div className="info-item">
                <FiMail />
                <span>{userData.email}</span>
              </div>
              <div className="info-item">
                <FiPhone />
                <span>{userData.phone}</span>
              </div>
            </div>
          </div>

          <div className="credit-score">
            <h2>Puntaje Crediticio</h2>
            <div className="gauge-container">
              <div className="gauge">
                <div className="score">123</div>
                <div className="gauge-arc"></div>
              </div>
            </div>
            <p className="credit-description">
              Tu puntaje crediticio refleja tu historial financiero y ayuda a las inversiones a evaluar tu perfil.
            </p>
            <div className="risk-status">
              <span>Estado actual:</span>
              <span className="risk-level">Riesgo medio</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

