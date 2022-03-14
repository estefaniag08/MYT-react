//import { doc, setDoc } from "@firebase/firestore";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import styles_modal from "../styles/ModalCrearFranja.module.css";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import { useEffect, useState } from "react";

function FormularioFranja({ idFranja, datosFranja }) {
  const [initialValues, setInitialValues] = useState({
    nombreFranja: "",
    tipoFranja: "",
    descripcionFranja: "",
    horaInicio: "",
    horaFinal: "",
  });
  const [arregloFrecuencias, setArregloFrecuencias] = useState([]);
  useEffect(()=>{
      if(idFranja){ //ESto no sirve aún
        setInitialValues({
          nombreFranja: datosFranja.nombreFranja,
          tipoFranja: datosFranja.tipoFranja,
          descripcionFranja: datosFranja.descripcionFranja,
          horaInicio: datosFranja.horaInicio,
          horaFinal: datosFranja.horaFinal,
        });
      } 
  },[idFranja])
  
  const usuario = "vMCIp2NBOORMJhVcw9HV"; //Como prueba
  
  const userSchema = yup.object().shape({
    nombreFranja: yup.string().required("Nombre de franja requerido"),
    tipoFranja: yup.string().required("Tipo de franja requerido"),
    descripcionFranja: yup.string().required("Descripción requerida"),
    horaInicio: yup.string().required("Hora de inicio de franja requerido"),
    horaFinal: yup.string().required("Hora final de franja requerido"),
  });

  const crearArregloFrecuencia = (event) => {
    //TODO Arreglar esto que no lo está haciendo bien, lo dejo así mientras
    const exists = arregloFrecuencias.indexOf(Number(event.target.name));
    const nuevoArreglo = [];
    if (exists === -1) {
      nuevoArreglo = arregloFrecuencias.map((value) => Number(value));
      nuevoArreglo.push(Number(event.target.name));
    } else {
      nuevoArreglo = arregloFrecuencias.filter(
        (value) => Number(value) !== Number(event.target.name)
      );
    }
    nuevoArreglo.sort();
    setArregloFrecuencias(nuevoArreglo);
    console.log(arregloFrecuencias);
  };

  const handleSubmit = async (values) => {
    const franja = {
      activo: true,
      descripcion: values.descripcionFranja,
      frecuencia: [...arregloFrecuencias],
      hora_final: Number(values.horaInicio),
      hora_inicio: Number(values.horaFinal),
      nombre: values.nombreFranja,
      tipo: values.tipoFranja,
    };
    if (idFranja) {
      //Modifica la franja
      try {
        const franjaUsuarioId = doc(
          firestore,
          `franjas/${usuario}/franja`,
          idFranja
        );
        await updateDoc(franjaUsuarioId, franja);
      } catch (error) {
        console.error(error);
      }
    } else {
      //Crea la franja
      const franjasUsuario = collection(firestore, `franjas/${usuario}/franja`);
      try {
        const result = await addDoc(franjasUsuario, franja);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
    //ACÁ SE DEBE DE CERRAR EL MODAL
  };

  return (
    <Formik
      initialValues={ initialValues }
      enableReinitialize={true}
      onSubmit={async (values, { resetForm }) => {
        await handleSubmit(values);
        resetForm();
      }}
      validationSchema={userSchema}
    >
      {(formik) => {
        return (
          <Form>
            <div
              class="contenido"
              className={`${styles_modal.contenido_crearfranja} font-bold grid grid-cols-1 text-center`}
            >
              <h1
                className={`${styles_modal.h1} text-center text-4xl col-span-4 inset-1/2`}
              >
                {" "}
                información general franja
              </h1>

              <div className=" text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
                <h3 className={`${styles_modal.p} `}> nombre:</h3>
                <TextField
                  type="text"
                  name="nombreFranja"
                  id="nombreFranja"
                  className=" bg-white  text-xl h-6 w-24 sm:h-8"
                />
                <h3 className="">tipo:</h3>
                <TextField
                  type="text"
                  name="tipoFranja"
                  id="tipoFranja"
                  className="bg-white  text-xl h-6 w-24 sm:h-8"
                />
                <h3>descripción:</h3>
                <TextField
                  type="text"
                  name="descripcionFranja"
                  id="descripcionFranja"
                  className="bg-white  text-xl h-6 w-24 sm:h-8"
                />
              </div>

              <h1
                className={`${styles_modal.h1} pt-5 text-4xl col-span-4 inset-1/2`}
              >
                {" "}
                frecuencia
              </h1>
              <div className="gap-3 flex items-center justify-center text-black text-2xl font-bold">
                <input
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full  hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                  type="button"
                  value={" D "}
                  name={7}
                  onClick={crearArregloFrecuencia}
                />
                <input
                  type="button"
                  value={" L "}
                  name={1}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />

                <input
                  type="button"
                  value={" M "}
                  name={2}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />
                <input
                  type="button"
                  value={" M "}
                  name={3}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />

                <input
                  type="button"
                  value={" J "}
                  name={4}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />
                <input
                  type="button"
                  value={" V "}
                  name={5}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />
                <input
                  type="button"
                  value={" S "}
                  name={6}
                  onClick={crearArregloFrecuencia}
                  className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"
                />
              </div>

              <h1
                className={`${styles_modal.h1} pt-5 text-4xl col-span-4 inset-1/2`}
              >
                {" "}
                Rango
              </h1>

              <div className="text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
                <h3 className="text-right ">hora inicio:</h3>
                <TextField
                  type="text"
                  name="horaInicio"
                  id="horaInicio"
                  className="bg-white text-xl h-6 w-24 sm:h-8"
                />
                <h3 className="text-right ">hora final:</h3>
                <TextField
                  type="text"
                  name="horaFinal"
                  id="horaFinal"
                  className="bg-white text-xl h-6 w-24 sm:h-8"
                />
              </div>
            </div>
            <input
              type="submit"
              value={idFranja ? "MODIFICAR": "AÑADIR"}
              className="bg-white font-bold text-4xl p-1 w-24 mt-[470px]"
            />
          </Form>
        );
      }}
    </Formik>
  );
}
export default FormularioFranja;
