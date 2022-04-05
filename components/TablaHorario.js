import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/clientApp";
import Columna from "./Tablas/Columna";
import ColumnaComp from "./Tablas/ColumnaComp";
import styles from "../styles/TablaHorario.module.css";
import stylesAgenda from "../styles/TablaAgenda.module.css";
import { useEffect, useState } from "react";
import {
  cambiarDia,
  esHoy,
  obtenerNombreDelDiaYNumero,
  obtenerNombreDelDia,
  obtenerTituloSemana,
  obtenerTituloDia
} from "../services/date.service";
import { obtenerSoloActivas } from "../services/docList.service";
function TablaHorario({ setFranja}) {
  const [fechaRef, setFechaRef] = useState(new Date());
  const [ tituloSemana, setTituloSemana ] = useState("");
  const [listaFranjas, setListaFranjas] = useState([]);
  const [ arregloFechasSemana, setArregloFechasSemana] = useState([]);
  const [ arregloTitulosDias, setArregloTitulosDias] = useState([]);
  const [ semana, setSemana] = useState([
    { number: 1, text: "lunes" },
    { number: 2, text: "martes" },
    { number: 3, text: "miércoles" },
    { number: 4, text: "jueves" },
    { number: 5, text: "viernes" },
    { number: 6, text: "sábado" },
    { number: 7, text: "domingo" },
  ])
  const [franjasSemana, setFranjasSemana] = useState([]);
 const estiloHeaderTail = "table-cell border-solid border-2 border-white";
 const usuario = localStorage.getItem("IdUser");//"vMCIp2NBOORMJhVcw9HV";


  const llenarListaFranjas = async() => {
    const coleccionFranjas = collection(firestore, `franjas/${usuario}/franja`);
    let franjas = await getDocs(coleccionFranjas);
    
    let arregloFranjas = [];
    arregloFranjas = obtenerSoloActivas(franjas);

    console.log('arregloFranjas', arregloFranjas);
    setListaFranjas(arregloFranjas);
    crearFranjasDia(arregloFranjas);
   
  }

  useEffect(async () => {
    await llenarListaFranjas();
    let arregloFechas = [];
    arregloFechas = obtenerArregloFechasSemana();
    setArregloFechasSemana(arregloFechas);
    obtenerTituloSemana(arregloFechas[0], arregloFechas[arregloFechas.length -1], setTituloSemana);

  }, []);

  useEffect(async () => {
    await llenarListaFranjas();
    let arregloFechas = [];
    arregloFechas = obtenerArregloFechasSemana();
    setArregloFechasSemana(arregloFechas);
    obtenerTituloSemana(arregloFechas[0], arregloFechas[arregloFechas.length -1], setTituloSemana);
  }, [fechaRef]);

  const crearFranjasDia= (arregloFranjas) =>{
    let franjaSemana = [];
    franjaSemana.push([])
    semana.forEach(dia => {
      let franjaDia = [];
      franjaDia = obtenerFranjasPorDia(arregloFranjas, dia.number);
      franjaSemana.push(franjaDia);
    })
    setFranjasSemana(franjaSemana);
    console.log(franjaSemana)
  }

  const obtenerArregloFechasSemana = ()=>{
    const nombreFechaRef = obtenerNombreDelDia(fechaRef);
    const diaPivote = semana.find( dia => {
      return dia.text === nombreFechaRef;
    })
    let arregloFechas = [];
    semana.map( dia =>{
      if(dia.number === diaPivote.number){
        arregloFechas.push(fechaRef);
      } else {
        const diasDiferencia = diaPivote.number - dia.number;
        let nuevaFecha = new Date();
        nuevaFecha.setDate(fechaRef.getDate() - diasDiferencia);
        arregloFechas.push(nuevaFecha);
      }
    })
    obtenerTitulosDias(arregloFechas);
    return arregloFechas;
  }

  const obtenerTitulosDias = (arregloFechas) => {
    const titulos = [];
    arregloFechas.forEach( dia => {
      titulos.push(obtenerTituloDia(dia)
      );
    })
    setArregloTitulosDias(titulos);    
  }

  const obtenerFranjasPorDia = (arregloFranjas, dia) => {
    let franjasDia = [];
    arregloFranjas.forEach( franja => {
      for(let i=0; i<franja.frecuencia.length-1; i++){
        if(franja.frecuencia[i] === dia){
          franjasDia.push(franja)
        }
      }
    })
    return franjasDia;
  }

  const clicSiguienteDiaSemana = () => {
    cambiarDia(7, fechaRef, setFechaRef);
  }

  const clicDiaAnteriorSemana = () => {
    cambiarDia(-7, fechaRef, setFechaRef);
  }  

  return (
    <div className="lg:w-11/12  w-full xl:h-[76vh] lg:self-center self-start overflow-y-hidden">
      <div
        className={`text-5xl  flex justify-end gap-4  p-1 font-bold ${styles.texto}`}
      >
        <button type="button" onClick={clicDiaAnteriorSemana} className="font-bold ">
          {"<"}
        </button>
        <h1 className={`lg:text-5xl text-3xl `}>Semana {tituloSemana}</h1>
        <button type="button" onClick={clicSiguienteDiaSemana} className="font-bold">
          {">"}
        </button>
      </div>
      <div className=" md:h-[90%] xl:overflow-y-scroll overflow-x-auto w-full">
        <div className="table  w-full">
          <div className="table-header-group">
            <div
              className={`${styles.header} table-row border-solid border-2 border-white text-4xl text-white text-center`}
            >
              <div className="table-cell border-solid border-2 border-white p-2">Hora</div>
              <div className={(arregloTitulosDias[0] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[0] ?? 'LUNES'}
              </div>
              <div className={ (arregloTitulosDias[1] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[1] ?? 'MARTES'}
              </div>
              <div className={(arregloTitulosDias[2] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[2] ?? 'MIÉRCOLES'}
              </div>
              <div className={(arregloTitulosDias[3] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[3] ?? 'JUEVES'}
              </div>
              <div className={(arregloTitulosDias[4] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[4] ?? 'VIERNES'}
              </div>
              <div className={(arregloTitulosDias[5] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[5] ?? 'SÁBADO'}
              </div>
              <div className={(arregloTitulosDias[6] === "Hoy") ? 
                `${stylesAgenda.header} ${estiloHeaderTail}` : 
                `${styles.header} ${estiloHeaderTail}`}>
                  {arregloTitulosDias[6] ?? 'DOMINGO'}
              </div>
            </div>
          </div>
          <div className="table-row-group">{
  franjasSemana.length > 1 ? (
<>
            <Columna
              stylesFather={"w-auto border-solid border-2 border-white"}
              cellEven={`${styles.cellHour} text-white`}
              cellOdd={`${styles.cellHour} text-white`}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[0] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[0] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[1]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[1] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[1] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[2]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[2] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[2] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[3]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[3] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[3] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[4]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[4] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[4] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[5]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[5] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[5] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[6]}
setFranja={setFranja}
                esTarea={false}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={(arregloTitulosDias[6] === "Hoy") ? `${stylesAgenda.cellEven}` : `${styles.cellEven}`}
              cellOdd={(arregloTitulosDias[6] === "Hoy") ? `${stylesAgenda.cellOdd}` : `${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[7]}
setFranja={setFranja}
                esTarea={false}
            />
 </>
)
          : <></>}</div>
        </div>
        <div className={`${styles.degrade} w-full`}>{"-"}</div>
      </div>
    </div>
  );
}

export default TablaHorario;
