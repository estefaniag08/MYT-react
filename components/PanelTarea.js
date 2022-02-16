import Link from "next/link";
import Image from "next/image";
import styles from "../styles/PanelAgenda.module.css";
import TablaSubtareas from "./Tablas/TablaSubtareas";

function PanelTarea() {
  return (
    <div className=" lg:w-1/2  grid gap-3 md:m-3">
      <Link href="/horario">
        <div className="lg:place-self-end ">
          <button type="button" className={`${styles.boton}`}>
            <div className="md:w-12 md:h-12 w-10 h-10">
              <Image
                src="/img/calendar/calendar-blank.png"
                width={40}
                height={40}
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
          Titulo tarea: fefefeef
        </h1>
        <section className="flex">
          <h3 className="2xl:w-1/6 lg:1/4 w-1/2">Descripción:</h3>
          <textarea
            className="overflow-y-auto 2xl:w-5/6 lg:3/4 w-full h-full text-2xl disabled:bg-white resize-none"
            disabled
          ></textarea>
        </section>
        <section className="xl:flex xl:gap-4 grid items-center">
          <h3>Dificultad:</h3>
          <input className=" h-10 xl:w-full" />
          <h3>Tipo:</h3>
          <input className=" h-10 xl:w-full" />
        </section>
        <section className="xl:flex grid items-start">
          <h3>Subtareas:</h3>
          <div className="overflow-y-auto lg:h-44 h-20 w-full">
            <TablaSubtareas />
          </div>
        </section>
        <section className="xl:flex xl:gap-4 grid items-center">
          <h3>Entrega:</h3>
          <input className=" h-10 xl:w-full" />
        </section>
      </div>
      <div className={`${styles.contenedor} flex items-center`}>
        <button type="button" className={styles.botonTareas}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <Image
              src="/img/book/book-plus.png"
              width={40}
              height={40}
              layout="responsive"
            />
          </div>
          <h2 className="xl:text-5xl text-[0]  whitespace-nowrap">AÑADIR</h2>
        </button>
        <button type="button" className={styles.botonTareas}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <Image
              src="/img/book/book-edit.png"
              width={40}
              height={40}
              layout="responsive"
            />
          </div>
          <h2 className="xl:text-5xl text-[0] whitespace-nowrap">MODIFICAR</h2>
        </button>
        <button type="button" className={styles.botonTareas}>
          <div className="md:w-12 md:h-12 w-10 h-10">
            <Image
              src="/img/book/book-remove.png"
              width={40}
              height={40}
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
