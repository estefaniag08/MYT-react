import Link from "next/link";
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';

function IniciarSesion(){

  const initialValues = {
    username: "",
    password: ""
  };
     
  const userSchema = yup.object().shape({
    username: yup.string().required("Nombre de usuario es requerido"),
    password: yup.string().min(4).max(20).required("la contraseña es requerida")    
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
                <div className="flex flex-col w-80 h-full justify-center">
                
                  <h1 className="text-[#20557B] text-5xl sm:text-6xl font-semibold text-center">iniciar sesión</h1>
                  <h1 className="text-[#4D4B51] sm:text-5xl sm:pt-4 font-semibold text-center">usuario</h1>
                  <TextField                     
                    type="text"
                    name="username"
                    id="username" 
                    className=" w-full h-9 "                                                        
                  />                   

                  <h1 className="text-[#4D4B51] sm:text-5xl sm:pt-4 font-semibold text-center">contraseña</h1>
                  <TextField                    
                    type="password" 
                    name="password"
                    id="password"   
                    className=" h-9 w-full "                 
                  />                   

                  <a href="/recuperar_cuenta" className="text-xl pb-5 text-right">¿olvidaste tu contraseña?</a>                                          
                  
                  <button type="submit" className="bg-[#20557B] text-white font-bold text-4xl p-1"> 
                    iniciar sesión
                  </button>            
                  
                  <a href="/crear_cuenta" className="text-xl text-center">crea tu cuenta</a>                                                                                                                                        
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
  )
};

export default IniciarSesion;