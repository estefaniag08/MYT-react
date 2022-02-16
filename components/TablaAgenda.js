import Columna from "./Tablas/Columna";
import styles from "../styles/TablaAgenda.module.css";
function TablaAgenda() {
  return (
    <div className=" lg:w-1/2 lg:h-screen lg:mt-8 w-full xl:h-[76vh] xl:self-center self-start overflow-y-hidden">
      <div
        className={`text-5xl  flex justify-end gap-4  p-1 font-bold ${styles.texto}`}
      >
        <button type="button" className="font-bold lg:text-5xl text-3xl">
          {"<"}
        </button>
        <h1 className={`lg:text-5xl text-3xl `}>Semana 1 - 7 Nov</h1>
        <button type="button" className="font-bold lg:text-5xl text-3xl ">
          {">"}
        </button>
      </div>
      <div className=" md:h-[90%] md:overflow-y-auto overflow-x-auto w-full">
        <table className="">
          <thead>
            <tr
              className={`${styles.header} border-solid border-2 border-white text-4xl text-white`}
            >
              <th className="border-solid border-2 border-white p-2">Hora</th>
              <th className="border-solid border-2 border-white">LUNES</th>
            </tr>
          </thead>
          <Columna
            stylesFather={"w-auto"}
            cellEven={`${styles.cellHour} text-white`}
            cellOdd={`${styles.cellHour} text-white`}
          />
          <Columna
            stylesFather={"w-full"}
            cellEven={`${styles.cellEven} text-white`}
            cellOdd={`${styles.cellOdd} text-white`}
          />
        </table>
      </div>
      <div className={`${styles.degrade} w-full`}>{"-"}</div>
    </div>
  );
}

export default TablaAgenda;
