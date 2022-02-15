import styles from "../styles/PanelHorario.module.css";

function PanelHorario(){
  return (
    <>
      <button type="button" className={styles.boton}>MI AGENDA</button>
      <div>Contenedor importantes</div>
      <div>Contenedor franjas</div>
      <div>Contenedor tareas</div>
    </>
  )
}

export default PanelHorario