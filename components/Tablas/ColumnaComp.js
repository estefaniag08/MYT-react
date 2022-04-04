import { useEffect, useState, useRef } from "react";
import styles from "../../styles/TablaHorario.module.css";
import { RowComp } from "./RowComp";
function Columna({
  stylesFather,
  cellOdd,
  cellEven,
  listaTareas,
  listaFranjas,
  horas,
  setTareaSeleccionada
}) {
  const arregloTareas = useRef([]);
  const llenarTabla = () => {
    let day = [];
    for (let i = 0; i < 24; i++) {
      let hour = [];
      hour.push(listaTareas.filter((tarea) =>
        tarea.horaEntrega > i * 100 && tarea.horaEntrega <= (i + 1) * 100
      ));
      day.push(hour);
    }
    return day;
  }
  useEffect(() => {
    arregloTareas.current = llenarTabla();
    console.log('arregloTareas.current', arregloTareas.current)
  }, [listaTareas]);

  return listaTareas ? (
    <div className={`${stylesFather} flex-column w-full  table-cell`}>
      {
        arregloTareas.current.map((tareas, index) =>
        (
          <div key={index} name={index} className={`${cellEven} ${styles.cell}`}>
            <RowComp key={index} tareas={tareas} llave={index} />{' '}
          </div>
        )
        )
      }
    </div>
  ) : (
    <></>
  );
}

export default Columna;
