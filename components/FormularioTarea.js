import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import styles from "../styles/ModalCrearTarea.module.css";
import * as yup from "yup";
import { ErrorMessage, Formik, Form } from "formik";
import { TextField } from "./TextField";
import { useEffect, useState } from "react";

function FormularioTarea({ idTarea }) {
  const [initialValues, setInitialValues] = useState({
    nombreTarea: "",
    descripcionTarea: "",
    dificultadTarea: "",
    tipoTarea: "",
    fechaEntrega: "",
    horaEntrega: "",
  });
  useEffect(() => {}, [idTarea]);

  const usuario = localStorage.getItem("IdUser") //"vMCIp2NBOORMJhVcw9HV"; //Como prueba

  const userSchema = yup.object().shape({
    nombreTarea: yup.string().required("Nombre de tarea requerido"),
    descripcionTarea: yup
      .string()
      .required("Descripción de la tarea requerida"),
    dificultadTarea: yup.string().required("Dificultad requerida"),
    tipoTarea: yup.string().required("Tipo requerido"),
    fechaEntrega: yup.string().required("Fecha de entrega requerida"),
    horaEntrega: yup.string().required("hora de entrega requerida"),
  });

  const handleSubmit = async (values) => {
var opcion = confirm("Estas seguro de que los campos están correctos ?")
    if (opcion == true){
const arregloFecha = values.fechaEntrega.split("-")
    const fechaFormateada = new Date(arregloFecha[0], Number(arregloFecha[1])-1, arregloFecha[2]);
    const arregloHora = values.horaEntrega.split(":");
    const stringHora = `${arregloHora[0]}${arregloHora[1]}`
    const tarea = {
      activo: true,
      descripcion: values.descripcionTarea,
      dificultad: values.dificultadTarea,
      estado: "sin iniciar",
      fecha_entrega: fechaFormateada,
      horaEntrega: Number(stringHora),
      nombre: values.nombreTarea, 
      tipo: values.tipoTarea
    };
    if (idTarea) {
      //Si es modificacion
      try{
          const tareaUsuarioId = doc(
            firestore,
            `tareas/${usuario}/tarea`,
            idTarea
          )
          await updateDoc(tareaUsuarioId, tarea);
      }catch(error){
        console.error(error);
      }
    } else {
      //Si es añadir
      try {
        const tareasUsuario = collection(firestore, `tareas/${usuario}/tarea`);
        const result = await addDoc(tareasUsuario, tarea);
        console.log(result);
      } catch (error) {
        console.log(error);
      }
    }
    //ACÁ SE DEBE DE CERRAR EL MODAL
 if (document.getElementById("modal_creartarea").style.visibility == "visible"){
        document.getElementById("contenedor_creartarea").transform = "translateY(-30%)"
        document.getElementById("modal_creartarea").style.visibility = "hidden"
        document.getElementById("modal_creartarea").style.opacity = "0"
        document.getElementById("btn_creartarea").checked = false
      }
      // CERRANDO MODAL DE MODIFICAR FRANJA
      if (document.getElementById("modal_modtarea").style.visibility == "visible"){
        document.getElementById("contenedor_modtarea").transform = "translateY(-30%)"
        document.getElementById("modal_modtarea").style.visibility = "hidden"
        document.getElementById("modal_modtarea").style.opacity = "0"
        document.getElementById("btn_modtarea").checked = false
      }
    }    
  };
  return (
    <Formik
      initialValues={initialValues}
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
            <div class="contenido" className={`${styles.contenido_creartarea} grid grid-cols-1  text-center`}>

              <h1 className={`${styles.h1} text-4xl text-center col-span-4 inset-1/2`}> información general tarea</h1>
              
              <div className=" grid grid-cols-2 gap-0  items-center text-2xl sm:grid-cols-4 sm:gap-2 sm:text-3xl">
                <h3 className={`${styles.p} text-black mb-2 sm:mb-5`}> nombre:</h3>            
                <TextField 
                  type="text"
                  name="nombreTarea"
                  id="nombreTarea" 
                  aria-label="campo de nombre de tarea"
                  className=" bg-white text-xl h-5 sm:w-24 sm:h-8" />          
                <h3 className="  text-black mb-2 sm:mb-5">dificultad:</h3>
                <TextField 
                  type="text"
                  name="dificultadTarea"
                  id="dificultadTarea"
                  aria-label="campo de dificultad de tarea"
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />                
                <h3 className=" text-black mb-2 sm:mb-5">descripción:</h3>
                <TextField 
                  type="text"
                  name="descripcionTarea"
                  id="descripcionTarea" 
                  aria-label="campo de descripción de tarea"
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
                <h3 className=" text-black mb-2 sm:mb-5">tipo:</h3>
                <TextField 
                  type="text"
                  name="tipoTarea"
                  id="tipoTarea" 
                  aria-label="campo de tipo de tarea"
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />                
              </div>
                            
              <h1 className={`${styles.h1} pt-3 text-4xl  col-span-4 inset-1/2`}> Entrega</h1>
              
              <div className=" grid grid-cols-2 pb-0 gap-0 flex-wrap items-center text-2xl sm:grid-cols-4 sm:text-3xl">
                <h3 className=" text-black sm:mb-5">fecha:</h3>
                <TextField 
                  type="date"
                  name="fechaEntrega" 
                  id="fechaEntrega"  
                  aria-label="campo de fecha de entrega de tarea"                
                  className="bg-white  text-xl h-5 sm:w-32 sm:h-8" />
                <h3 className=" text-black sm:mb-5">hora:</h3>
                <TextField 
                  type="time"
                  name="horaEntrega"
                  id="horaEntrega"    
                  aria-label="campo de hora de entrega de tarea"               
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />                
              </div>
                          
            </div> 
            <input
              type="submit"
              value={"AÑADIR"}
              className="bg-white font-bold text-4xl p-1 w-24 mt-[470px] hover:cursor-pointer"
            />
          </Form>
        );
      }}
    </Formik>
  );
}

export default FormularioTarea;
