//obtener dimensiones de las matrices
//validar si las matrices son multiplicables
//cargar las matrices
//multiplicar las matrices

const showMatrix = (tagId, matrix) =>{
    let documentTag = document.getElementById(tagId)
    let table = document.createElement("table")
    
    matrix.forEach(row =>{
        let tr = document.createElement('tr')
        row.forEach(item => {
            let td = document.createElement('td')
            td.innerHTML = item
            tr.append(td)
        })
        table.append(tr)
    })
    
    documentTag.append(table)
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

const contentDiv = document.getElementById('content')

const startButton = document.getElementById('start_button')

startButton.addEventListener("click", ()=>{
    startButton.remove()
})

// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
// const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix3 = multiplyArrays(matrix1, matrix2)

// showMatrix("matriz1", matrix1)
// showMatrix("matriz2", matrix2)
// showMatrix("matriz3", matrix3)

