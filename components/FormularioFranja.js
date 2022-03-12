//import { doc, setDoc } from "@firebase/firestore";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";

import styles from "../styles/FormFranja.module.css"

function FormularioFranja() {
  const pruebaSubmit = () =>{
    const usuario = "vMCIp2NBOORMJhVcw9HV";
    const _franja = collection(firestore, `franjas/${usuario}/franja}`)
    const franja = {
      activo: true,
      descipcion: "prueba",
      fecha_finalizacion: Date.now(),
      frecuencia: [1,2,4],
      hora_final: 1000,
      hora_inicio: 1200,
      nombre: "franja",
      tipo: "Clase BD2"
    }
    
    try{
      console.log("Entraaaaa")
      addDoc(_franja, franja).then(result => {
        console.log(result);
      })
      getDocs(_franja).then( result => {
        console.log(result.docs)
      })
    }catch(error){
        console.log(error);
    }
  }
  
  return (                    
    <div class="contenido_franja" className={`${styles.contenido_franja} font-bold grid grid-cols-1 text-center`}>
      
      <h1 className={`${styles.h1} text-center text-4xl col-span-4 inset-1/2`}> información general franja</h1>
      
      <div className=" text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
        <h3 className={`${styles.p} `}> nombre:</h3>            
        <input type="text" className=" bg-white  text-xl h-6 w-24 sm:h-8" />          
        <h3 className="">tipo:</h3>
        <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
        <h3>descripción:</h3>
        <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />              
      </div>
                    
      <h1 className={`${styles.h1} pt-5 text-4xl col-span-4 inset-1/2`}> frecuencia</h1>
      
      <div className="gap-3 flex items-center justify-center text-black text-2xl font-bold">
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> D </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> l </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> m </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> m </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> j </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> v </button>
        <button className="text-2xl font-bold bg-white w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-[#49D1CD] focus:text-white"> s </button>
      </div>

      <h1 className={`${styles.h1} pt-5 text-4xl col-span-4 inset-1/2`}> Rango</h1>

      <div className="text-black grid grid-cols-2 gap-0 items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
        <h3 className="text-right ">hora inicio:</h3>
        <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
        <h3 className="text-right ">hora final:</h3>
        <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8"/>
      </div>
      <button onClick={() => {pruebaSubmit()}}>Prueba</button>    
    </div>          
                   
  )
}

export default FormularioFranja