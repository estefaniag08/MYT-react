import { collection, getDocs, doc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Head from "next/head";
import { useEffect, useState } from "react";
import FullLayout from "../components/FullLayout";
import PanelTarea from "../components/PanelTarea";
import TablaAgenda from "../components/TablaAgenda";
function Agenda() {
  const [listaTareas, setListaTareas] = useState([]);
  const [listaFranjas, setListaFranjas] = useState([]);
  const usuario = "vMCIp2NBOORMJhVcw9HV"; //Como prueba
  useEffect(() => {
    const coleccionTareas = collection(firestore, `tareas/${usuario}/tarea`)
    try {

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
          <TablaAgenda />
          <PanelTarea />
        </main>
      </FullLayout>
    </>
  );
}

export default Agenda;
