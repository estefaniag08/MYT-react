import styles from "../../styles/ModalCrearTarea.module.css"

function HeaderCrearTarea(){
  return (                
    <>
      <header className={`${styles.header} text-5xl`}> añadir tarea</header>
      <label for="btn_creartarea" >X</label>
    </> 
  )
}

export default HeaderCrearTarea