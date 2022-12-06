import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { ROUTER_HOME } from "../../config/Constant";
import { userLogin } from "../../redux/loginSlice";
import "../../styles/LoginRegisterForm.css";
import GoogleButton from "./SignInWithGoogle";

const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const iniciarSesion = () => {
    const url = "https://localhost:7272/api/security/login";
    const params = {
      username,
      password,
    };

    axios
      .post(url, params)
      .then((response) => {
        const token = response.data.jwt;
        dispatch(userLogin(token));
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
        alt="Proyecto"
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
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="UserName..."
          />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Contraseña..."
          />
          <Link
            className="login-btn_login"
            onClick={() => {
              iniciarSesion();
            }}
          >
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
