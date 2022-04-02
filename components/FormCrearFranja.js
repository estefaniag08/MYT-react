import ModalCrearFranja from "./ModalCrearFranja";
import FormularioFranja from "./FormularioFranja"
import HeaderCrearFranja from "./headers_modal/Header_crearfranja";
import BotonCrear from "./headers_modal/BotonCrear"

function FormCrearFranja() {
  return (
    <>
      <ModalCrearFranja>
        <HeaderCrearFranja />
        <FormularioFranja />
      </ModalCrearFranja>
    </>
  );
}

export default FormCrearFranja