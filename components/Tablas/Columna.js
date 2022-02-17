import styles from "../../styles/TablaHorario.module.css";
function Columna({ stylesFather, cellOdd, cellEven }) {
  return (
    <td className={`${stylesFather} `}>
      <tr className={`${cellEven} ${styles.cell}`}>0</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>1</tr>
      <tr className={`${cellEven} ${styles.cell}`}>2</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>3</tr>
      <tr className={`${cellEven} ${styles.cell} `}>4</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>5</tr>
      <tr className={`${cellEven} ${styles.cell}`}>6</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>7</tr>
      <tr className={`${cellEven} ${styles.cell}`}>8</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>9</tr>
      <tr className={`${cellEven} ${styles.cell}`}>10</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>11</tr>
      <tr className={`${cellEven} ${styles.cell}`}>12</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>13</tr>
      <tr className={`${cellEven} ${styles.cell}`}>14</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>15</tr>
      <tr className={`${cellEven} ${styles.cell}`}>16</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>17</tr>
      <tr className={`${cellEven} ${styles.cell}`}>18</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>19</tr>
      <tr className={`${cellEven} ${styles.cell}`}>20</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>21</tr>
      <tr className={`${cellEven} ${styles.cell}`}>22</tr>
      <tr className={`${cellOdd} ${styles.cell}`}>23</tr>
    </td>
  );
}

export default Columna;
