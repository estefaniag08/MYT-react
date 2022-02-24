import styles from "../styles/FormModFranja.module.css"

function Modal2({header, children, boton}){
  return (          
      <div class="modal_modificarfranja" className={`${styles.modal_modificarfranja}`}>
        <div class="contenedor_modificarfranja" className={`${styles.contenedor_modificarfranja} font-bold flex flex-col items-center`}>            
            {header}
            <label for="btn_modificarfranja" >X</label>
            {children}
            {boton}
        </div>            
      </div> 
  )
}

export default Modal2