import Modal from "./Modal";
import FormularioFranja from "./FormularioFranja"
import HeaderCrearFranja from "./headers_modal/Header_crearfranja";
import BotonCrear from "./headers_modal/BotonCrear"

function FormCrearFranja(){
  return (    
    <> 
        <Modal>
            <HeaderCrearFranja/>
            <FormularioFranja/>
            <BotonCrear />
        </Modal>     
    </>    
  );
}

export default FormCrearFranja