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
  setTareaSeleccionada,
  setFranja,
  esTarea
}) {
  const arregloTareas = useRef([]);
  const arregloFranjas = useRef([]);
  
  const llenarTablaTareas = () => {
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

  const llenarTablaFranjas = () =>{
    let day = [];
    for (let i = 0; i < 24; i++) {
      let hour = [];
      hour.push(listaFranjas.filter((franja) =>
        //console.log('franja_hora ', franja.hora_inicio, franja.hora_final,(i*100) , (i*100) >= franja.hora_inicio && (i*100)<franja.hora_final)
        ((i*100) >= franja.hora_inicio && (i*100)<franja.hora_final)

      
      ));
      day.push(hour);
    }
    return day;
  }
  useEffect(() => {
    arregloTareas.current = llenarTablaTareas();
  }, [listaTareas]);
  
  useEffect(() => {
      arregloFranjas.current = llenarTablaFranjas();
      
  },[listaFranjas])

  return esTarea ? (
    <div className={`${stylesFather} flex-column w-full  table-cell`}>
      {
        arregloTareas.current.map((tareas, index) =>
        (
          <div key={index} name={index} className={`${ index%2 === 0 ? cellEven: cellOdd} ${styles.cell}`}>
            <RowComp key={index} tareas={tareas} llave={index}  esTarea={esTarea} setTareaSeleccionada={setTareaSeleccionada}/>{' '}
          </div>
        )
        )
      }
    </div>
  ) : !esTarea ? (
    <div className={`${stylesFather} flex-column w-full  table-cell`}>
      {
        arregloFranjas.current.map((franjas, index) =>{

        return (
          <div key={index} name={index} className={`${ franjas.lenght > 0 ? `${styles.cellHour}` : index%2 === 0 ? cellEven: cellOdd} ${styles.cell}`}>
            <RowComp key={index} franjas={franjas} llave={index} esTarea={esTarea} setFranja={setFranja}/>{' '}
          </div>
        )}
        )
      }
    </div>
  ): <></>;
}

export default Columna;
