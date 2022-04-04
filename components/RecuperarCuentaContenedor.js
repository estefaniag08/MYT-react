import Link from "next/link";
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from "./TextField";

function RecuperarCuentaContenedor() {

  const initialValues = {
    email: ""    
  };

  const userSchema = yup.object().shape({
    email: yup.string().email("Correo invalido").required("Email es requerido")    
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
            <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center">
              <Form>
                <div className="flex flex-col w-80 h-full justify-center">
                  <h1 className="text-[#20557B] text-6xl font-semibold">Recupera tu cuenta</h1>
                  <h1 className="text-2xl py-4 text-center">Se enviará un enlace de recuperación de la cuenta a su correo.</h1>      
                  <h1 className="text-5xl pt-4">correo electrónico:</h1>
                  <TextField 
                    type="email"
                    name="email"
                    id="email"                    
                    className="w-full "
                  />                                   
                  <button type="submit" className="bg-[#20557B] mt-9 text-white p-1 text-4xl font-bold hover:bg-[#A0C9E6] active:bg-[#49D1CD]">recuperar cuenta</button>      
                  <a href="/" className="text-xl text-center hover:font-bold active:text-[#49D1CD]">Volver a inicio</a>

                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
  )
}

export default RecuperarCuentaContenedor

