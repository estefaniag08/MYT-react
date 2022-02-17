import Link from "next/link";

function RecuperarCuentaContenedor() {
  return (
    <div className="bg-white shadow-md rounded-md opacity-80 w-full h-full flex flex-col justify-center items-center">
      <h1 className="bg-color-blue-200 text-6xl font-semibold">Recupera tu cuenta</h1>
      <h1 className="text-2xl py-4">Se enviará un enlace de recuperación de la cuenta a su correo.</h1>      
      <h1 className="text-5xl pt-4">correo electrónico:</h1>
      <input type="text" id="correo" name="correo" className="bg-white border-4 border-gray-600"/> 
      <Link href="/">
        <button type="button" className="bg-color-blue-200 border-4">recuperar cuenta</button>      
      </Link>
    </div>
  )
}

export default RecuperarCuentaContenedor

