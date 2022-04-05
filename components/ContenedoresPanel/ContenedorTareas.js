
import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";
import FormCrearTarea from "../FormCrearTarea";
import FormModificarTarea from "../FormModificarTarea";
import styles_tarea from "../../styles/ModalCrearTarea.module.css"
import styles_modtarea from "../../styles/ModalModTarea.module.css"


function ContenedorTareas() {
  const abrirCerrarModalTarea = () =>{
    if (document.getElementById("modal_creartarea").style.visibility == "hidden"){
      document.getElementById("contenedor_creartarea").style.transform = "translateY(0%)"
      document.getElementById("modal_creartarea").style.visibility = "visible"
      document.getElementById("modal_creartarea").style.opacity = "1"
      document.getElementById("btn_creartarea").checked = true      
    }else {
      document.getElementById("contenedor_creartarea").style.transform = "translateY(-30%)"
      document.getElementById("modal_creartarea").style.visibility = "hidden"
      document.getElementById("modal_creartarea").style.opacity = "0"
      document.getElementById("btn_creartarea").checked = false      
    }
  }
  return (
    <div className={`flex-col gap-3 ${styles.contenedor}`}>
    <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Tareas</h1>
    <div className="gap-3 flex items-center justify-center bg-red-400">


      <input type="checkbox" onClick={abrirCerrarModalTarea} id="btn_creartarea" className={`${styles_tarea.btn_creartarea}`} />
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
      <FormCrearTarea />

      <input type="checkbox" id="btn_modtarea" className={`${styles_modtarea.btn_modtarea}`} />
      <label for="btn_modtarea" class="lbl_modtarea" className={`text-4xl p-2 ${styles.boton} ${styles.lbl_modificartarea}`}>
      
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
