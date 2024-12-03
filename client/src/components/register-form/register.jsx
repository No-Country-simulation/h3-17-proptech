import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShowAlt } from "react-icons/bi";

import "./register.css";

export default function RegisterForm({ role }) {
  const [showPassword, setShowPassword] = useState(true);
  const {
    formState: { errors },
    register,
    watch,
    reset,
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleShowHide = () => {
    setShowPassword(!showPassword);
  };

  const submit = (data) => {
    const formData = { ...data, role };
    console.log(formData);
    reset();
  };

  console.log(errors);

  const passValue = watch("password");
  const confValue = watch("confirmPass");

  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit(submit)}>
        <h1 className="registerFormTitle">Bienvenido a Financial.ai</h1>
        <p className="accountExists">
          Ya tienes una cuenta? <a>Logueate</a>
        </p>

        <label htmlFor="firstNameInput" className="inputLabel">
          Nombre/s:
        </label>
        <input
          type="text"
          id="firstNameInput"
          className="textInput"
          {...register("firstName", { required: "Ingrese su/s nombre/s" })}
        />
        {errors.firstName && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.firstName.message}
          </p>
        )}
        <label htmlFor="lastNameInput" className="inputLabel">
          Apellido/s:
        </label>
        <input
          type="text"
          id="lastNameInput"
          className="textInput"
          {...register("lastName", { required: "Ingrese su/s apellido/s" })}
        />
        {errors.lastName && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.lastName.message}
          </p>
        )}
        <label className="inputLabel">Fecha de Nacimiento:</label>
        <input
          aria-label="Date"
          type="date"
          id="datePicker"
          className="textInput"
          {...register("birthDate", {
            required: "Ingrese su fecha de nacimiento",
          })}
        />
        {errors.birthDate && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.birthDate.message}
          </p>
        )}

        <label htmlFor="emailInput" className="inputLabel">
          Correo Electrónico:
        </label>
        <input
          type="text"
          id="emailInput"
          className="textInput"
          {...register("email", {
            required: "Ingrese su dirección de correo electrónico",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Correo electrónico inválido",
            },
          })}
        />
        {errors.email && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.email.message}
          </p>
        )}
        <span className="passSpan">
          <label htmlFor="passwordInput" className="inputLabel">
            Contraseña:
          </label>
          {showPassword ? (
            <div onClick={handleShowHide} className="divShowPass">
              <BiShowAlt className="iconShow" />
              <p>Mostrar</p>
            </div>
          ) : (
            <div onClick={handleShowHide} className="divHidePass">
              <BiHide className="iconHide" />
              <p>Ocultar</p>
            </div>
          )}
        </span>
        <input
          type={showPassword ? "password" : "text"}
          id="passwordInput"
          className="textInput"
          {...register("password", {
            required: "Ingrese su contraseña",
            minLength: {
              value: 8,
              message: "La contraseña debe tener al menos 8 caracteres",
            },
            pattern: {
              value: /[A-Z]/,
              message: "Debe tener al menos una mayúscula",
            },
            validate: {
              lowercase: (value) =>
                /[a-z]/.test(value) || "Debe tener al menos una minúscula",
              number: (value) =>
                /\d/.test(value) || "Debe tener al menos un número",
              symbol: (value) =>
                /[\W_]/.test(value) || "Debe tener al menos un símbolo",
            },
          })}
        />
        {errors.password && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.password.message}
          </p>
        )}
        {/* <div className="passwordRequirements">
          <ul className="requirementsList">
            <li>Mínimo 8 caracteres</li>
            <li>Un símbolo</li>
            <li>Una mayúscula</li>
            <li>Un número</li>
            <li>Una minúscula</li>
          </ul>
        </div> */}

        <span className="showConfirmSpan">
          <label htmlFor="confirmPasswordInput" className="inputLabel">
            Confirmar contraseña:
          </label>
          {showPassword ? (
            <div onClick={handleShowHide} className="divShowConf">
              <BiShowAlt className="iconShow" />
              <p>Mostrar</p>
            </div>
          ) : (
            <div onClick={handleShowHide} className="divHideConf">
              <BiHide className="iconHide" />
              <p>Ocultar</p>
            </div>
          )}
        </span>
        <input
          type={showPassword ? "password" : "text"}
          id="confirmPasswordInput"
          className="textInput"
          {...register("confirmPass", {
            required: "Confirme su contraseña",
            validate: (value) =>
              value === passValue || "Las contraseñas no coinciden",
          })}
        />
        {errors.confirmPass && (
          <p
            style={{
              color: "var(---Error)",
              fontSize: "0.7rem",
              marginTop: "0px",
            }}
          >
            {errors.confirmPass.message}
          </p>
        )}
        <p className="termsAndPolicies">
          Al crear una cuenta, usted acepta los <a>términos de uso</a> y las{" "}
          <a>políticas de privacidad</a>.
        </p>

        <button type="submit" className="submitButton">
          Registrarse
        </button>
      </form>

      {/* <form id="registerForm" onSubmit={handleSubmit(submit)}>
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
            

            </form> */}
    </>
  );
}
