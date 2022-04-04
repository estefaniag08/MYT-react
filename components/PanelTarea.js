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
        <input type="checkbox" id="btn_creartarea" className={`${styles_tarea.btn_creartarea}`} />
        <label for="btn_creartarea" class="lbl_creartarea" className={`${styles.botonTareas} ${styles.lbl_creartarea}`}>
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

        <input type="checkbox" id="btn_modtarea" className={`${styles_modtarea.btn_modtarea}`} />
        <label for="btn_modtarea"
          class="lbl_modificartarea" className={`${styles.botonTareas} ${styles.lbl_modificartarea}`}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <img
              src="/img/book/book-edit.png"
              width={50}
              height={50}
              layout="responsive"
            />
          </div>
          <a className="xl:text-5xl text-[0] whitespace-nowrap">MODIFICAR</a>
        </label>
        {tareaSeleccionada && <FormModificarTarea tareaSeleccionada={tareaSeleccionada}
          setTareaSeleccionada={setTareaSeleccionada} setListaTareas={setListaTareas}
          listaTareas={listaTareas} />}

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
