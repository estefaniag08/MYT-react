
function CrearCuentaContenedor(){
  return (
    <div className="bg-white shadow-md rounded-md opacity-80 w-full h-full flex flex-col justify-center items-center" >
      <div className=" flex flex-col w-80 h-full justify-center">
        <h1 className="bg-color-blue-200 text-5xl font-semibold text-center">crea tu cuenta</h1>
        <h1 className="text-4xl pt-3 text-left">usuario: </h1>
        <input type="text" id="username" name="username" className="bg-white border-4 border-gray-600 h-8"/>
        <h1 className="text-4xl pt-3">correo electrónico:</h1>
        <input type="text" id="correo" name="correo" className="bg-white border-4 border-gray-600 h-8"/>
        <h1 className="text-4xl pt-3">contraseña:</h1>
        <input type="password" id="password" name="password" className="bg-white border-4 border-gray-600 h-8"/>
        <h1 className="text-4xl pt-3">repite la contraseña:</h1>
        <input type="password" id="confirmar_password" name="confirmar_password" className="bg-white border-4 border-gray-600 h-8"/>

        <button type="button" className="bg-color-blue-200 border-4 w-40 h-10 ">crear cuenta</button>      
      </div>
    </div>
  )
}

export default CrearCuentaContenedor