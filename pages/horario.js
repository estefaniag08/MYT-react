import FullLayout from "../components/FullLayout";
import PanelHorario from "../components/PanelHorario";
import TablaHorario from "../components/TablaHorario";

function Horario() {
  return (
    <FullLayout>
      <main className=" grid md:flex m-auto  items-center">
        <div className="md:w-11/12 w-full ">
          <TablaHorario />
        </div>
        <PanelHorario />
      </main>
    </FullLayout>
  );
}

export default Horario;
