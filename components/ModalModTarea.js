import styles from "../styles/ModalModTarea.module.css"

function ModalModTarea({header, children}){
  return (          
      <div class="modal_modtarea" className={`${styles.modal_modtarea}`}>
        <div class="contenedor_modtarea" className={`${styles.contenedor_modtarea} font-bold flex flex-col items-center`}>            
            {header}            
            {children}
            
        </div>            
      </div> 
  )
}

export default ModalModTarea