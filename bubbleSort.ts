const arrayToSort = [15, 0, 45, 3, 67, 34, 12, 345, 657, 6, 7, 7, 67, 8, 88, 8, 78,9, 89, 7, 97, 9]

const bubbleSort = (arrayToSort: number[]) => {
    let tmp;
    // we need 2 loops here because we need to repeat the pattern n times depending on the array's length
    // if we remove one loop, the array will not be sorted because it will stop after moving the biggest number at the end of the array
    for(let i = 0; i < arrayToSort.length; i++) {
        for (let j = 0; j < arrayToSort.length; j++) {
            // si la valeur de l index actuel est superieur au prochain index, je dois permuter les deux valeurs.
            // pour effectuer une permutation, je dois sauvegarder le contenu de l index actuel dans une var temp
            // puis je dois remplacer la valeur de l index courant par le suivant
            // et je dois ensuite assigner a l index suivant, la valeur stocke dans le variable temporaire
            if (arrayToSort[j] > arrayToSort[j + 1]) {
                // tmp = 15
                tmp = arrayToSort[j]
                // arrayToSort[i] = 0
                arrayToSort[j] = arrayToSort[j + 1]
                // arrayToSort[i + 1] = 15
                arrayToSort[j + 1] = tmp
            }
        }
    }
    return arrayToSort
}


const sortedArray = bubbleSort(arrayToSort)

console.log(sortedArray)