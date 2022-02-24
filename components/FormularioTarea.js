import styles from "../styles/FormTarea.module.css"

function FormularioTarea(){
  return (          
      <div class="modal_creartarea" className={`${styles.modal_creartarea}`}>

        <div class="contenedor" className={`${styles.contenedor} font-bold flex flex-col items-center`}>            
          <header className={`${styles.header} text-5xl `}>añadir tarea</header>
          <label for="btn_creartarea" className="" >X</label>
            
          <div class="contenido" className={`${styles.contenido} grid grid-cols-1  text-center`}>
            
            <h1 className={`${styles.h1} text-4xl text-center col-span-4 inset-1/2`}> información general tarea</h1>
            
            <div className=" grid grid-cols-2 gap-0  items-center text-2xl sm:grid-cols-4 sm:gap-3 sm:text-3xl">
              <h3 className={`${styles.p} text-black `}> nombre:</h3>            
              <input type="text" className=" bg-white text-xl h-6 w-24 sm:h-8" />          
              <h3 className="  text-black ">dificultad:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
              <h3 className=" text-black ">descripción:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
              <h3 className=" text-black ">tipo:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
            </div>
                          
            <h1 className={`${styles.h1} pt-4 text-4xl  col-span-4 inset-1/2`}> Entrega</h1>
            
            <div className="grid grid-cols-2 gap-0 flex-wrap items-center text-2xl sm:grid-cols-4 sm:text-3xl">
              <h3 className=" text-black ">fecha:</h3>
              <input type="text" className="bg-white  text-xl h-6 w-24 sm:h-8" />
              <h3 className=" text-black ">hora:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
            </div>

            <h1 className={`${styles.h1} pt-4 text-4xl  col-span-4 inset-1/2`}> Tarea General</h1>

            <div className="grid grid-cols-2 gap-5 items-center text-2xl sm:text-3xl">
              <h3 className=" text-black text-right ">Seleccionar tarea general:</h3>
              <input type="text" className="bg-white text-xl h-6 w-24 sm:h-8" />
            </div>            
          </div>          
          <button type="button" className="bg-white text-4xl p-1 w-24 mt-[470px]">añadir</button>                    
        </div>        
      </div>    
  )
}

export default FormularioTarea