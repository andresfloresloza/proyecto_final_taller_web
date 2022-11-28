import React from "react";
import { Link } from "react-router-dom";
import { ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterChofer = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorCliente">
        <div className="contenedorIndividual">
          <img
            className="icono-perfil-chofer"
            src={require("../../assets/icon perfil.png")}
            alt="icono-perfil"
          />
          <div>
            <h2>DATOS PERSONALES</h2>
            <input
              className="inputChofer"
              type="text"
              placeholder="Nombre Completo..."
            />
            <input
              className="inputChofer"
              type="number"
              placeholder="Telefono / Celular..."
            />
            <input
              className="inputChofer"
              type="text"
              placeholder="Correo Electronico..."
            />
            <input
              className="inputChofer"
              type="password"
              placeholder="Contraseña..."
            />
          </div>
        </div>
        <div className="contenedorIndividual">
          <img
            className="icono-perfil-chofer"
            src={require("../../assets/icon perfil.png")}
            alt="icono-perfil"
          />
          <div>
            {" "}
            <h2>DATOS VEHICULO</h2>
            <input
              className="inputChofer"
              type="text"
              placeholder="Modelo..."
            />
            <input className="inputChofer" type="text" placeholder="Marca..." />
            <input className="inputChofer" type="text" placeholder="Placa..." />
            <Link className="login-btn_chofer" to={ROUTER_LOGIN_FORM}>
              Registrate
            </Link>
          </div>
        </div>{" "}
      </div>
    </div>
  );
};
export default RegisterChofer;
