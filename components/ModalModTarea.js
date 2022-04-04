import styles from "../styles/ModalModTarea.module.css"

function ModalModTarea({header, children}){
  return (          
      <div id="modal_modtarea" className={`modal_modtarea ${styles.modal_modtarea}`}>
        <div id="contenedor_modtarea" className={`contenedor_modtarea ${styles.contenedor_modtarea} font-bold flex flex-col items-center`}>            
            {header}            
            {children}
            
        </div>            
      </div> 
  )
}

export default ModalModTarea