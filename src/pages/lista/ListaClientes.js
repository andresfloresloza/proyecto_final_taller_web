import { Link } from "react-router-dom";
import { ROUTER_PERFIL_CLIENTE } from "../../config/Constant";
import "../../styles/Listas.css";

const ListaClientes = () => {
  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA CLIENTES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE COMPLETO</th>
                <th scope="col">NEGOCIO</th>
                <th scope="col">TELEFONO</th>
                <th scope="col">DIRECCION</th>
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
                <td>Tienda</td>
                <td>76680886</td>
                <td>Av. Cumavi</td>
                <td>
                  <Link to={ROUTER_PERFIL_CLIENTE}>VER PERFIL</Link>
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
                <td>Tienda</td>
                <td>76680886</td>
                <td>Av. Cumavi</td>
                <td>
                  <Link to={ROUTER_PERFIL_CLIENTE}>VER PERFIL</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListaClientes;
