
import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";
import FormularioTarea from "../FormularioTarea";
import FormModificarTarea from "../FormModificarTarea";
import styles_tarea from "../../styles/FormTarea.module.css"
import styles_modtarea from "../../styles/FormModTarea.module.css"

function ContenedorTareas() {
  return (
    <div className={`flex-col gap-3 ${styles.contenedor}`}>
    <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Tareas</h1>
    <div className="gap-3 flex items-center justify-center">


      <input type="checkbox" id="btn_creartarea" className={`${styles_tarea.btn_creartarea}`} />
      <label for="btn_creartarea" class="lbl_creartarea" className={`text-4xl p-2 ${styles.boton} ${styles.lbl_creartarea}`}>      
        <div className="w-8 h-8">
              <img
                src="/img/book/book-plus.png"
                width={32}
                height={30}
                layout="responsive"
              />
        </div>     
      </label>
      <FormularioTarea />

      <input type="checkbox" id="btn_modificartarea" className={`${styles_modtarea.btn_modificartarea}`} />
      <label for="btn_modificartarea" class="lbl_modificartarea" className={`text-4xl p-2 ${styles.boton} ${styles.lbl_modificartarea}`}>
      
        <div className="w-8 h-8">
              <img
                src="/img/book/book-edit.png"
                width={32}
                height={30}
                layout="responsive"
              />
        </div>   
      </label>
      <FormModificarTarea />

      <button className={`text-4xl p-2 ${styles.boton}`}>
      <div className="w-8 h-8">
            <img
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
