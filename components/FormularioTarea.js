import styles from "../styles/FormTarea.module.css"

function FormularioTarea(){
  return (          
      <div class="modal_creartarea" className={`${styles.modal_creartarea}`}>

        <div class="contenedor" className={`${styles.contenedor} flex flex-col items-center`}>            
          <header className={`${styles.header}`}>añadir tarea</header>
          <label for="btn_creartarea" >X</label>
            
          <div class="contenido" className={`${styles.contenido} flex flex-wrap flex-col justify-center items-center`}>
            
            <h1 className={`${styles.h1} col-span-4 inset-1/2`}> insertar tarea</h1>
            
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
          <button type="button" className="bg-white font-bold text-4xl p-1 w-24 mt-[470px]">añadir</button>                    
        </div>        
      </div>    
  )
}

export default FormularioTarea