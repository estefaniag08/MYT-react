import Columna from "./Tablas/Columna";
import ColumnaComp from "./Tablas/ColumnaComp";
import styles from "../styles/TablaAgenda.module.css";
import { useState } from "react";
import { cambiarDia, esHoy, obtenerNombreDelDiaYNumero, obtenerTituloDia } from '../services/date.service';
function TablaAgenda({ listaTareas, fecha, setFecha, setTareaSeleccionada }) {
  const [tituloDia, setTituloDia] = useState(obtenerTituloDia(fecha));
  const clicSiguienteDia = () => {
    cambiarDia(1, fecha, setFecha, setTituloDia);
  }
  const clicDiaAnterior = () => {
    cambiarDia(-1, fecha, setFecha, setTituloDia);
  }

  return (
    <div className=" lg:w-1/2 lg:h-screen lg:mt-8 w-full xl:h-[76vh] xl:self-center self-start overflow-y-hidden">
      <div className={`text-5xl  flex justify-end gap-4  p-1 font-bold`}>
        <button onClick={clicDiaAnterior} type="button" className="font-bold lg:text-5xl text-3xl">
          {"<"}
        </button>
        <h1 className={`lg:text-5xl text-3xl `}>{tituloDia}</h1>
        <button onClick={clicSiguienteDia} type="button" className="font-bold lg:text-5xl text-3xl ">
          {">"}
        </button>
      </div>
      <div className={`md:h-[90%] md:overflow-y-auto overflow-x-auto w-full`}>
        <table className="w-full">
          <thead>
            <tr
              className={`${styles.header} border-solid border-2 border-white text-4xl text-white`}
            >
              <th className={`border-solid border-2 border-white p-2 ${styles.columnaHoraAncho}`}>Hora</th>
              <th className="border-solid border-2 border-white">{obtenerNombreDelDiaYNumero(fecha)}</th>
            </tr>
          </thead>
          <tbody>
            {listaTareas ? (
              <>
                <Columna
                  stylesFather={"w-auto border-solid border-2 border-white"}
                  cellEven={`${styles.cellHour} text-white`}
                  cellOdd={`${styles.cellHour} text-white`}

                />
                <ColumnaComp
                  stylesFather={"w-full border-solid border-2 border-white"}
                  cellEven={`${styles.cellEven} text-white`}
                  cellOdd={`${styles.cellOdd} text-white`}
                  listaTareas={listaTareas} setTareaSeleccionada={setTareaSeleccionada}
                />
              </>
            ) : <></>}
          </tbody>
        </table>
      </div>
      <div className={`${styles.degrade} w-full`}>{"-"}</div>
    </div>
  );
}

export default TablaAgenda;
