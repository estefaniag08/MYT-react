
import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";
import FormularioFranja from "../../components/FormularioFranja";
import FormModificarFranja from "../../components/FormModificarFranja";
import styles_franja from "../../styles/FormFranja.module.css"
import styles_modfranja from  "../../styles/FormModFranja.module.css"

function ContenedorFranjas() {
  return (
    <div
      className={`flex-col gap-3 justify-center items-center ${styles.contenedor}`}
    >
      <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Franjas</h1>
      <div className="flex gap-3 items-center justify-center">        
        
        <input type="checkbox" id="btn_crearfranja" className={`${styles_franja.btn_crearfranja}`} />
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
        <FormularioFranja />

        <input type="checkbox" id="btn_modificarfranja" className={`${styles_modfranja.btn_modificarfranja}`} />
        <label for="btn_modificarfranja" class="lbl_modificarfranja" className={`text-4xl p-2 ${styles.boton} ${styles.lbl_modificarfranja}`}>
        
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-edit.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </label>
        <FormModificarFranja />

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
