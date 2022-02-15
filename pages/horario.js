import FullLayout from "../components/FullLayout";
import PanelHorario from "../components/PanelHorario";
import TablaHorario from "../components/TablaHorario";

function Horario() {
  return (
    <FullLayout>
      <main className=" grid md:flex m-auto justify-center items-center">
        <div className="md:w-9/12 w-full ">
          <TablaHorario/>
        </div>
        <div className="md:w-3/12 w-full h-full flex-col ">
          <PanelHorario/>
        </div>
      </main>
    </FullLayout>
  )
}

export default Horario;