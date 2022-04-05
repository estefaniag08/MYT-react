import { useEffect, useState } from "react";

export function RowComp({ tareas, franjas, llave, setTareaSeleccionada, setFranja, esTarea }) {
    const [tareasLista, setTareasLista] = useState([]);
    const [franjasLista, setFranjasLista] = useState([]);

    useEffect(()=>{
        if(tareas){

            let rows = [];
            tareas.forEach(tarea => {
                rows.push(tarea);
            });
            setTareasLista(rows);
        }
    },[tareas]);

    useEffect(()=>{
        if(franjas){
            let rows = [];
            franjas?.forEach(franja => {
                rows.push(franja);
            });
            setFranjasLista(rows);
        }
    },[franjas]);

    useEffect(()=>{
        if(tareas){
            let rows = [];
            tareas.forEach(tarea => {
                rows.push(tarea);
            });
            setTareasLista(rows);
        }
        if(franjas){
            rows = [];
            franjas?.forEach(franja => {
                rows.push(franja);
            });
            setFranjasLista(rows);
        }
    },[]);
    return esTarea ? (
        tareasLista.map((tarea) => {
            
            return(
            <Tarea key={`tarea-${llave}`} tarea={tarea} setTareaSeleccionada={setTareaSeleccionada}/>
        )})
    ):!esTarea? (
        franjasLista.map((franja) => {
            console.log('Entra??')
            return(
                <Franja key={`franja-${franja.id}`} franja={franja} setFranja={setFranja}/>
            )
        })
    ): <></>;

}

function Tarea({tarea, setTareaSeleccionada}) {
    const handleOnClick = (tarea)=>{
        setTareaSeleccionada(tarea);
    }
    return(
        tarea.length > 0 ?
        tarea.map((t, index )=> {
            
            const nombre = t ? t?.nombre : '-';
            return (<a key={index} onClick={()=>{handleOnClick(t)}} className="ml-4 hover:font-bold hover:text-5xl">{`${nombre} `}</a>);
        })
        :
        <a> - </a>
    )

}

function Franja({franja, setFranja}) {
    const handleOnClick = (franja)=>{
        setFranja(franja.id);
    }
    return (
        franja.length > 0 ?
        franja.map((f, index) => {
            const nombre = f ? f?.nombre : '-';
            return(<a key={index} onClick={()=>{handleOnClick(f)}} className="ml-4 text-3xl hover:font-bold hover:text-3xl">{`${nombre} `}</a>)
        }):
        <a> - </a>
    )
}