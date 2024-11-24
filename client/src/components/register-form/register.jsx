import {useForm} from "react-hook-form"
import {useState, useEffect} from "react"
import { BiHide } from "react-icons/bi";
import { BiShowAlt } from "react-icons/bi";
import "./register.css"


export default function RegisterForm (){
    const [showPassword, setShowPassword] = useState(true)
    const {formState: {errors}, register, watch ,reset, handleSubmit} = useForm()

    const handleShowHide = () => {
        setShowPassword(!showPassword) 
    }

    const submit = (data) => {
        console.log(data)
    }


    console.log(errors)

    const passValue = watch("password")
    const confValue = watch("confirmPass")

    return(
        <>  
            <form id="registerForm" onSubmit={handleSubmit(submit)}>
            <h1 id="registerFormTitle">Bienvenido a Financial.ai</h1>
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
            {...register("firstName", {required: "Ingrese su/s nombre/s"})}
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
            {...register("lastName", {required: "Ingrese su/s apellido/s"})}
            />

            <label id="datePickerLabel">Fecha de Nacimiento:</label>
            <input 
            aria-label="Date" 
            type="date" 
            id="datePicker"
            {...register("birthDate", {required: "Ingrese su fecha de nacimiento"})}
            />

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

            <span id="passSpan">
            <label 
            htmlFor="passwordInput" 
            id="passwordInputLabel">
            Contraseña:
            </label>
            {showPassword ? 
            <div onClick={handleShowHide} id="divShowPass">
            <BiShowAlt id="iconShow"/> 
            <p id="showPass">Mostrar</p> 
            </div>
            :
            <div onClick={handleShowHide} id="divHidePass">
            <BiHide id="iconHide"/>
            <p id="hidePass">Ocultar</p>
            </div>
             }
             </span>

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
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
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
            

            <span id="showConfirmSpan">
            <label 
            htmlFor="confirmPasswordInput" 
            id="confirmInputLabel">
            Confirmar contraseña:
            </label>
            {showPassword ? 
            <div onClick={handleShowHide} id="divShowConf">
            <BiShowAlt id="iconShow"/> 
            <p id="showPass">Mostrar</p> 
            </div>
            :
            <div onClick={handleShowHide} id="divHideConf">
            <BiHide id="iconHide"/>
            <p id="hidePassText">Ocultar</p>
            </div>
             }
            </span>

            <input 
            type={showPassword ? "password" : "text"}
            id="confirmPasswordInput"
            maxLength="60"
            {...register("confirmPass", {required: "Por favor, confirme su contraseña",
            minLength:{
                value:8,
                message: "La contraseña debe tener al menos 8 caracteres"
            },
            pattern:{
                value: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message: "La contraseña no cumple con los requisitos"
            }})}
            />

           <p id="termsAndPolicies">Al crear una cuenta, usted acepta los <a>términos de uso</a> y las <a>políticas de privacidad</a>.</p> 

            <button type="submit" id="submitButton">Registrarse</button>
            

            </form>
        </>
    )

}