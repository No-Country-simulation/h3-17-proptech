import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiHide, BiShowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  registerUser,
  clearRegisterState,
} from "../../redux/slices/registerSlice";

import "./register.css";

const formatBirthDate = (date) => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

export function RegisterForm({ role }) {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.register);
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
    const formData = {
      ...data,
      birthDate: formatBirthDate(data.birthDate),
      role,
      isSocialLogin: true,
      loginTypeId: 0,
    };

    console.log(formData);
    dispatch(registerUser(formData));
    reset();
  };

  const passValue = watch("password");
  const confValue = watch("confirmPass");

  useEffect(() => {
    if (user) {
      alert("¡Registro exitoso! Inicia sesión para comenzar a operar");
      dispatch(clearRegisterState());
    }
  }, [user, dispatch]);

  useEffect(() => {
    if (error) {
      alert(`Error: ${error}`);
    }
  }, [error]);

  return (
    <>
      <form className="registerForm" onSubmit={handleSubmit(submit)}>
        <h1 className="registerFormTitle">Bienvenido a Financial.ai</h1>
        <p className="accountExists">
          Ya tienes una cuenta?
          <Link to="/login">Logueate</Link>
        </p>

        <label htmlFor="firstNameInput" className="inputLabel">
          Nombre/s:
        </label>
        <input
          type="text"
          id="firstNameInput"
          className="textInput"
          {...register("name", { required: "Ingrese su/s nombre/s" })}
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
          {...register("confirmPassword", {
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
          Al crear una cuenta, usted acepta los términos de uso y las políticas
          de privacidad.
        </p>

        <button type="submit" className="submitButton" disabled={loading}>
          {loading ? "Registrando..." : "Registrarse"}
        </button>
      </form>
    </>
  );
}
