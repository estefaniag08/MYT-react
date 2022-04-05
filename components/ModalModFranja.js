import styles from "../styles/ModalModFranja.module.css"

function ModalModFranja({header, children}){
  return (          
      <div id="modal_modfranja" className={`modal_modfranja ${styles.modal_modfranja}`}>
        <div id="contenedor_modfranja" className={`contenedor_modfranja ${styles.contenedor_modfranja} font-bold flex flex-col items-center`}>            
            {header}            
            {children}
            
        </div>            
      </div> 
  )
}

export default ModalModFranja