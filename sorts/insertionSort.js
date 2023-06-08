/**
 * Ordena un arreglo utilizando el algoritmo Insertion Sort.
 *
 * @returns {Array} - El arreglo ordenado de menor a mayor.
 */
let insertionSort = () => {
    let array = [5, 2, 4, 6, 1, 3];

    /**
     * Itera a través del arreglo y coloca cada elemento en su posición correcta.
     * @returns {Array} - El arreglo ordenado de menor a mayor.
     */
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        let j = i - 1;

        /**
         * Desplaza los elementos mayores a la derecha para dejar espacio
         * al elemento actual y lo inserta en la posición correcta.
         */
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j -= 1;
        }

        array[j + 1] = temp;
    }

    return array;
}

// Ejecuta el algoritmo Insertion Sort y muestra el resultado.
console.log(insertionSort());
