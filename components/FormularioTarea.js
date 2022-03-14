import styles from "../styles/ModalCrearTarea.module.css"
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';

function FormularioTarea(){
  const initialValues = {
    nombreTarea: "",
    descripcionTarea: "",
    dificultadTarea: "",
    tipoTarea: "",
    fechaEntrega: "",
    horaEntrega: "",

  }

  const userSchema = yup.object().shape({
    nombreTarea: yup.string().required("Nombre de tarea requerido"),
    descripcionTarea: yup.string().required("Descripción de la tarea requerida"),
    dificultadTarea: yup.string().required("Dificultad requerida"),
    tipoTarea: yup.string().required("Tipo requerido"),
    fechaEntrega: yup.string().required("Fecha de entrega requerida"),
    horaEntrega: yup.string().required("hora de entrega requerida")

  })
  return (  
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={values =>{
        console.log(values)
      }}
       
    >
      {(formik) => {
        return (                    
          <Form>
            <div class="contenido" className={`${styles.contenido_creartarea} grid grid-cols-1  text-center`}>

              <h1 className={`${styles.h1} text-4xl text-center col-span-4 inset-1/2`}> información general tarea</h1>
              
              <div className=" grid grid-cols-2 grid-rows-[37px_minmax(20px,_37px)_37px] sm:grid-rows-[60px_minmax(10px,_35px)_0px] gap-0  items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
                <h3 className={`${styles.p} text-black `}> nombre:</h3>            
                <TextField 
                  type="text"
                  name="nombreTarea"
                  id="nombreTarea" 
                  className=" bg-white text-xl h-5 sm:w-24 sm:h-8" />          
                <h3 className="  text-black ">dificultad:</h3>
                <TextField 
                  type="text"
                  name="dificultadTarea" 
                  id="dificultadTarea"
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
                <h3 className=" text-black ">descripción:</h3>
                <TextField 
                  type="text"
                  name="descripcionTarea"
                  id="descripcionTarea" 
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
                <h3 className=" text-black ">tipo:</h3>
                <TextField 
                  type="text"
                  name="tipoTarea"
                  id="tipoTarea" 
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
              </div>
                            
              <h1 className={`${styles.h1} pt-3 text-4xl  col-span-4 inset-1/2`}> Entrega</h1>
              
              <div className=" grid grid-cols-2 pb-0 grid-rows-[37px_minmax(20px,_37px)_0px] sm:grid-rows-[60px_minmax(10px,_35px)_0px] gap-0 flex-wrap items-center text-2xl sm:grid-cols-4 sm:text-3xl">
                <h3 className=" text-black ">fecha:</h3>
                <TextField 
                  type="date"
                  name="fechaEntrega" 
                  id="fechaEntrega"
                  className="bg-white  text-xl h-5 sm:w-32 sm:h-8" />
                <h3 className=" text-black ">hora:</h3>
                <TextField 
                  type="time"
                  name="horaEntrega"
                  id="horaEntrega" 
                  className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
              </div>

              <h1 className={`${styles.h1} text-4xl  col-span-4 inset-1/2`}> Tarea General</h1>

              <div className=" grid grid-cols-2 gap-5 items-center text-2xl sm:text-3xl">
                <h3 className=" text-black text-right leading-5 sm:leading-6">Seleccionar tarea general:</h3>
                <input type="text" className="bg-white text-xl h-5 sm:w-24 sm:h-8" />
              </div>            
            </div> 
            <input
              type="submit"
              value={"AÑADIR"}
              className="bg-white font-bold text-4xl p-1 w-24 mt-[470px]"
            />
            <input
              type="reset"
              value={"reset"}
              className="bg-white font-bold text-4xl ml-5 p-1 w-24 mt-[470px]"
            />         
          </Form>
              
        );
      }}
    </Formik>     
  )
}

export default FormularioTarea