import { useEffect, useState } from "react";

export function RowComp({ tareas, llave }) {
    const [tareasLista, setTareasLista] = useState([]);
    useEffect(()=>{
        let rows = [];
        tareas.forEach(tarea => {
            rows.push(tarea);
        });
        setTareasLista(rows);
    },[tareas]);

    useEffect(()=>{
        let rows = [];
        tareas.forEach(tarea => {
            rows.push(tarea);
        });
        setTareasLista(rows);
    },[]);
    
    return (
        tareasLista.map((tarea) => {
            
            return(
            <Tarea key={`tarea-${llave}`} tarea={tarea} />
        )})
    );

}

function Tarea({tarea}) {
    const nombre = tarea[0] ? tarea[0]?.nombre : '.';
    return (<a>{`${nombre} `}</a>);

}