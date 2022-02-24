import styles from "../styles/FormModTarea.module.css"

function FormModificarTarea(){
  return (          
      <div class="modal_modificartarea" className={`${styles.modal_modificartarea}`}>

        <div class="contenedor_modificartarea" className={`${styles.contenedor_modificartarea} font-bold flex flex-col items-center`}>            
          <header className={`${styles.header} text-5xl`}>modificar tarea</header>
          <label for="btn_modificartarea" >X</label>
            
          <div class="contenido_modificartarea" className={`${styles.contenido_modificartarea} grid grid-cols-1 text-center`}>
            
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> información general</h1>
            
            <div className="text-black grid grid-cols-2 gap-0  items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
              <h3 className={`${styles.p}  `}> nombre:</h3>            
              <input type="text" className=" bg-white  text-xl h-6 w-24 sm:h-8" />          
              <h3 className="">dificultad:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
              <h3>descripción:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
              <h3 className="">tipo:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
            </div>
                          
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> Entrega</h1>
            
            <div className="text-black grid grid-cols-2 gap-0 flex-wrap items-center text-2xl sm:grid-cols-4 sm:text-3xl">
              <h3 className="">fecha:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
              <h3 className="">hora:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
            </div>

            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> Tarea General</h1>

            <div className="text-black grid grid-cols-2 gap-5 items-center text-2xl sm:text-3xl">
              <h3 className="text-right ">Seleccionar tarea general:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
            </div>            
          </div>          
          <button type="button" className="bg-white font-bold text-4xl p-1 w-26 mt-[470px]">modificar</button>                    
        </div>        
      </div>    
  )
}

export default FormModificarTarea