import styles from "../styles/ModalModFranja.module.css"

function ModalModFranja({header, children, boton}){
  return (          
      <div class="modal_modfranja" className={`${styles.modal_modfranja}`}>
        <div class="contenedor_modfranja" className={`${styles.contenedor_modfranja} font-bold flex flex-col items-center`}>            
            {header}            
            {children}
            {boton}
        </div>            
      </div> 
  )
}

export default ModalModFranja