import { useEffect, useState } from "react";
import styles from "../../styles/TablaHorario.module.css";
function Columna({
  stylesFather,
  cellOdd,
  cellEven,
  listaTareas,
  listaFranjas,
  horas,
}) {
  const [arregloTareas, setArregloTareas] = useState([
    {
      inicio: 0,
      final: 59,
    },
    {
      inicio: 1600,
      final: 1659,
    },
  ]);
  useEffect(() => {
    if (listaTareas) {
      const arreglo = arregloTareas;
      arreglo.map((elemento) => {
        listaTareas.map((tarea) => {
          if (
            tarea.horaEntrega >= elemento.inicio &&
            tarea.horaEntrega <= elemento.final
          ) {
            elemento.datos = { ...tarea };
          }
        });
      });
      setArregloTareas(arreglo)
      console.log(arreglo[1])
    }
  }, [listaTareas]);
  return listaTareas ? (
    <div className={`${stylesFather} flex-column w-full table-cell`}>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        {arregloTareas[1]?.datos ? arregloTareas[1].datos.nombre : ""}
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
      <div name={0} className={`${cellEven} ${styles.cell}`}>
        0
      </div>
      <div name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </div>
    </div>
  ) : (
    <></>
  );
}

export default Columna;
