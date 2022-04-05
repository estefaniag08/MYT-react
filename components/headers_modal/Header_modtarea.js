import styles from "../../styles/ModalModTarea.module.css"

function HeaderModTarea(){
  return (                
    <>
      <header className={`${styles.header} text-5xl`}> modificar tarea</header>
      <label for="btn_modtarea" >X</label>
    </> 
  )
}

export default HeaderModTarea