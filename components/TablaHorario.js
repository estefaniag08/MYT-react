import Columna from "./Tablas/Columna";
import styles from "../styles/TablaHorario.module.css";
import { useEffect } from "react";
function TablaHorario() {
  useEffect(()=>
  {
    
  })
  return (
    <div className="lg:w-11/12  w-full xl:h-[76vh] lg:self-center self-start overflow-y-hidden">
      <div className={`text-5xl  flex justify-end gap-4  p-1 font-bold ${styles.texto}`}>
            <button type="button" className="font-bold ">{"<"}</button>
            <h1 className={`lg:text-5xl text-3xl `}>Semana 1 - 7 Nov</h1>
            <button type="button" className="font-bold">{">"}</button>
      </div>
      <div className=" md:h-[90%] xl:overflow-y-scroll overflow-x-auto w-full">
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
          <tbody>
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
          </tbody>
        </table>
      <div className={`${styles.degrade} w-full`}>{'-'}</div>
      </div>
    </div>
  );
}

export default TablaHorario;
