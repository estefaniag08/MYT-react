import styles from "../../styles/ContenedoresPanel/ContenedorTareasFranjas.module.css";
import FormModificarFranja from "../FormModificarFranja";
import styles_franja from "../../styles/ModalCrearFranja.module.css";
import styles_modfranja from "../../styles/ModalModFranja.module.css";
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore";
import { firestore } from "../../firebase/clientApp";
import FormCrearFranja from "../FormCrearFranja";

function ContenedorFranjas({ setFranja, idFranja }) {
  const abrirCerrarCrearFranja = () => {
    if (
      document.getElementById("modal_crearfranja").style.visibility != "visible"
    ) {
      document.getElementById("contenedor_crearfranja").style.transform =
        "translateY(0%)";
      document.getElementById("modal_crearfranja").style.visibility = "visible";
      document.getElementById("modal_crearfranja").style.opacity = "1";
      document.getElementById("btn_crearfranja").checked = true;
    } else {
      document.getElementById("contenedor_crearfranja").style.transform =
        "translateY(-30%)";
      document.getElementById("modal_crearfranja").style.visibility = "hidden";
      document.getElementById("modal_crearfranja").style.opacity = "0";
      document.getElementById("btn_crearfranja").checked = false;
    }
  };

  const abrirCerrarModFranja = () => {
    if (
      document.getElementById("modal_modfranja").style.visibility != "visible"
    ) {
      document.getElementById("contenedor_modfranja").style.transform =
        "translateY(0%)";
      document.getElementById("modal_modfranja").style.visibility = "visible";
      document.getElementById("modal_modfranja").style.opacity = "1";
      document.getElementById("btn_modfranja").checked = true;
    } else {
      document.getElementById("contenedor_modfranja").style.transform =
        "translateY(-30%)";
      document.getElementById("modal_modfranja").style.visibility = "hidden";
      document.getElementById("modal_modfranja").style.opacity = "0";
      document.getElementById("btn_modfranja").checked = false;
    }
  };
  const eliminarFranja = async () => {      
    if (idFranja) {   
      var opcion = confirm("¿Estás seguro de que desea eliminar la franja seleccionada? ")
      //alert("id franja : " + idFranja)  
      if (opcion === true){
        const usuario = localStorage.getItem("IdUser");         
        const franjaEditar = doc(
          firestore,
          `franjas/${usuario}/franja`,
          idFranja
        );            
        const franjaEditarDatos = await getDoc(franjaEditar);
        const franja = {
          activo: false,
          descripcion: franjaEditarDatos.data().descripcion,
          frecuencia: franjaEditarDatos.data().frecuencia,
          hora_final: franjaEditarDatos.data().hora_final,
          hora_inicio: franjaEditarDatos.data().hora_inicio,        
          nombre: franjaEditarDatos.data().nombre,
          tipo: franjaEditarDatos.data().tipo                                
        }                                                                 
        try {
          const franjaUsuarioId = doc(
            firestore,
            `franjas/${usuario}/franja`,
            idFranja
          );
          await updateDoc(franjaUsuarioId, franja);
          //alert("despues de eliminar franja ...")
        } catch (error) {
          console.error(error);
        }
      }      
    } else {
      alert("No se ha seleccionado una franja para eliminar.")
    }
  }
  return (
    <div
      className={`flex-col gap-3 justify-center items-center ${styles.contenedor}`}
    >
      <h1 className={`text-5xl w-3/6 mb-2 ${styles.texto}`}>Franjas</h1>
      <div className="flex gap-3 items-center justify-center">
        <input
          type="checkbox"
          id="btn_crearfranja"
          onClick={() => {
            setFranja(null);
            abrirCerrarCrearFranja();
          }}

          className={`${styles_franja.btn_crearfranja} ${styles_franja.botonIcono}`}
        />
        <label
          htmlFor="btn_crearfranja"          
          className={`lbl_crearfranja hover:cursor-pointer text-4xl p-2 ${styles.lbl_crearfranja} ${styles.boton} `}
        >
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-plus.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </label>
        <FormCrearFranja />

        <input
          type="checkbox"
          id="btn_modfranja"
          onClick={abrirCerrarModFranja}
          className={`${styles_modfranja.btn_modfranja}`}
        />
        <label
          htmlFor="btn_modfranja"          
          className={`lbl_modfranja hover:cursor-pointer text-4xl p-2 ${styles.boton} ${styles.lbl_modificarfranja}`}
        >
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-edit.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </label>
        <FormModificarFranja idFranja={idFranja} />

        <button onClick={eliminarFranja} className={`text-4xl p-2 ${styles.boton}`}>
          <div className="w-8 h-8">
            <img
              src="/img/calendar/calendar-remove.png"
              width={32}
              height={30}
              layout="responsive"
            />
          </div>
        </button>
      </div>
    </div>
  );
}

export default ContenedorFranjas;
