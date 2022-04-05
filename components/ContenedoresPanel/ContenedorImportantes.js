import styles from "../../styles/ContenedoresPanel/ContenedorImportantes.module.css"
import { cambiarDia, esHoy, obtenerNombreDelDiaYNumero, obtenerTituloDia } from '../../services/date.service';
import { useEffect, useState } from "react";
import { getTime } from "../../services/date.service";

function ContenedorImportantes({ listaTareas, fecha, setFecha, setTareaSeleccionada }) {
  const [tituloDia, setTituloDia] = useState(obtenerTituloDia(fecha));
  const clicSiguienteDia = () => {
    cambiarDia(1, fecha, setFecha, setTituloDia);
  }
  const clicDiaAnterior = () => {
    cambiarDia(-1, fecha, setFecha, setTituloDia);
  }
  //alert("lista tareas cantidad: " + listaTareas.length)
  /*alert("lista tareas nombre tarea 1: " + listaTareas[0].nombre)
  alert("lista tareas nombre tarea 2: " + listaTareas[1].nombre)
  alert("lista tareas nombre tarea 3: " + listaTareas[2].nombre)
  */
  
  let tareas = []
  let muchastareas = ""
  if (listaTareas.length > 0){
    for (let i = 0; i < 3; i++){      
      const tarea = listaTareas[i] ? listaTareas[i].nombre + " - " + getTime(listaTareas[i].horaEntrega) : " - "      
      tareas.push(tarea)
    }
    if (listaTareas.length > 3){
      muchastareas = " ... "
    }
  }else {
    for (let i = 0; i < 3; i++){
      tareas.push(" - ")
    }
  }

  return (
    <div className={styles.contenedor}>
        <div className="text-5xl flex gap-4 items-center justify-center p-1 font-bold">
            <button onClick={clicDiaAnterior} type="button" className="font-bold">
              {"<"}
            </button>
            <h1 className="lg:text-3xl text-2xl">TAREAS {tituloDia}</h1>
            <button onClick={clicSiguienteDia} type="button" className="font-bold">
              {">"}
            </button>
        </div>
        <div className="text-center text-2xl md:text-4xl grid items-center justify-center pb-4 whitespace-normal p-2">
          <h2>{`${tareas[0]}`}</h2>
          <h2>{`${tareas[1]}`}</h2>
          <h2>{`${tareas[2]} ${muchastareas}`}</h2>            
        </div>
    </div>
  )
}

export default ContenedorImportantes