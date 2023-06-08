let insertionSort = () => {
    let array = [5, 2, 4, 6, 1, 3]
    for (let i = 0; i < array.length; i++) {
        let temp = array[i]
        let j = i - 1;
        while (j >= 0 && array[j] > temp) {
            array[j + 1] = array[j];
            j -= 1;
        }
        array[j + 1] = temp
    }
    console.log(array)
}
insertionSort();


