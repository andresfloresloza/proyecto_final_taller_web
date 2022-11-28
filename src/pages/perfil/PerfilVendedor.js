import React from "react";
import "../../styles/Perfiles.css";

const PerfilVendedor = () => {
  return (
    <div className="page">
      <img
        className="icono"
        src={require("../../assets/logotipo.png")}
        alt="Logo Principal"
      />
      <div className="contenedorVendedor1">
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
            <label className="tituloDatos">Correo Electronico:</label>
            <br />
            <label className="contenidoDatos">
              luisandresfloresloza@gmail.com
            </label>
            <br />
            <label className="tituloDatos">Dirección:</label> <br />
            <label className="contenidoDatos">Av. Busch 3er Anillo</label>
            <br />
            <label className="tituloDatos">Telefono:</label> <br />
            <label className="contenidoDatos">766-808-86</label>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PerfilVendedor;
