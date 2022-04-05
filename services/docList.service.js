export function obtenerSoloActivas(docList) {
    return docList.docs.filter(doc => doc.data().activo).map(item => {
        return {
            id: item.id,
            ...item.data()
        }
    });
}