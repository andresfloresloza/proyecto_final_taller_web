import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_HOME, ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterAlmacen = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorProveedor">
        <br />
        <div className="contenedorInput">
          <input className="input" type="text" placeholder="Encargado..." />
          <input className="input" type="text" placeholder="Ubicacion..." />
          <input
            className="input"
            type="number"
            placeholder="Capacidad Minima..."
          />
          <input
            className="input"
            type="number"
            placeholder="Capacidad Maxima..."
          />
          <input
            className="input"
            type="number"
            placeholder="Stock Actual..."
          />

          <Link className="login-btn_login" to={ROUTER_HOME}>
            Registrar
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterAlmacen;
