import ModalModFranja from "./ModalModFranja";
import FormularioFranja from "./FormularioFranja"
import HeaderModFranja from "./headers_modal/Header_modfranja";
import BotonMod from "./headers_modal/BotonMod"

function FormModificarFranja(){
  return (    
    <> 
        <ModalModFranja>
            <HeaderModFranja/>
            <FormularioFranja/>
            <BotonMod />
        </ModalModFranja>     
    </>    
  );
}

export default FormModificarFranja