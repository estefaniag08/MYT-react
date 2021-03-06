import { collection, addDoc, updateDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Link from "next/link";
import {useRouter} from "next/router";
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';

function IniciarSesion(){
  const router = useRouter()
  const initialValues = {
    username: "",
    password: ""
  };
     
  const userSchema = yup.object().shape({
    username: yup.string().required("Nombre de usuario es requerido"),
    password: yup.string().min(4).max(20).required("la contraseña es requerida")    
  });
  
  const handleSubmit = async (values) =>{
    //alert("INICIANDO SESIÓN ...")
    //alert("datos username: " + values.username + " password: " + values.password)
    const collUsuarios = collection(firestore, `usuarios`)            
    const queryUsuarios = query(
      collUsuarios,
      where("alias", "==", values.username),
      where("password", "==", values.password)
    )
    //alert("consultando SI EL USUARIO EXISTE para iniciar SESION ...")
    let array = []
    try {
      const usuarioRegistrado = await getDocs(queryUsuarios)
      usuarioRegistrado.forEach((doc) =>{
        array.push(doc.id)
      })
      //alert("usuarios con el alias: " + array.length) 
      if (array.length == 1){                
        localStorage.setItem("IdUser", array[0]);        
        router.push("/horario")
      } else {
        alert("El usuario no existe, si desea puede registrase.")
      }            
    } catch (error) {
      //alert(error)
    }    
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={async (values) =>{
        await handleSubmit(values);
      }}
    >
      {(formik) => {                    
          return (
            <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center" >
              <Form>
                <div className="flex flex-col w-80 h-full justify-center">
                
                  <h1 className="text-[#20557B] text-5xl sm:text-6xl font-semibold text-center" >iniciar sesión</h1>
                  <h1 className="text-[#4D4B51] sm:text-5xl sm:pt-4 font-semibold text-center">usuario</h1>
                  <TextField                     
                    type="text"
                    name="username"
                    id="username"
                    aria-label="campo de nombre de usuario"
                    className=" w-full h-9 "                                                        
                  />                   

                  <h1 className="text-[#4D4B51] sm:text-5xl sm:pt-4 font-semibold text-center">contraseña</h1>
                  <TextField                    
                    type="password" 
                    name="password"
                    id="password"
                    aria-label="campo de contraseña"   
                    className=" h-9 w-full "                 
                  />                   

                  <a href="/recuperar_cuenta" className="text-xl pb-5 text-right hover:font-bold active:text-[#49D1CD]">¿olvidaste tu contraseña?</a>    
                  
                  <button type="submit" className="bg-[#20557B] text-white font-bold text-4xl p-1 hover:bg-[#A0C9E6] active:bg-[#49D1CD]"> 
                    iniciar sesión
                  </button>            
                  
                  <a href="/crear_cuenta" className="text-xl text-center hover:font-bold active:text-[#49D1CD]">crea tu cuenta</a>                                                                                                                                        
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
  )
};

export default IniciarSesion;
