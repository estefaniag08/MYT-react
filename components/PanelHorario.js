import Image from "next/image";
import styles from "../styles/PanelHorario.module.css";
import ContenedorFranjas from "./ContenedoresPanel/ContenedorFranjas";
import ContenedorImportantes from "./ContenedoresPanel/ContenedorImportantes";
import ContenedorTareas from "./ContenedoresPanel/ContenedorTareas";

function PanelHorario() {
  return (
    <div className="md:w-2/12 w-full h-full md:grid gap-3 m-3">
      <div>
        <button type="button" className={styles.boton}>
          <div className="w-12 h-12">
            <Image
              src="/img/agenda.svg"
              width={40}
              height={40}
              layout="responsive"
            />
          </div>
          <h2 className="text-5xl">MI AGENDA</h2>
        </button>
      </div>

      <ContenedorImportantes />
      <ContenedorFranjas />
      <ContenedorTareas />
    </div>
  );
}

export default PanelHorario;
