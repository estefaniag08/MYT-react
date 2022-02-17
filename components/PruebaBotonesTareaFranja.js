import FormularioTarea from "../components/FormularioTarea";
import FormularioFranja from "../components/FormularioFranja";
import FormModificarTarea from "./FormModificarTarea";
import FormModificarFranja from "./FormModificarFranja";
import styles from "../styles/FormTarea.module.css"
import styles_franja from "../styles/FormFranja.module.css"
import styles_modtarea from "../styles/FormModTarea.module.css"
import styles_modfranja from "../styles/FormModFranja.module.css"
function PruebaBotonesTareaFranja(){
    return (
      <body>
        <input type="checkbox" id="btn_creartarea" className={`${styles.btn_creartarea}`} />
        <label for="btn_creartarea" class="lbl_creartarea" className={`${styles.lbl_creartarea}`}>Crear tarea</label>

        <input type="checkbox" id="btn_crearfranja" className={`${styles_franja.btn_crearfranja}`} />
        <label for="btn_crearfranja" class="lbl_crearfranja" className={`${styles_franja.lbl_crearfranja}`}>Crear franja</label>

        <input type="checkbox" id="btn_modificartarea" className={`${styles_modtarea.btn_modificartarea}`} />
        <label for="btn_modificartarea" class="lbl_modificartarea" className={`${styles_modtarea.lbl_modificartarea}`}>modificar tarea</label>

        <input type="checkbox" id="btn_modificarfranja" className={`${styles_modfranja.btn_modificarfranja}`} />
        <label for="btn_modificarfranja" class="lbl_modificarfranja" className={`${styles_modfranja.lbl_modificarfranja}`}>modificar franja</label>
        <FormularioTarea />
        <FormularioFranja />
        <FormModificarTarea />
        <FormModificarFranja />
      </body>
    )
  }
  
  export default PruebaBotonesTareaFranja