import Link from "next/link";

function CrearCuentaContenedor(){
  return (
    <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center" >
      <div className=" flex flex-col w-80 h-full justify-center">
        <h1 className="text-[#20557B] text-7xl font-semibold text-center">crea tu cuenta</h1>
        <h1 className="text-4xl pt-3 text-left">usuario: </h1>
        <input type="text" id="username" name="username" className="bg-white h-8"/>
        <h1 className="text-4xl pt-3">correo electrónico:</h1>
        <input type="text" id="correo" name="correo" className="bg-white h-8"/>
        <h1 className="text-4xl pt-3">contraseña:</h1>
        <input type="password" id="password" name="password" className="bg-white h-8"/>
        <h1 className="text-4xl pt-3">repite la contraseña:</h1>
        <input type="password" id="confirmar_password" name="confirmar_password" className="bg-white h-8"/>
        <Link href="/">
          <button type="button" className="bg-[#20557B] p-1 mt-3 text-white font-bold text-4xl w-40 h-10 ">crear cuenta</button>      
        </Link>
      </div>
    </div>
  )
}

export default CrearCuentaContenedor