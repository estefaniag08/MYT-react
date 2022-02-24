import styles from "../styles/FormFranja.module.css"

function Modal({header, children, boton}){
  return (          
      <div class="modal_crearfranja" className={`${styles.modal_crearfranja}`}>
        <div class="contenedor_franja" className={`${styles.contenedor_franja} font-bold flex flex-col items-center`}>            
            {header}
            <label for="btn_crearfranja" >X</label>
            {children}
            {boton}
        </div>            
      </div> 
  )
}

export default Modal