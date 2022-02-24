import Modal2 from "./Modal2";
import FormularioFranja from "./FormularioFranja"
import HeaderModFranja from "./headers_modal/Header_modfranja";
import BotonMod from "./headers_modal/BotonMod"

function FormModificarFranja(){
  return (    
    <> 
        <Modal2>
            <HeaderModFranja/>
            <FormularioFranja/>
            <BotonMod />
        </Modal2>     
    </>    
  );
}

export default FormModificarFranja