import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "../styles/PanelHorario.module.css";
import ContenedorFranjas from "./ContenedoresPanel/ContenedorFranjas";
import ContenedorImportantes from "./ContenedoresPanel/ContenedorImportantes";
import ContenedorTareas from "./ContenedoresPanel/ContenedorTareas";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { obtenerSoloActivas } from "../services/docList.service";

function PanelHorario({setFranja, idFranja}) {
  const [prueba, setPrueba] = useState("");

  const [listaTareas, setListaTareas] = useState([]);
  const [listaFranjas, setListaFranjas] = useState([]);
  const [tareaSeleccionada, setTareaSeleccionada] = useState();
  const [fecha, setFecha] = useState(new Date());
  const usuario = "vMCIp2NBOORMJhVcw9HV"; //Como prueba

  useEffect(() => {
    const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0, 0, 0, 0)
    const fechaFinal = new Date();
    fechaFinal.setDate(fecha.getDate() + 1);
    fechaFinal.setHours(0, 0, 0, 0);
    llenarListaTareas(fechaInicio, fechaFinal);
  }, [fecha]);

  const llenarListaTareas = async (fechaInicio, fechaFinal) => {
    const coleccionTareas = collection(firestore, `tareas/${usuario}/tarea`);
    const queryTareas = query(
      coleccionTareas,
      where("fecha_entrega", ">=", fechaInicio),
      where("fecha_entrega", "<", fechaFinal),
    );
    let arregloTareas = []
    const snapshotTareas = await getDocs(queryTareas);
    arregloTareas = obtenerSoloActivas(snapshotTareas);
    setListaTareas(arregloTareas);
    const nuevaTareaSeleccionada = arregloTareas[0]
    setTareaSeleccionada(nuevaTareaSeleccionada);
  }
  return (
    <div className="2xl:w-2/12 lg:self-center grid gap-3  lg:mt-3">
      <div>
        <Link href="/agenda">
          <button type="button" className={styles.boton}>
            <div className="md:w-12 md:h-12 w-10 h-10">
              <img
                src="/img/agenda.svg"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <h2 className="lg:text-5xl text-4xl whitespace-nowrap">MI AGENDA</h2>
          </button>
        </Link>
      </div>
      <ContenedorImportantes listaTareas={listaTareas} fecha={fecha} setFecha={setFecha} setTareaSeleccionada={setTareaSeleccionada}  />
      <ContenedorFranjas setFranja={setFranja} idFranja={idFranja}/>
    </div>
  );
}

export default PanelHorario;
