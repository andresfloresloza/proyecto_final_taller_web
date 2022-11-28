import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterCliente = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorCliente">
        <img
          className="icono-perfil"
          src={require("../../assets/icon perfil.png")}
          alt="icono-perfil"
        />
        <input className="input" type="text" placeholder="Nombre Completo..." />
        <input
          className="input"
          type="text"
          placeholder="Tienda / Supermercado / Etc..."
        />
        <input className="input" type="text" placeholder="Direccion..." />

        <input
          className="input"
          type="number"
          placeholder="Telefono / Celular..."
        />
        <input
          className="input"
          type="text"
          placeholder="Correo Electronico..."
        />
        <input className="input" type="password" placeholder="Contraseña..." />
        <Link className="login-btn" to={ROUTER_LOGIN_FORM}>
          Registrate
        </Link>
      </div>
    </div>
  );
};
export default RegisterCliente;
