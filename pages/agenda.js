import { collection, getDocs, doc, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Head from "next/head";
import { useEffect, useState } from "react";
import FullLayout from "../components/FullLayout";
import PanelTarea from "../components/PanelTarea";
import TablaAgenda from "../components/TablaAgenda";
function Agenda() {
  const [listaTareas, setListaTareas] = useState([]);
  const [listaFranjas, setListaFranjas] = useState([]);
  const [fecha, setFecha] = useState(new Date());
const usuario = "vMCIp2NBOORMJhVcw9HV"; //Como prueba
  useEffect(() => {
  const fechaInicio = new Date(fecha);
    fechaInicio.setHours(0,0,0,0)
    const fechaFinal = new Date();
    fechaFinal.setDate(fecha.getDate() + 1);
    fechaFinal.setHours(0,0,0,0);
    
    const coleccionTareas = collection(firestore, `tareas/${usuario}/tarea`);
    const queryTareas = query(
      coleccionTareas,
      where("fecha_entrega", ">=", fechaInicio),
      where("fecha_entrega", "<", fechaFinal)
    );
    
    try {
      const arregloTareas = []
      const obtenerListas = async () => {
        const tareasResultado = await getDocs(queryTareas);
        arregloTareas = tareasResultado.docs.map(item => {
          return {
            id: item.id,
            ...item.data()
          }
       })
        setListaTareas(arregloTareas);
      };
      obtenerListas();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FullLayout>
        <main className="lg:flex grid  gap-3 mx-2">
          <TablaAgenda listaTareas={listaTareas} />
          <PanelTarea />
        </main>
      </FullLayout>
    </>
  );
}

export default Agenda;
