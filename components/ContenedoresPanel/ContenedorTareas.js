import Image from "next/image";

import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";

function ContenedorTareas() {
  return (
    <div className={`flex-col gap-3 ${styles.contenedor}`}>
    <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Tareas</h1>
    <div className="gap-3 flex items-center justify-center">
      <button className={`text-4xl p-2 ${styles.boton}`}>
      <div className="w-8 h-8">
            <Image
              src="/img/book/book-plus.png"
              width={32}
              height={30}
              layout="responsive"
            />
      </div>     
      </button>
      <button className={`text-4xl p-2 ${styles.boton}`}>
      <div className="w-8 h-8">
            <Image
              src="/img/book/book-edit.png"
              width={32}
              height={30}
              layout="responsive"
            />
      </div>   
      </button>
      <button className={`text-4xl p-2 ${styles.boton}`}>
      <div className="w-8 h-8">
            <Image
              src="/img/book/book-remove.png"
              width={32}
              height={30}
              layout="responsive"
            />
      </div>   
      </button>
    </div>
  </div>
  );
}

export default ContenedorTareas;
