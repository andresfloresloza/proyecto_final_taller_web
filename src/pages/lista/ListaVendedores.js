import { Link } from "react-router-dom";
import { ROUTER_PERFIL_VENDEDOR } from "../../config/Constant";
import "../../styles/Listas.css";

const ListaVendedores = () => {
  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA VENDEDORES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE COMPLETO</th>
                <th scope="col">DIRECCION</th>
                <th scope="col">TELEFONO</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">
                  <img
                    className="icono_jugador"
                    src={require("../../assets/icon perfil.png")}
                    alt="Pais Bolivia"
                  />
                </td>
                <td scope="row">1</td>
                <td>Luis Andres Flores Loza</td>
                <td>Av. Cumavi</td>
                <td>76680886</td>
                <td>
                  <Link to={ROUTER_PERFIL_VENDEDOR}>VER PERFIL</Link>
                </td>
              </tr>
              <tr>
                <td scope="row">
                  <img
                    className="icono_jugador"
                    src={require("../../assets/icon perfil.png")}
                    alt="Pais Bolivia"
                  />
                </td>
                <td scope="row">1</td>
                <td>Luis Andres Flores Loza</td>
                <td>Av. Cumavi</td>
                <td>76680886</td>
                <td>
                  <Link to={ROUTER_PERFIL_VENDEDOR}>VER PERFIL</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListaVendedores;
