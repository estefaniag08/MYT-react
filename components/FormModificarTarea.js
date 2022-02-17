import styles from "../styles/FormModTarea.module.css"

function FormModificarTarea(){
  return (          
      <div class="modal_modificartarea" className={`${styles.modal_modificartarea}`}>

        <div class="contenedor_modificartarea" className={`${styles.contenedor_modificartarea} flex flex-col items-center`}>            
          <header className={`${styles.header}`}>modificar tarea</header>
          <label for="btn_modificartarea" >X</label>
            
          <div class="contenido_modificartarea" className={`${styles.contenido_modificartarea} flex flex-wrap flex-col justify-center items-center`}>
            
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> información general</h1>
            
            <div className="columns-4 grid grid-cols-4 flex flex-wrap items-center">
              <h3 className={`${styles.p}  text-right`}> nombre:</h3>            
              <input type="text" className=" bg-white  h-8 w-32 text-xl h-8 w-24" />          
              <h3 className="">dificultad:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24" />
              <h3>descripción:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24" />
              <h3 className="text-right">tipo:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24" />
            </div>
                          
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> Entrega</h1>
            
            <div className="grid grid-cols-4 gap-4  items-center">
              <h3 className="text-right">fecha:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24" />
              <h3 className="text-right">hora:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24" />
            </div>

            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> Tarea General</h1>

            <div className="grid grid-cols-2 gap-2  items-center">
              <h3 className="text-right ">Seleccionar tarea general:</h3>
              <input type="text" className="bg-white  h-8 w-32 text-xl h-8 w-24 " />
            </div>            
          </div>          
          <button type="button" className="bg-white font-bold text-4xl p-1 w-26 mt-[470px]">modificar</button>                    
        </div>        
      </div>    
  )
}

export default FormModificarTarea