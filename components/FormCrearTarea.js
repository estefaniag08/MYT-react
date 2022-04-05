import ModalCrearTarea from "./ModalCrearTarea";
import FormularioTarea from "./FormularioTarea"
import HeaderCrearTarea from "./headers_modal/Header_creartarea";
import BotonCrear from "./headers_modal/BotonCrear"

function FormCrearTarea() {

  return (
    <>
      <ModalCrearTarea>
        <HeaderCrearTarea />
        <FormularioTarea />
      </ModalCrearTarea>
    </>
  );
}

export default FormCrearTarea
