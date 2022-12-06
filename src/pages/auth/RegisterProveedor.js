import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterProveedor = () => {
  const token = useSelector((state) => state.login.token);

  const [nombre, setNombre] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const registerProveedor = () => {
    const url = "https://localhost:7272/api/proveedor";
    const params = {
      nombre,
      ubicacion,
    };

    axios
      .post(url, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // dispatch(userLogin(token));
        // history(ROUTER_HOME);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            value={nombre}
            required
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre Completo..."
          />
          <input
            className="input"
            type="text"
            value={ubicacion}
            required
            onChange={(e) => setUbicacion(e.target.value)}
            placeholder="Direccion..."
          />

          <Link
            className="login-btn_login"
            onClick={() => {
              registerProveedor();
            }}
          >
            Registrate
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterProveedor;
