
import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";
import FormModificarFranja from "../FormModificarFranja";
import styles_franja from "../../styles/ModalCrearFranja.module.css"
import styles_modfranja from  "../../styles/ModalModFranja.module.css"

import FormCrearFranja from "../FormCrearFranja";


function ContenedorFranjas({setFranja, idFranja}) {
 const abrirCerrarCrearFranja = () =>{
    if (document.getElementById("modal_crearfranja").style.visibility == "hidden"){
      document.getElementById("contenedor_crearfranja").style.transform = "translateY(0%)"
      document.getElementById("modal_crearfranja").style.visibility = "visible"
      document.getElementById("modal_crearfranja").style.opacity = "1"
      document.getElementById("btn_crearfranja").checked = true      
    }else {
      document.getElementById("contenedor_crearfranja").style.transform = "translateY(-30%)"
      document.getElementById("modal_crearfranja").style.visibility = "hidden"
      document.getElementById("modal_crearfranja").style.opacity = "0"
      document.getElementById("btn_crearfranja").checked = false      
    }
  }

  return (
    <div
      className={`flex-col gap-3 justify-center items-center ${styles.contenedor}`}
    >
      <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Franjas</h1>
      <div className="flex gap-3 items-center justify-center">        
        
        <input type="checkbox" id="btn_crearfranja" onClick={()=> {setFranja(null);abrirCerrarCrearFranja();}} id="btn_crearfranja"  className={`${styles_franja.btn_crearfranja} ${styles_franja.botonIcono}`} />
        <label for="btn_crearfranja" class="lbl_crearfranja" className={`text-4xl p-2 ${styles.lbl_crearfranja} ${styles.boton} `}>
        
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-plus.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </label>
        <FormCrearFranja />

        <input type="checkbox" id="btn_modfranja" className={`${styles_modfranja.btn_modfranja}`} />
        <label for="btn_modfranja" class="lbl_modfranja" className={`text-4xl p-2 ${styles.boton} ${styles.lbl_modificarfranja}`}>
        
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-edit.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </label>
        <FormModificarFranja idFranja={idFranja} /> 

        <button className={`text-4xl p-2 ${styles.boton}`}>
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-remove.png"
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

export default ContenedorFranjas;
