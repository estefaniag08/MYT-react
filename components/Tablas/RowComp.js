import { useEffect } from "react";

export function RowComp({ tareas, llave }) {
    let rows = [];
    tareas.forEach(tarea => {
        rows.push(Tarea(tarea));
    });
    return (
        tareas.map((tarea, index) => (
            <Tarea key={`${index}-${llave}`} tarea={tarea} />
        ))
    );

}

function Tarea(tarea) {
    const nombre = tarea[21] ? tarea[21]?.nombre : 'asdasd';
    return (<a>{nombre}a</a>);

}