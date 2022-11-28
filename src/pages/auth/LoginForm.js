import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_HOME, ROUTER_REGISTER_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";
import GoogleButton from "./SignInWithGoogle";

const LoginForm = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Pais Bolivia"
      />
      <div className="contenedor">
        <img
          className="icono-perfil"
          src={require("../../assets/icon perfil.png")}
          alt="icono-perfil"
        />
        <div className="contenedorInput">
          <input
            className="input"
            type="text"
            placeholder="Correo Electronico..."
          />
          <input className="input" type="text" placeholder="Contraseña..." />
          <Link className="login-btn_login" to={ROUTER_HOME}>
            Iniciar Sesion
          </Link>
        </div>
        <div className="alt-login2">
          <p className="titulo">Entrar con</p>
          <GoogleButton />
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
