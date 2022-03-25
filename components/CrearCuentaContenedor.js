import { collection, addDoc, updateDoc, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
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

  const handleSubmit = async (values) => {
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
        alert(error)
      }        
      const idUser = await consultID(values);
      //alert("id usuario creado: " + idUser)
      crearEstructuraFranja(idUser);
      crearEstructuraTarea(idUser);
      alert("USUARIO CREADO CON EXITO")
    } else {
      alert("EL ALIAS YA SE ENCUENTRA REGISTRADO")
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
                <div className=" flex flex-col w-80 h-full justify-center">
                
                  <h1 className="text-[#20557B] text-5xl sm:text-7xl font-semibold text-center">crea tu cuenta</h1>
                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl text-left">usuario: </h1>
                  <TextField 
                    type="text" 
                    id="username" 
                    name="username"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl ">correo electrónico:</h1>
                  <TextField 
                    type="email"
                    name="email"
                    id="email"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl ">contraseña:</h1>
                  <TextField 
                    type="password"
                    name="password"
                    id="password"                    
                    className="w-full h-8"
                  />                  

                  <h1 className="text-[#4D4B51] font-semibold sm:text-4xl">repite la contraseña:</h1>
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