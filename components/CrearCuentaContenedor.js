import Link from "next/link";
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';

function CrearCuentaContenedor(){
  const initialValues = {
    username: "",
    email: "",
    password: "",
    repeat_password: ""
  };
  
  const userSchema = yup.object().shape({
    username: yup.string().required("Nombre de usuario es requerido"),
    email: yup.string().email("Correo es invalido").required("Email es requerido"),
    password: yup.string().min(4).max(20).required("La contraseña es requerida"),    
    repeat_password: yup.string().min(4).max(20).required("Repetir la contraseña es necesario")
  });

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
            <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center" >
              <Form>
                <div className=" flex flex-col w-80 h-full justify-center">
                
                  <h1 className="text-[#20557B] text-5xl sm:text-7xl font-semibold text-center">crea tu cuenta</h1>
                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl sm:pt-3 text-left">usuario: </h1>
                  <TextField 
                    type="text" 
                    id="username" 
                    name="username"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl sm:pt-3">correo electrónico:</h1>
                  <TextField 
                    type="email"
                    name="email"
                    id="email"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl sm:pt-3">contraseña:</h1>
                  <TextField 
                    type="password"
                    name="password"
                    id="password"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl sm:pt-3">repite la contraseña:</h1>
                  <TextField
                    type="password"
                    name="repeat_password"
                    id="repeat_password"                  
                    className="w-full h-8"
                  />                  
                  
                  <button type="submit" className="bg-[#20557B] p-1 mt-3 text-white font-bold text-4xl w-40 h-10 ">crear cuenta</button>                                  
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
  )
}

export default CrearCuentaContenedor