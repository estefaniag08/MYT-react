/**
   *
   * @param indexMes number of the month index, this number init in 0 to 11, january has the 0 month number.
   */
export function obtenerNombreDelMesPorIndex(indexMes) {
    const nombresMeses = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
    ];
    return nombresMeses[indexMes];
}

export function completarDigitos(dateNumber) {
    const dateNumberString = dateNumber.toString();
    if (dateNumberString.length === 2) {
        return dateNumberString;
    } else {
        return '0' + dateNumberString;
    }
}

export function formatearFechaDiaMesAnio(date) {
    return (
        completarDigitos(date.getDate()) +
        '-' +
        completarDigitos(date.getMonth() + 1) +
        '-' +
        date.getFullYear()
    );
}

export function obtenerNombreDelDia(date) {
    const options = { weekday: 'long' };
    return date.toLocaleDateString('es-CO', options);
}

export function obtenerNombreDelDiaYNumero(date) {
    const options = { weekday: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-CO', options);
}

export function esHoy(date) {
    const currentDate = new Date();
    return (
        date.getDate() === currentDate.getDate() &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
    );
}