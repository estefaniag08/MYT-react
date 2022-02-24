import Modal from "./Modal";
import FormularioFranja from "./FormularioFranja"
import HeaderModFranja from "./headers_modal/Header_crearfranja";
import BotonMod from "./headers_modal/BotonCrear"

function FormModificarFranja(){
  return (    
    <> 
        <Modal>
            <HeaderModFranja/>
            <FormularioFranja/>
            <BotonMod />
        </Modal>     
    </>    
  );
}

export default FormModificarFranja