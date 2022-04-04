import Link from "next/link";
import styles from "../styles/PanelAgenda.module.css";
import TablaSubtareas from "./Tablas/TablaSubtareas";
import styles_tarea from "../styles/ModalCrearTarea.module.css"
import styles_modtarea from "../styles/ModalModTarea.module.css"
import FormCrearTarea from "./FormCrearTarea";
import FormModificarTarea from "./FormModificarTarea";
import { formatearFechaDiaMesAnio } from "../services/date.service";

function PanelTarea({ tareaSeleccionada, setTareaSeleccionada, setListaTareas, listaTareas }) {
  const obtenerFechaEntrega = () => {
    if (!tareaSeleccionada) return '';
    return formatearFechaDiaMesAnio(tareaSeleccionada.fecha_entrega.toDate());
  }
  const abrirCerrarCrearTarea = () => {
    if (
      document.getElementById("modal_creartarea").style.visibility != "visible"
    ) {
      document.getElementById("contenedor_creartarea").style.transform =
        "translateY(0%)";
      document.getElementById("modal_creartarea").style.visibility = "visible";
      document.getElementById("modal_creartarea").style.opacity = "1";
      document.getElementById("btn_creartarea").checked = true;
    } else {
      document.getElementById("contenedor_creartarea").style.transform =
        "translateY(-30%)";
      document.getElementById("modal_creartarea").style.visibility = "hidden";
      document.getElementById("modal_creartarea").style.opacity = "0";
      document.getElementById("btn_creartarea").checked = false;
    }
  };

  const abrirCerrarModTarea = () => {
    if (
      document.getElementById("modal_modtarea").style.visibility !== "visible"
    ) {
      document.getElementById("contenedor_modtarea").style.transform =
        "translateY(0%)";
      document.getElementById("modal_modtarea").style.visibility = "visible";
      document.getElementById("modal_modtarea").style.opacity = "1";
      document.getElementById("btn_modtarea").checked = true;
    } else {
      document.getElementById("contenedor_modtarea").style.transform =
        "translateY(-30%)";
      document.getElementById("modal_modtarea").style.visibility = "hidden";
      document.getElementById("modal_modtarea").style.opacity = "0";
      document.getElementById("btn_modtarea").checked = false;
    }
  };
  return (
    <div className=" lg:w-1/2  grid gap-3 md:m-3">
      <Link href="/horario">
        <div className="lg:place-self-end ">
          <button type="button" className={`${styles.boton}`}>
            <div className="md:w-12 md:h-12 w-10 h-10">
              <img
                src="/img/calendar/calendar-blank.png"
                width={50}
                height={50}
                layout="responsive"
              />
            </div>
            <h2 className="lg:text-5xl text-4xl whitespace-nowrap">
              MI CALENDARIO
            </h2>
          </button>
        </div>
      </Link>
      <div className={`${styles.container} `}>
        <h1 className="lg:text-6xl text-4xl font-bold text-center mb-1">
          Titulo tarea: {tareaSeleccionada?.nombre}
        </h1>
        <section className="flex">
          <h3 className="2xl:w-1/6 lg:1/4 w-1/2">Descripción:</h3>
          <textarea
            className="overflow-y-auto 2xl:w-5/6 lg:3/4 w-full h-full text-2xl disabled:bg-white resize-none"
            disabled
            value={tareaSeleccionada ? tareaSeleccionada.descripcion : ''}
          />
        </section>
        <section className="xl:flex xl:gap-4 grid items-center">
          <h3>Dificultad:</h3>
          <input className=" h-10 xl:w-full"
            value={tareaSeleccionada ? tareaSeleccionada.dificultad : ''} disabled />
          <h3>Tipo:</h3>
          <input className=" h-10 xl:w-full"
            value={tareaSeleccionada ? tareaSeleccionada.tipo : ''} disabled />
        </section>

        <section className="xl:flex xl:gap-4 grid items-center">
          <h3>Entrega:</h3>
          <input className=" h-10 xl:w-full"
            value={obtenerFechaEntrega()} disabled />
        </section>
      </div>
      <div className={`${styles.contenedor} flex items-center`}>
        <input
          type="checkbox"
          id="btn_creartarea"
          onClick={abrirCerrarCrearTarea}
          className={`${styles_tarea.btn_creartarea}`}
        />
        <label htmlFor="btn_creartarea" className={`lbl_creartarea hover:cursor-pointer ${styles.botonTareas} ${styles.lbl_creartarea}`}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <img
              src="/img/book/book-plus.png"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <h2 className="xl:text-5xl text-[0]  whitespace-nowrap">AÑADIR</h2>
        </label>
        <FormCrearTarea />

        <input
          type="checkbox"
          id="btn_modtarea"
          onClick={abrirCerrarModTarea}
          className={`${styles_modtarea.btn_modtarea}`}
        />
        <label htmlFor="btn_modtarea" className={`lbl_modificartarea hover:cursor-pointer ${styles.botonTareas} ${styles.lbl_modificartarea}`}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <img
              src="/img/book/book-edit.png"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <a className="xl:text-5xl text-[0] whitespace-nowrap"
          >MODIFICAR</a>
        </label>
        <FormModificarTarea tareaSeleccionada={tareaSeleccionada}
          setTareaSeleccionada={setTareaSeleccionada} setListaTareas={setListaTareas}
          listaTareas={listaTareas} />

        <button type="button" className={styles.botonTareas}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <img
              src="/img/book/book-remove.png"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <h2 className="xl:text-5xl text-[0] whitespace-nowrap">ELIMINAR</h2>
        </button>
      </div>
    </div>
  );
}

export default PanelTarea;
