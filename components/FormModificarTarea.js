import ModalModTarea from "./ModalModTarea";
import FormularioTarea from "./FormularioTarea"
import HeaderModTarea from "./headers_modal/Header_modtarea";
import BotonMod from "./headers_modal/BotonMod"

function FormModificarTarea({idTarea}){
  return (    
    <> 
        <ModalModTarea>
            <HeaderModTarea/>
            <FormularioTarea idTarea={idTarea} />
        </ModalModTarea>     
    </>    
  );
}

export default FormModificarTarea
