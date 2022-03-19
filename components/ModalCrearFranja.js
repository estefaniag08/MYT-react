import styles from "../styles/ModalCrearFranja.module.css"

function ModalCrearFranja({header, children}){
  return (          
      <div class="modal_crearfranja" id="modal_crearfranja" className={`${styles.modal_crearfranja}`}>
        <div class="contenedor_crearfranja" id="contenedor_crearfranja" className={`${styles.contenedor_crearfranja} font-bold flex flex-col items-center`}>            
            {header}
            
            {children}            
        </div>            
      </div> 
  )
}

export default ModalCrearFranja