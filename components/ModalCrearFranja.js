import styles from "../styles/ModalCrearFranja.module.css"

function ModalCrearFranja({header, children}){
  return (          
      <div id="modal_crearfranja" className={`modal_crearfranja ${styles.modal_crearfranja}`}>
        <div id="contenedor_crearfranja" className={`contenedor_crearfranja ${styles.contenedor_crearfranja} font-bold flex flex-col items-center`}>            
            {header}
            
            {children}            
        </div>            
      </div> 
  )
}

export default ModalCrearFranja