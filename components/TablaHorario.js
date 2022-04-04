import Columna from "./Tablas/Columna";
import ColumnaComp from "./Tablas/ColumnaComp";
import styles from "../styles/TablaHorario.module.css";
import { useEffect, useState } from "react";
import {
  cambiarDia,
  esHoy,
  obtenerNombreDelDiaYNumero,
  obtenerNombreDelDia,
  obtenerTituloSemana,
  obtenerTituloDia
} from "../services/date.service";
function TablaHorario({ setFranja, listaFranjas }) {
  const [fechaRef, setFechaRef] = useState(new Date());
  const [ tituloSemana, setTituloSemana ] = useState("");
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

  useEffect(() => {
    let arregloFechas = [];
    arregloFechas = obtenerArregloFechasSemana();
    setArregloFechasSemana(arregloFechas);
    obtenerTituloSemana(arregloFechas[0], arregloFechas[arregloFechas.length -1], setTituloSemana);
    //obtenerFranjasPorDia(1);
  }, []);

  useEffect(() => {
    let arregloFechas = [];
    arregloFechas = obtenerArregloFechasSemana();
    setArregloFechasSemana(arregloFechas);
    obtenerTituloSemana(arregloFechas[0], arregloFechas[arregloFechas.length -1], setTituloSemana);
  }, [fechaRef]);

  useEffect(() => {
    let franjaSemana = [];
    franjaSemana.push([])
    semana.forEach(dia => {
      let franjaDia = [];
      franjaDia = obtenerFranjasPorDia(dia.number);
      franjaSemana.push(franjaDia);
    })
    setFranjasSemana(franjaSemana);
    console.log(franjaSemana)
  },[listaFranjas])

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
      titulos.push(obtenerTituloDia(dia));
    })
    setArregloTitulosDias(titulos);
  }

  const obtenerFranjasPorDia = (dia) => {
    let franjasDia = [];
    listaFranjas.forEach( franja => {
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
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[0] ?? 'LUNES'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[1] ?? 'MARTES'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[2] ?? 'MIÉRCOLES'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[3] ?? 'JUEVES'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[4] ?? 'VIERNES'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[5] ?? 'SÁBADO'}</div>
              <div className="table-cell border-solid border-2 border-white">{arregloTitulosDias[6] ?? 'DOMINGO'}</div>
            </div>
          </div>
          <div className="table-row-group">
            <Columna
              stylesFather={"w-auto border-solid border-2 border-white"}
              cellEven={`${styles.cellHour} text-white`}
              cellOdd={`${styles.cellHour} text-white`}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[1]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[2]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[3]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[4]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[5]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[6]}
            />
            <ColumnaComp
              stylesFather={"w-[14%] border-solid border-2 border-white"}
              cellEven={`${styles.cellEven}`}
              cellOdd={`${styles.cellOdd}`}
              listaTareas={[]}
              listaFranjas={franjasSemana[7]}
            />
          </div>
        </div>
        <div className={`${styles.degrade} w-full`}>{"-"}</div>
      </div>
    </div>
  );
}

export default TablaHorario;
