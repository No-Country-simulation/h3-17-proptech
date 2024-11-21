import {useForm} from "react-hook-form"
import {useState} from "react"
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import Calendar from 'react-calendar';



export default function LogIn (){
    const [showPassword, setShowPassword] = useState(false)
    const [date, setDate] = useState(null)
    const {formState: {errors}, register, reset, handleSubmit} = useForm()

    const handleShowHide = () => {
        setShowPassword(!showPassword)
    }

    return(
        <>
            <form id="logInForm">
            <h1 id="logInFormTitle">Bienvenido a Financial.ai</h1>
            <p id="accountExists">Ya tienes una cuenta? <a>Logueate</a></p>
            <label 
            htmlFor="firstNameInput" 
            id="firstNameLabel">
            Nombre/s:
            </label>
            <input 
            type="text"
            id="firstNameInput"
            maxLength="60"
            {...register("fullName", {required: "Ingrese su nombre completo"})}
            />

            <label 
            htmlFor="lastNameInput" 
            id="lastNameLabel">
            Apellido/s:
            </label>
            <input 
            type="text"
            id="lastNameInput"
            maxLength="60"
            {...register("fullName", {required: "Ingrese su nombre completo"})}
            />

            <label id="calendarLabel">Fecha de Nacimiento:</label>
            <Calendar id="birthDateCalendar" onChange={setDate} value={date} />

            <label 
            htmlFor="emailInput" 
            id="emailInputLabel">
            Correo Electrónico:
            </label>
            <input 
            type="text"
            id="emailInput"
            maxLength="60"
            {...register("email", {required: "Ingrese su dirección de correo electrónico", 
            pattern:{
                value:  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Ingrese una dirección de correo válida"
            }})}
            />

            <label 
            htmlFor="passwordInput" 
            id="passwordInputLabel">
            Contraseña:
            </label>
            {showPassword ? 
            <div onClick={handleShowHide}>
            <BiHide id="iconHide"/>
            <p id="hidePass">Ocultar</p>
            </div>
            :
            <div onClick={handleShowHide}>
            <BiShowAlt id="iconShow"/> 
            <p id="showPass">Mostrar</p> 
            </div>
             }
            <input 
            type={showPassword ? "password" : "text"}
            id="passwordInput"
            maxLength="60"
            {...register("password", {required: "Ingrese su nombre completo",
            minLength:{
                value:8,
                message: "La contraseña debe tener al menos 8 caracteres"
            },
            pattern:{
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                message: "La contraseña no cumple con los requisitos"
            }})}
            />
            <div id="passwordRequirements">
                <ul id="requirementsList">
                    <li>Mínimo 8 caracteres</li>
                    <li>Un símbolo</li>
                    <li>Una mayúscula</li>
                    <li>Un número</li>
                    <li>Una minúscula</li>
                </ul>
            </div>

            <label 
            htmlFor="confirmPasswordInput" 
            id="passwordInputLabel">
            Confirmar contraseña:
            </label>
            {showPassword ? 
            <div onClick={handleShowHide}>
            <BiHide id="iconHide"/>
            <p id="hidePass">Ocultar</p>
            </div>
            :
            <div onClick={handleShowHide}>
            <BiShowAlt id="iconShow"/> 
            <p id="showPass">Mostrar</p> 
            </div>
             }
            <input 
            type={showPassword ? "password" : "text"}
            id="confirmPasswordInput"
            maxLength="60"
            {...register("password", {required: "Ingrese su nombre completo",
            minLength:{
                value:8,
                message: "La contraseña debe tener al menos 8 caracteres"
            },
            pattern:{
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/,
                message: "La contraseña no cumple con los requisitos"
            }})}
            />

           <p id="termsAndPolicies">Al crear una cuenta, usted acepta los <a>términos de uso</a> y las <a>políticas de privacidad</a>.</p> 

            <button type="submit">Registrarse</button>
            

            </form>
        </>
    )

}