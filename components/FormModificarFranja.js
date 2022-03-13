import ModalModFranja from "./ModalModFranja";
import FormularioFranja from "./FormularioFranja"
import HeaderModFranja from "./headers_modal/Header_modfranja";
import BotonMod from "./headers_modal/BotonMod"

function FormModificarFranja({idFranja}){
  return (    
    <> 
        <ModalModFranja>
            <HeaderModFranja/>
            <FormularioFranja idFranja={"cVUdbaoCFD1v2xutlusL"}/> //SOLO PARA PROBAR
        </ModalModFranja>     
    </>    
  );
}

export default FormModificarFranja