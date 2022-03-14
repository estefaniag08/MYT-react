import ModalModFranja from "./ModalModFranja";
import FormularioFranja from "./FormularioFranja";
import HeaderModFranja from "./headers_modal/Header_modfranja";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import { useState, useEffect } from "react";

function FormModificarFranja({ idFranja }) {
  const [datosFranja, setDatosFranja] = useState({});
  const usuario = "vMCIp2NBOORMJhVcw9HV"; //Como prueba
  useEffect(() => {
    if (idFranja) {
      console.log("Entra useEffect")
      const franjaEditar = doc(
        firestore,
        `franjas/${usuario}/franja`,
        idFranja
      );
      const obtenerDocumento = async () => {
        const franjaEditarDatos = await getDoc(franjaEditar);
        setDatosFranja({
          nombreFranja: franjaEditarDatos.nombre,
          tipoFranja: franjaEditarDatos.tipo,
          descripcionFranja: franjaEditarDatos.descripcion,
          horaInicio: franjaEditarDatos.hora_inicio,
          horaFinal: franjaEditarDatos.hora_final,
        });
        console.log(franjaEditarDatos);
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
