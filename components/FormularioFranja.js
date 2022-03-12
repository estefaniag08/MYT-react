import styles_modal from "../styles/ModalCrearFranja.module.css"
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';

function FormularioFranja() {
  const initialValues = {
    nombreFranja: "",
    tipoFranja: "",
    descripcionFranja: "",
    horaInicio: "",
    horaFinal: ""
  }

  const userSchema = yup.object().shape({
    nombreFranja: yup.string().required("Nombre de franja requerido"),
    tipoFranja: yup.string().required("Tipo de franja requerido"),
    descripcionFranja: yup.string().required("Descripción requerida"),
    horaInicio: yup.string().required("Hora de inicio de franja requerido"),
    horaFinal: yup.string().required("Hora final de franja requerido")

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
            <div class="contenido" className={`${styles_modal.contenido_crearfranja} font-bold grid grid-cols-1 text-center`}>
              
              <h1 className={`${styles_modal.h1} text-center text-4xl col-span-4 inset-1/2`}> información general franja</h1>
              
              <div className=" text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
                <h3 className={`${styles_modal.p} `}> nombre:</h3>            
                <TextField 
                  type="text"
                  name="nombreFranja"
                  id="nombreFranja" 
                  className=" bg-white  text-xl h-6 w-24 sm:h-8" />          
                <h3 className="">tipo:</h3>
                <TextField 
                  type="text" 
                  name="tipoFranja"
                  id="tipoFranja"
                  className="bg-white  text-xl h-6 w-24 sm:h-8" />
                <h3>descripción:</h3>
                <TextField 
                  type="text" 
                  name="descripcionFranja"
                  id="descripcionFranja"
                  className="bg-white  text-xl h-6 w-24 sm:h-8" />              
              </div>
                            
              <h1 className={`${styles_modal.h1} pt-5 text-4xl col-span-4 inset-1/2`}> frecuencia</h1>
              
              <div className="gap-3 flex items-center justify-center text-black text-2xl font-bold">
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> D </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> l </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> m </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> m </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> j </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> v </button>
                <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> s </button>
              </div>

              <h1 className={`${styles_modal.h1} pt-5 text-4xl col-span-4 inset-1/2`}> Rango</h1>

              <div className="text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
                <h3 className="text-right ">hora inicio:</h3>
                <TextField 
                  type="text" 
                  name="horaInicio"
                  id="horaInicio"
                  className="bg-white text-xl h-6 w-24 sm:h-8" />
                <h3 className="text-right ">hora final:</h3>
                <TextField 
                  type="text" 
                  name="horaFinal"
                  id="horaFinal"
                  className="bg-white text-xl h-6 w-24 sm:h-8" />
              </div>            
            </div>
          </Form>
        );
      }}
    </Formik>          
                   
  )
}

export default FormularioFranja