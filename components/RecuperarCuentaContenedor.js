import Link from "next/link";

function RecuperarCuentaContenedor() {
  return (
    <div className="bg-white/80 shadow-md rounded-md w-full h-full flex flex-col justify-center items-center">
      <h1 className="text-[#20557B] text-6xl font-semibold">Recupera tu cuenta</h1>
      <h1 className="text-2xl py-4">Se enviará un enlace de recuperación de la cuenta a su correo.</h1>      
      <h1 className="text-5xl pt-4">correo electrónico:</h1>
      <input type="text" id="correo" name="correo" className="bg-white "/> 
      <Link href="/">
        <button type="button" className="bg-[#20557B] mt-3 text-white p-1 text-4xl font-bold">recuperar cuenta</button>      
      </Link>
    </div>
  )
}

export default RecuperarCuentaContenedor

