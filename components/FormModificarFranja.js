import ModalModFranja from "./ModalModFranja";
import FormularioFranja from "./FormularioFranja";
import HeaderModFranja from "./headers_modal/Header_modfranja";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { useState, useEffect } from "react";

function FormModificarFranja({ idFranja }) {
  const [datosFranja, setDatosFranja] = useState({});
  const usuario = localStorage.getItem("IdUser") // "vMCIp2NBOORMJhVcw9HV"; //Como prueba  
  useEffect(() => {
    if (idFranja) {
      //alert("id de la franja a editar: " + idFranja + "id usuario: "+ usuario)      
      console.log("Entra useEffect")
      const franjaEditar = doc(
        firestore,
        `franjas/${usuario}/franja`,
        idFranja
      );      
      const obtenerDocumento = async () => {
        const franjaEditarDatos = await getDoc(franjaEditar);
        setDatosFranja({
          nombreFranja: franjaEditarDatos.data().nombre,
          tipoFranja: franjaEditarDatos.data().tipo,
          descripcionFranja: franjaEditarDatos.data().descripcion,
          horaInicio: franjaEditarDatos.data().hora_inicio,
          horaFinal: franjaEditarDatos.data().hora_final,
          frecuencia:franjaEditarDatos.data().frecuencia
        });
        console.log("formModificarFranja", datosFranja);
        //alert("HACIENDO LA CONSULTA DEL REGISTRO ... DATOS: " + datosFranja.nombreFranja)
      };
      obtenerDocumento();      
    }
  }, [idFranja]);

  return (
    <>
      <ModalModFranja>
        <HeaderModFranja />
        <FormularioFranja idFranja={idFranja} datosFranja={datosFranja} />
      </ModalModFranja>
    </>
  );
}

export default FormModificarFranja;
