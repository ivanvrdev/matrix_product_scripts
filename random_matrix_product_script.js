const getRandomInteger = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + 1
}

const getRandomMatrix = () =>{

    let matrix = []

    const rows = getRandomInteger(1, 10)
    const columns = getRandomInteger(1, 10)

    for (let i = 0; i < rows; i++) {
        let row = []
        for (let j = 0; j < columns; j++) {
            row[j] = getRandomInteger(1, 100)
        }
        matrix[i] = row
    }

    return matrix
}

const getArraysToMultiply = () =>{
    //definimos las matrices
    let [matrix1, matrix2] = []
    //cargamos filas y columnas
    do{
        matrix1 = getRandomMatrix()
        matrix2 = getRandomMatrix()
        //comparación entre el número de columnas del primero y filas del segundo
    }while (!(matrix1[0].length === matrix2.length))

    return [matrix1, matrix2]
}

const multiplyArrays = (matrix1, matrix2) =>{
    let productMatrix = []

    for (let x = 0; x < matrix1.length; x++) {
        //posicionar en la fila
        productMatrix[x] = []
        for (let y = 0; y < matrix2[0].length; y++) {
            //posicionar en la columna
            let product = 0
            for (let z = 0; z < matrix1[0].length; z++) {
                //recorrer los elementos de la fila de la primera matriz y los de la columna de la segunda matriz
                product += matrix1[x][z] * matrix2[z][y]
            }
            productMatrix[x][y] = product
        }
    }

    return productMatrix
}

const [matrix1, matrix2] = getArraysToMultiply()

console.log("matriz 1: ", matrix1)
console.log("matriz 2: ", matrix2)
console.log("matriz producto: ", multiplyArrays(matrix1, matrix2))

//Vazquez Ramirez Iván Gastón || 30-03-2022
