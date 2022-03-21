import Link from "next/link";
import { useState } from "react";
import styles from "../styles/PanelHorario.module.css";
import ContenedorFranjas from "./ContenedoresPanel/ContenedorFranjas";
import ContenedorImportantes from "./ContenedoresPanel/ContenedorImportantes";
import ContenedorTareas from "./ContenedoresPanel/ContenedorTareas";

function PanelHorario({setFranja, idFranja}) {
  const [prueba, setPrueba] = useState("");
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
      <ContenedorImportantes />
      <ContenedorFranjas setFranja={setFranja} idFranja={idFranja}/>
      <ContenedorTareas />
      <input type="text" id="pruebatxt" onChange={(e) => {setPrueba(e.target.value)}}/>
      <input type="button" value="prueba" onClick={()=> { console.log("selecciona franja"); setFranja(prueba)}}/>
    </div>
  );
}

export default PanelHorario;
