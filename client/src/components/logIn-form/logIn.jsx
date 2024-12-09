import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { BiShowAlt, BiHide } from "react-icons/bi";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/loginSlice";

import styles from "./login.module.css";

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(true);
  const dispatch = useDispatch();
  const { isLoading, error, user } = useSelector((state) => state.login);
  const handleShowHide = () => {
    setShowPassword(!showPassword);
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    reset,
  } = useForm({ mode: "onChange" });

  const navigate = useNavigate()

  console.log("TOKEN DE USUARIO --->", user)

  const loginSubmit = (data) => {
    console.log("Formulario enviado");
    const loginData = data;
    console.log(loginData);
    dispatch(login(loginData));
    reset();
  };

useEffect(() => {
    if(user){
      navigate("/user/buyer")
    }
}, [user])

  return (
    <>
      <form className={styles.formContent} onSubmit={handleSubmit(loginSubmit)}>
        <div className={styles.title}>
          <p>Bienvenido de nuevo</p>
          <h1>Logueate con tu cuenta</h1>
        </div>
        <div className={styles.content}>
          <label htmlFor="emailInput" className={styles.inputLabel}>
            Correo Electrónico
          </label>
          <input
            type="text"
            id="emailInput"
            className={`${styles.textInput} ${
              errors?.email ? styles.error : ""
            }`}
            {...register("username", {
              required: {
                value: true,
                message: "Ingrese su dirección de correo electrónico",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Formato de correo electrónico inválido",
              },
            })}
          />
          {errors.email && (
            <p className={styles.errorText}>{errors.email.message}</p>
          )}
          <span className={styles.passSpan}>
            <label htmlFor="passwordInput" className={styles.inputLabel}>
              Contraseña:
            </label>
            {showPassword ? (
              <div onClick={handleShowHide} className={styles.divShowPass}>
                <BiShowAlt className={styles.iconShow} />
                <p>Mostrar</p>
              </div>
            ) : (
              <div onClick={handleShowHide} className={styles.divHidePass}>
                <BiHide className={styles.iconHide} />
                <p>Ocultar</p>
              </div>
            )}
          </span>
          <input
            className={`${styles.textInput} ${
              errors?.password ? styles.error : ""
            }`}
            type={showPassword ? "password" : "text"}
            id="passwordInput"
            {...register("password", {
              required: { value: true, message: "Ingrese su contraseña" },
              minLength: {
                value: 8,
                message: "La contraseña debe tener al menos 8 caracteres",
              },
            })}
          />
          {errors.password && (
            <p className={styles.errorText}>{errors.password.message}</p>
          )}
          <div className={styles.checkPassword}>
            <span className={styles.recuerdame}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                {...register("isChecked")}
              />
              <p>Recuérdame</p>
            </span>
            <span>
              <p>Olvidaste tu contraseña?</p>
            </span>
          </div>
          <button
            type="submit"
            className={styles.sendButton}
            disabled={!isValid || isLoading}
          >
            {isLoading ? "Cargando..." : "Enviar"}
          </button>
          <div className={styles.divisor}>
            <hr />
            <p>O</p>
            <hr />
          </div>
          <div className={styles.socialsButtons}>
            <button className={styles.socialButton}>
              <FcGoogle />
              Loguearse con Google
            </button>
            <button className={styles.socialButton}>
              <FaFacebook styled={{ color: "red" }} />
              Loguearse con Facebook
            </button>
            <button className={styles.socialButton}>
              <FaApple />
              Loquearse con Apple
            </button>
            <p>
              Nuevo en Financial{" "}
              <Link to="/register-options">REGISTRATE AQUÍ</Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
