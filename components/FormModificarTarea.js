import ModalModTarea from "./ModalModTarea";
import FormularioTarea from "./FormularioTarea"
import HeaderModTarea from "./headers_modal/Header_modtarea";
import BotonMod from "./headers_modal/BotonMod"

function FormModificarTarea({ tareaSeleccionada, setTareaSeleccionada, setListaTareas, listaTareas }) {
  return (
    <>
      <ModalModTarea>
        <HeaderModTarea />
        <FormularioTarea tareaSeleccionada={tareaSeleccionada}
          setTareaSeleccionada={setTareaSeleccionada} setListaTareas={setListaTareas}
          listaTareas={listaTareas} esClicModificar={true}
        />
      </ModalModTarea>
    </>
  );
}

export default FormModificarTarea
