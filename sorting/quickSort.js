/**
 * Ordena un arreglo utilizando el algoritmo QuickSort.
 * @param {Array} arreglo - El arreglo a ordenar.
 * @returns {Array} - El arreglo ordenado.
 */
const quickSort = (arreglo) => {
    if (arreglo.length <= 1) {
        return arreglo;
    }
    let pivote = arreglo[arreglo.length - 1]
    let { menores, mayores, iguales } = particionar(arreglo, pivote);

    // Recursivamente ordena los subarreglos menores y mayores,
    // y los concatena junto con el subarreglo de elementos iguales.
    return [...quickSort(menores), ...iguales, ...quickSort(mayores)];
}

/**
 * Particiona un arreglo en subarreglos menores, mayores e iguales en base a un pivote.
 * @param {Array} arreglo - El arreglo a particionar.
 * @param {*} pivote - El pivote utilizado para la partición.
 * @returns {Object} - Un objeto que contiene los subarreglos menores, mayores e iguales.
 */
const particionar = (arreglo, pivote) => {
    let menores = [];
    let mayores = [];
    let iguales = [];
    for (let i = 0; i < arreglo.length; i++) {
        if (pivote > arreglo[i]) {
            menores.push(arreglo[i]);
        } else if (pivote < arreglo[i]) {
            mayores.push(arreglo[i]);
        } else {
            iguales.push(arreglo[i]);
        }
    }
    return { menores, mayores, iguales };
}

// Ejemplo de uso
const arreglo = [7, 2, 1, 6, 8, 5, 3, 4];
console.log(quickSort(arreglo));
