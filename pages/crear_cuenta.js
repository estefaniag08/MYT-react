import Head from "next/head";
import SimpleLayout from "../components/SimpleLayout";
import CrearCuentaContenedor from "../components/CrearCuentaContenedor";

function CrearCuenta() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head> 
      <SimpleLayout>        
        <CrearCuentaContenedor />          
      </SimpleLayout>
    </>
  )
}

export default CrearCuenta