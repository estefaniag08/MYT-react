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
      console.log(listaTareas)
      //setArregloTareas(...listaTareas)
    //console.log(listaTareas);
    //  const arreglo = arregloTareas;
    //  arreglo.map((elemento, index) => {
    //    listaTareas.map((tarea) => {
    //      if (
    //        tarea.horaEntrega >= elemento.inicio &&
    //        tarea.horaEntrega <= elemento.final
    //      ) {
    //        elemento.datos = { ...tarea };
    //      }
    //    });
    //  });
    //  console.log(arreglo);
    }
  }, [listaTareas]);
  return (
    <td className={`${stylesFather} `}>
      <tr name={0} className={` ${cellEven} ${styles.cell}`}>
        0
      </tr>
      <tr name={100} className={`${cellOdd} ${styles.cell}`}>
        1
      </tr>
      <tr name={200} className={`${cellEven} ${styles.cell}`}>
        2
      </tr>
      <tr name={300} className={`${cellOdd} ${styles.cell}`}>
        3
      </tr>
      <tr name={400} className={`${cellEven} ${styles.cell} `}>
        4
      </tr>
      <tr name={500} className={`${cellOdd} ${styles.cell}`}>
        5
      </tr>
      <tr name={600} className={`${cellEven} ${styles.cell}`}>
        6
      </tr>
      <tr name={700} className={`${cellOdd} ${styles.cell}`}>
        7
      </tr>
      <tr name={800} className={`${cellEven} ${styles.cell}`}>
        8
      </tr>
      <tr name={900} className={`${cellOdd} ${styles.cell}`}>
        9
      </tr>
      <tr name={1000} className={`${cellEven} ${styles.cell}`}>
        10
      </tr>
      <tr name={1100} className={`${cellOdd} ${styles.cell}`}>
        11
      </tr>
      <tr name={1200} className={`${cellEven} ${styles.cell}`}>
        12
      </tr>
      <tr name={1300} className={`${cellOdd} ${styles.cell}`}>
        13
      </tr>
      <tr name={1400} className={`${cellEven} ${styles.cell}`}>
        14
      </tr>
      <tr name={1500} className={`${cellOdd} ${styles.cell}`}>
        15
      </tr>
      <tr name={1600} className={`${cellEven} ${styles.cell}`}>
        16
      </tr>
      <tr name={1700} className={`${cellOdd} ${styles.cell}`}>
        17
      </tr>
      <tr name={1800} className={`${cellEven} ${styles.cell}`}>
        18
      </tr>
      <tr name={1900} className={`${cellOdd} ${styles.cell}`}>
        19
      </tr>
      <tr name={2000} className={`${cellEven} ${styles.cell}`}>
        20
      </tr>
      <tr name={2100} className={`${cellOdd} ${styles.cell}`}>
        21
      </tr>
      <tr name={2200} className={`${cellEven} ${styles.cell}`}>
        22
      </tr>
      <tr name={2300} className={`${cellOdd} ${styles.cell}`}>
        23
      </tr>
    </td>
  );
}

export default Columna;
