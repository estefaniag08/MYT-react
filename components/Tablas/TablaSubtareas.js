import styles from "../../styles/TablaSubtareas.module.css";
function TablaSubtareas() {
  return (
    <table className="flex">
      
       <tbody  className={`${styles.columna} border-solid border-2 border-white w-full`}>
          <tr className={styles.cell}><td>Subtarea 1</td></tr>
          <tr className={styles.cell}><td>Subtarea 2</td></tr>
          <tr className={styles.cell}><td>Subtarea 3</td></tr>
          <tr className={styles.cell}><td>Subtarea 4</td></tr>
          <tr className={styles.cell}><td>Subtarea 5</td></tr>
          <tr className={styles.cell}><td>Subtarea 6</td></tr>

       </tbody>

    </table>
  );
}

export default TablaSubtareas;
