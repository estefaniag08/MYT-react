import styles from "../../styles/ContenedoresPanel/ContenedorImportantes.module.css"
function ContenedorImportantes() {
  return (
    <div className={styles.contenedor}>
        <div className="text-4xl flex gap-4 items-center justify-center p-1">
            <button type="button" className="hover:font-bold">{"<"}</button>
            <h1>ENTREGAS ## NOV</h1>
            <button type="button" className="hover:font-bold">{">"}</button>
        </div>
        <div className="text-2xl grid items-center justify-center pb-4 whitespace-normal p-2">
            <h2>Tarea 1 - 10 AM</h2>
            <h2>Tarea 2 - 10 AM</h2>
            <h2>Tarea 3 - 10 AM</h2>
        </div>
    </div>
  )
}

export default ContenedorImportantes