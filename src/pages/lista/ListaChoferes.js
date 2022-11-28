import { Link } from "react-router-dom";
import { ROUTER_PERFIL_CHOFER } from "../../config/Constant";
import "../../styles/Listas.css";

const ListaChoferes = () => {
  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA CHOFERES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">ID</th>
                <th scope="col">NOMBRE COMPLETO</th>
                <th scope="col">TELEFONO</th>
                <th scope="col"></th>
                <th scope="col">MARCA</th>
                <th scope="col">MODELO</th>
                <th scope="col">PLACA</th>
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
                <td>76680886</td>
                <td scope="row">
                  <img
                    className="icono_jugador"
                    src={require("../../assets/icon perfil.png")}
                    alt="Pais Bolivia"
                  />
                </td>
                <td>Foton</td>
                <td>BJ5049XLC-A7</td>
                <td>5673-PRD</td>
                <td>
                  <Link to={ROUTER_PERFIL_CHOFER}>VER PERFIL</Link>
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
                <td>76680886</td>
                <td scope="row">
                  <img
                    className="icono_jugador"
                    src={require("../../assets/icon perfil.png")}
                    alt="Pais Bolivia"
                  />
                </td>
                <td>Foton</td>
                <td>BJ5049XLC-A7</td>
                <td>5673-PRD</td>
                <td>
                  <Link to={ROUTER_PERFIL_CHOFER}>VER PERFIL</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListaChoferes;
