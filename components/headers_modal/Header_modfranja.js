import styles from "../../styles/ModalModFranja.module.css"

function HeaderModFranja(){
  return (  
    <>
        <header className={`${styles.header} text-5xl`}> modificar franja</header>
        <label for="btn_modfranja" >X</label>
    </>              
  )
}

export default HeaderModFranja