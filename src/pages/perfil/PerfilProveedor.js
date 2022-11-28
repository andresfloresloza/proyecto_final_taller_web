import React from "react";
import "../../styles/Perfiles.css";

const PerfilProveedor = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorProveedor1">
        <div className="contenedorIndividuales">
          <img
            className="icono-perfil-chofer"
            src={require("../../assets/icon perfil.png")}
            alt="icono-perfil"
          />
          <div>
            <p>DATOS PERSONALES</p>
            <label className="tituloDatos">Nombre Completo:</label>
            <br />
            <label className="contenidoDatos">Luis Andrés Flores Loza</label>
            <br />
            <label className="tituloDatos">Dirección:</label> <br />
            <label className="contenidoDatos">Av. Busch 3er Anillo</label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerfilProveedor;
