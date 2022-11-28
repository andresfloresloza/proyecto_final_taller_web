import { Link } from "react-router-dom";
import "../../styles/Listas.css";

const ListaAlmacenes = () => {
  return (
    <div className="page">
      <div className="contenedorMensaje">
        <p className="tituloRanking">LISTA ALMACENES</p>
        <div className="containerTable">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">ENCARGADO</th>
                <th scope="col">UBICACION</th>
                <th scope="col">CAPACIDAD MINIMA</th>
                <th scope="col">CAPACIDAD MAXIMA</th>
                <th scope="col">STOCK ACTUAL</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td scope="row">1</td>
                <td>Luis Andres Flores Loza</td>
                <td>Av. Mutualista</td>
                <td>1500</td>
                <td>10000</td>
                <td>5500</td>
                <td>
                  <Link>VER PRODUCTOS</Link>
                </td>
              </tr>
              <tr>
                <td scope="row">1</td>
                <td>Luis Andres Flores Loza</td>
                <td>Av. Mutualista</td>
                <td>1500</td>
                <td>10000</td>
                <td>5500</td>
                <td>
                  <Link>VER PRODUCTOS</Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
export default ListaAlmacenes;
