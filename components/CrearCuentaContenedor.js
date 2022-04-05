import { collection, addDoc, updateDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Link from "next/link";
import * as yup from "yup";
import { Formik, Form } from "formik"
import { TextField } from './TextField';
import {useRouter} from "next/router";

function CrearCuentaContenedor(){
  const router = useRouter()

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

  const handleSubmit = async (values) => {
    var opcion = confirm("¿Estás seguro de que los datos son correctos?")
    if (opcion == true){
      if (await consultarUsuario(values)){
        //alert("datos username: " + values.username + " correo: " + values.email + " password: " + values.password)
        const usuario = {
          activo: true,
          alias: values.username,
          correo: values.email,
          password: values.password
        }
        // creando el usuario
        const collUsuarios = collection(firestore, `usuarios`)
        try {
          const result = await addDoc(collUsuarios, usuario);
          //alert("result: " + result)
        } catch (error) {
          //alert(error)
        }        
        const idUser = await consultID(values);
        //alert("id usuario creado: " + idUser)
        crearEstructuraFranja(idUser);
        crearEstructuraTarea(idUser);
        alert("Su cuenta ha sido creada con éxito.")
        router.push("/");
      } else {
        alert("El alias ya se encuentra registrado.")
      }
    }        
  }

  const consultID = async (values) => {
    // consultando el usuario creado a ver si tengo el id
    const collUsuarios = collection(firestore, `usuarios`)            
    const queryUsuarios = query(
      collUsuarios,
      where("alias", "==", values.username),
      where("correo", "==", values.email)
    )
    //alert("consultando el id ...")
    let array = []
    try {
      const usuarioRegistrado = await getDocs(queryUsuarios)
      usuarioRegistrado.forEach((doc) =>{
        array.push(doc.id)
      })
      //alert("id: " + array[0])      
      return array[0]      
    } catch (error) {
      alert(error)
    }        
  }
  // consultar si el usuario a registrar ya se encuentra registrado
  const consultarUsuario = async (values) => {
    const collUsuarios = collection(firestore, `usuarios`)            
    const queryUsuarios = query(
      collUsuarios,
      where("alias", "==", values.username),
      where("correo", "==", values.email)
    )
    //alert("consultando SI EL USUARIO EXISTE ...")
    let array = []
    try {
      const usuarioRegistrado = await getDocs(queryUsuarios)
      usuarioRegistrado.forEach((doc) =>{
        array.push(doc.id)
      })
      //alert("usuarios con el alias: " + array.length) 
      if (array.length == 0){
        return true
      } else {
        return false
      }            
    } catch (error) {
      alert(error)
    }    
  }
  const crearEstructuraFranja = async (idUsuario) =>{
    const collfranjasUsuarios = collection(firestore, `franjas/${idUsuario}/franja`)
    const franja = {
      activo: true,
      descripcion: "",      
      frecuencia: "",
      hora_final: "",
      hora_inicio: "",
      nombre: "",
      tipo: ""
    }    
    //alert("creando estructura de franja ....")
    try {
      const result = await addDoc(collfranjasUsuarios, franja);
      //alert("result: " + result)
    } catch (error) {
      alert(error)
    }    
  }
  const crearEstructuraTarea = async (idUsuario) =>{
    const colltareasUsuarios = collection(firestore, `tareas/${idUsuario}/tarea`)
    const tarea = {
      activo: true,
      descripcion: "",      
      dificultad: "",
      estado: "",
      fecha_entrega: "",
      nombre: "",
      tipo: ""
    }    
    //alert("creando estructura de tarea ....")
    try {
      const result = await addDoc(colltareasUsuarios, tarea);
      //alert("result: " + result)
    } catch (error) {
      alert(error)
    }    
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={async (values) =>{
        await handleSubmit(values);
        console.log(values)
      }}
    >
      {(formik) => {          
          return (
            <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center" >
              <Form>
                <div className=" flex flex-col w-80 h-full justify-center ">
                
                  <h1 className="text-[#20557B] text-3xl sm:text-7xl font-semibold text-center">crea tu cuenta</h1>
                  <h1 className="text-[#4D4B51] -mb-5 sm:mb-0  font-semibold sm:text-4xl text-left">usuario: </h1>
                  <TextField 
                    type="text" 
                    id="username" 
                    name="username"
                    aria-label="campo de nombre de usuario"                    
                    className="w-full h-6 sm:h-8"
                  />                  

                  <h1 className="text-[#4D4B51] -mb-5 sm:mb-0 font-semibold sm:text-4xl ">correo electrónico:</h1>
                  <TextField 
                    type="email"
                    name="email"
                    id="email"
                    aria-label="campo de correo electronico"                    
                    className="w-full h-6 sm:h-8"
                  />                  

                  <h1 className="text-[#4D4B51] -mb-5 sm:mb-0 font-semibold sm:text-4xl ">contraseña:</h1>
                  <TextField 
                    type="password"
                    name="password"
                    id="password"
                    aria-label="campo de contraseña"                    
                    className="w-full h-6 sm:h-8"
                  />                  

                  <h1 className="text-[#4D4B51] -mb-5 sm:mb-0 font-semibold sm:text-4xl">repite la contraseña:</h1>
                  <TextField
                    type="password"
                    name="repeat_password"
                    id="repeat_password"  
                    aria-label="campo de repetición de la contraseña"                
                    className="w-full h-6 sm:h-8"
                  />                  
                  
                  <button type="submit" className="bg-[#20557B] p-1 text-white font-bold text-4xl hover:bg-[#A0C9E6] active:bg-[#49D1CD]">crear cuenta</button>                                  
                  <a href="/" className="text-xl text-center hover:font-bold active:text-[#49D1CD]">Volver a inicio</a>
                </div>
              </Form>
            </div>
          );
        }}
      </Formik>
  )
}

export default CrearCuentaContenedor