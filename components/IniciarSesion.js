
function IniciarSesion(){
  return (
    <div className="bg-white shadow-md rounded-md opacity-80 w-full h-full flex flex-col justify-center items-center">
      <h1 className="bg-color-blue-200 text-6xl font-semibold ">iniciar sesión</h1>
      <h1 className="text-5xl pt-4">usuario</h1>
      <input type="text" id="username" name="username" className="bg-white border-4 border-gray-600"/>
      <h1 className="text-5xl pt-4">contraseña</h1>
      <input type="password" id="password" name="password" className="bg-white border-4 border-gray-600"/>
      <a href="/" className="text-xl pb-5">¿olvidaste tu contraseña?</a>
      <button type="button" className="bg-color-blue-200 border-4 ">iniciar sesión</button>
      <a href="/" className="text-xl">crea tu cuenta</a>
    </div>
  )
}

export default IniciarSesion