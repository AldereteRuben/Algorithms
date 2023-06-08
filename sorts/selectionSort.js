/**
 * Ordena un arreglo utilizando el algoritmo Selection Sort.
 *
 * @param {Array} arreglo - El arreglo a ordenar.
 * @returns {Array} - El arreglo ordenado de menor a mayor.
 */
const selectionSort = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = i + 1; j < arreglo.length; j++) {
            if (arreglo[i] > arreglo[j]) {
                let temp = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = temp;
            }
        }
    }
    return arreglo;
}

// Ejemplo de uso:
const arreglo = [7, 3, 5, 1, 9, 2];
console.log(selectionSort(arreglo));
