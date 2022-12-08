import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_HOME, ROUTER_LOGIN_FORM } from "../../config/Constant";
import "../../styles/LoginRegisterForm.css";

const RegisterProducto = () => {
  const token = useSelector((state) => state.login.token);
  const history = useNavigate();

  const [nombreProducto, setNombreProducto] = useState("");
  const [stock, setStock] = useState("");
  const [precio, setPrecio] = useState("");

  const registerProveedor = () => {
    const url = "https://localhost:7272/api/producto";
    const params = {
      nombreProducto,
      stock,
      precio,
    };

    axios
      .post(url, params, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        history(ROUTER_HOME);
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
        <h2>FORMULARIO PRODUCTO</h2>
        <div className="contenedorInput">
          <input
            className="input"
            type="text"
            value={nombreProducto}
            required
            onChange={(e) => setNombreProducto(e.target.value)}
            placeholder="Nombre del Producto..."
          />
          <input
            className="input"
            type="number"
            value={stock}
            required
            onChange={(e) => setStock(e.target.value)}
            placeholder="Stock..."
          />
          <input
            className="input"
            type="text"
            value={precio}
            required
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Precio..."
          />
          <Link
            className="login-btn_login"
            onClick={() => {
              registerProveedor();
            }}
          >
            Registrar Producto
          </Link>
        </div>
      </div>
    </div>
  );
};
export default RegisterProducto;
