import styles from "../styles/ModalCrearTarea.module.css"

function ModalCrearTarea({header, children, boton}){
  return (          
      <div id="modal_creartarea" className={`modal_creartarea ${styles.modal_creartarea}`}>
        <div id="contenedor_creartarea" className={`contenedor_creartarea ${styles.contenedor_creartarea} font-bold flex flex-col items-center`}>            
            {header}
            
            {children}
            {boton}
        </div>            
      </div> 
  )
}

export default ModalCrearTarea