import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterProveedor = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorProveedor">
        <img
          className="icono-perfil_proveedor"
          src={require("../../assets/icon perfil.png")}
          alt="icono-perfil"
        />
        <div className="contenedorInput">
          <input
            className="input"
            type="text"
            placeholder="Nombre Completo..."
          />
          <input className="input" type="text" placeholder="Direccion..." />
          <Link className="login-btn_login" to={ROUTER_LOGIN_FORM}>
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterProveedor;
