import styles from "../styles/FormModFranja.module.css"

function FormularioFranja() {
  return (
    <div class="modal_modificarfranja" className={`${styles.modal_modificarfranja}`}>

        <div class="contenedor_modificarfranja" className={`${styles.contenedor_modificarfranja} flex flex-col items-center`}>            
          <header className={`${styles.header}`}>modificar franja</header>
          <label for="btn_modificarfranja" >X</label>
            
          <div class="contenido_modificarfranja" className={`${styles.contenido_modificarfranja} flex flex-wrap flex-col justify-center items-center`}>
            
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> información general</h1>
            
            <div className="columns-4 grid grid-cols-4 flex flex-wrap items-center">
              <h3 className={`${styles.p}  text-right`}> nombre:</h3>            
              <input type="text" className=" bg-white border-4 border-gray-600 h-8 w-32 text-xl h-8 w-24" />          
              <h3 className="">tipo:</h3>
              <input type="text" className="bg-white border-4 border-gray-600 h-8 w-32 text-xl h-8 w-24" />
              <h3>descripción:</h3>
              <input type="text" className="bg-white border-4 border-gray-600 h-8 w-32 text-xl h-8 w-24" />              
            </div>
                          
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> frecuencia</h1>
            
            <div className="gap-3 flex items-center justify-center">
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> D </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> l </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> m </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> m </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> j </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> v </button>
              <button className="text-2xl bg-slate-300 w-12 h-12 rounded-full hover:bg-sky-300 focus:bg-sky-600"> s </button>
            </div>

            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> Rango</h1>

            <div className="grid grid-cols-4 gap-4  items-center">
              <h3 className="text-right ">hora inicio:</h3>
              <input type="text" className="bg-white border-4 border-gray-600 h-8 w-32 text-xl h-8 w-24 " />
              <h3 className="text-right ">hora final:</h3>
              <input type="text" className="bg-white border-4 border-gray-600 h-8 w-32 text-xl h-8 w-24 " />
            </div>            
          </div>          
          <button type="button" className="bg-white border-4 w-26 mt-[470px]">modificar</button>                    
        </div>        
      </div>    
  )
}

export default FormularioFranja