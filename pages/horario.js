import FullLayout from "../components/FullLayout";
import PanelHorario from "../components/PanelHorario";
import TablaHorario from "../components/TablaHorario";
import Head from "next/head";
function Horario() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <FullLayout>
        <main className="lg:flex grid gap-3 mx-2 ">
          <TablaHorario />
          <PanelHorario />
        </main>
      </FullLayout>
    </>
  );
}

export default Horario;
