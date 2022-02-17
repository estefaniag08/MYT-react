import Link from "next/link";

function IniciarSesion(){
  return (
    <div className="bg-white/80 shadow-md rounded-md  w-full h-full flex flex-col justify-center items-center">
      <h1 className="bg-color-blue-200 text-6xl font-semibold ">iniciar sesión</h1>
      <h1 className="text-5xl pt-4">usuario</h1>
      <input type="text" id="username" name="username" className="bg-white"/>
      <h1 className="text-5xl pt-4">contraseña</h1>
      <input type="password" id="password" name="password" className="bg-white"/>
      <a href="/recuperar_cuenta" className="text-xl pb-5">¿olvidaste tu contraseña?</a>
      <Link href="/horario">
        <button type="button" className="bg-[#20557B] text-white font-bold text-4xl p-1">iniciar sesión</button>
      </Link>
      <a href="/crear_cuenta" className="text-xl">crea tu cuenta</a>
    </div>
  )
}

export default IniciarSesion