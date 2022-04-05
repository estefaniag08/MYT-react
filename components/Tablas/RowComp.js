import { useEffect, useState } from "react";

export function RowComp({ tareas, llave, setTareaSeleccionada }) {
    const [tareasLista, setTareasLista] = useState([]);
    useEffect(()=>{
        let rows = [];
        tareas.forEach(tarea => {
            rows.push(tarea);
        });
        setTareasLista(rows);
        console.log('tareas_lista', tareasLista);
    },[tareas]);

    useEffect(()=>{
        let rows = [];
        tareas.forEach(tarea => {
            rows.push(tarea);
        });
        setTareasLista(rows);
        console.log('tareas_lista', tareasLista);
    },[]);
    return (
        tareasLista.map((tarea) => {
            
            return(
            <Tarea key={`tarea-${llave}`} tarea={tarea} setTareaSeleccionada={setTareaSeleccionada}/>
        )})
    );

}

function Tarea({tarea, setTareaSeleccionada}) {
    const handleOnClick = (tarea)=>{
        console.log('taea', tarea)
        setTareaSeleccionada(tarea);
    }
    console.log('aa tarea', tarea)
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