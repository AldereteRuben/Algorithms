const bubbleSort = (arreglo) => {
    for (let i = 0; i < arreglo.length; i++) {
        for (let j = 0; j < arreglo.length - i; j++) {
            if (arreglo[j] > arreglo[j + 1]) {
                let temp = arreglo[j]
                arreglo[j] = arreglo[j + 1]
                arreglo[j + 1] = temp
            }
        }
    }
    return arreglo;
}

const arreglo = [5, 3, 1, 2, 4, 6, 7, 8]
console.log(bubbleSort(arreglo))