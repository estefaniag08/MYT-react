import styles from "../styles/ModalCrearTarea.module.css"

function ModalCrearTarea({header, children, boton}){
  return (          
      <div class="modal_creartarea" className={`${styles.modal_creartarea}`}>
        <div class="contenedor_creartarea" className={`${styles.contenedor_creartarea} font-bold flex flex-col items-center`}>            
            {header}
            
            {children}
            {boton}
        </div>            
      </div> 
  )
}

export default ModalCrearTarea