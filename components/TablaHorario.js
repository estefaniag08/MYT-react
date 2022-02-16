import Columna from "./Tablas/Columna";
import styles from "../styles/TablaHorario.module.css";
function TablaHorario() {
  return (
    <div className="lg:w-11/12 md:w-8/12 w-full md:h-[76vh] my-3 overflow-y-hidden">
      <div className={`text-5xl  flex justify-end gap-4  p-1 font-bold ${styles.texto}`}>
            <button type="button" className="font-bold ">{"<"}</button>
            <h1 className={`lg:text-5xl text-3xl `}>Semana 1 - 7 Nov</h1>
            <button type="button" className="font-bold">{">"}</button>
        </div>
      <div className=" md:h-[90%] md:overflow-y-scroll overflow-x-auto w-full">
        <table className="">
          <thead>
            <tr
              className={`${styles.header} border-solid border-2 border-white text-4xl text-white`}
            >
              <th className="border-solid border-2 border-white p-2">Hora</th>
              <th className="border-solid border-2 border-white">LUNES</th>
              <th className="border-solid border-2 border-white">MARTES</th>
              <th className="border-solid border-2 border-white">MIÉRCOLES</th>
              <th className="border-solid border-2 border-white">JUEVES</th>
              <th className="border-solid border-2 border-white">VIERNES</th>
              <th className="border-solid border-2 border-white">SÁBADO</th>
              <th className="border-solid border-2 border-white">DOMINGO</th>
            </tr>
          </thead>
          <Columna
            stylesFather={"w-auto"}
            cellEven={`${styles.cellHour} text-white`}
            cellOdd={`${styles.cellHour} text-white`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
          <Columna
            stylesFather={"w-[14.28571429%]"}
            cellEven={`${styles.cellEven}`}
            cellOdd={`${styles.cellOdd}`}
          />
        </table>
      <div className={`${styles.degrade} w-full`}>{'-'}</div>
      </div>
    </div>
  );
}

export default TablaHorario;
