/**
 * Realiza una búsqueda lineal en un arreglo para encontrar un elemento específico.
 * @param {Array} arreglo - El arreglo en el que se realizará la búsqueda.
 * @param {*} encontrar - El elemento que se desea encontrar en el arreglo.
 * @returns {boolean} - Devuelve true si el elemento se encuentra en el arreglo, de lo contrario, devuelve false.
 */
const linearSearch = (arreglo, encontrar) => {
    for (let i = 0; i < arreglo.length; i++) {
        if (encontrar === arreglo[i]) {
            return true;
        }
    }
    return false;
}

// Ejemplo de uso
const arreglo = [1, 4, 6, 2, 3];
console.log(linearSearch(arreglo, 6));
