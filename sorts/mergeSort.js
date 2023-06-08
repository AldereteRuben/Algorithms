const mergeSort = (arreglo) => {
    if (arreglo.length <= 1) {
        return arreglo;
    }
    const mitad = Math.floor(arreglo.length / 2);
    const izquierda = arreglo.slice(0, mitad);
    const derecha = arreglo.slice(mitad);
    return merge(mergeSort(izquierda), mergeSort(derecha))
}

const merge = (izquierda, derecha) => {
    let ordenado = []
    let i = 0;
    let j = 0;
    while (i < izquierda.length && j < derecha.length) {
        if (izquierda[i] < derecha[j]) {
            ordenado.push(izquierda[i]);
            i++;
        } else {
            ordenado.push(derecha[j]);
            j++;
        }
    }

    while (i < izquierda.length) {
        ordenado.push(izquierda[i]);
        i++;
    }
    while (j < derecha.length) {
        ordenado.push(derecha[j])
        j++
    }
    return ordenado;
}

const arreglo = [5, 6, 1, 3, 2, 4]
console.log(mergeSort(arreglo))