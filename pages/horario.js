import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import FullLayout from "../components/FullLayout";
import PanelHorario from "../components/PanelHorario";
import TablaHorario from "../components/TablaHorario";
import Head from "next/head";
import { useEffect, useState } from "react";
import { obtenerSoloActivas } from "../services/docList.service";
function Horario() {
  const [idFranja, setFranja] = useState("");
  const [listaFranjas, setListaFranjas] = useState([]);
  const [fechas, setFechas] = useState([]);
  const [ actualizaTabla, setActualizaTabla] = useState(false);

  
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
        <main className="lg:flex grid gap-3 mx-2 ">
          
              <TablaHorario setFranja={setFranja} />
          
          <PanelHorario setFranja={setFranja} idFranja={idFranja}/>
        </main>
      </FullLayout>
    </>
  );
}

export default Horario;
