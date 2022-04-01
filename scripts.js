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

const showMatirxValuesForm = (rows, cols) =>{
    let content = document.getElementById("content")
    //título
    let title = document.createElement('h2')
    title.innerHTML = "Inserte los valores de la matriz"
    content.append(title)
    //tabla
    let table = document.createElement('table')
    let thead = document.createElement('thead')
    //celda de la esquina
    let trThead = document.createElement('tr')
    let firstTh = document.createElement('th')
    firstTh.innerHTML = "#"
    trThead.append(firstTh)
    thead.append(trThead)
    //carga de los encabezado de las columnas
    for (let i = 0; i < cols; i++) {
        let th = document.createElement('th')
        th.innerHTML = `Columna ${i + 1}`
        trThead.append(th)
    }
    table.append(thead)
    //carga de las filas

    let tbody = document.createElement('tbody')

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr')
        //encabezado de la fila
        let th = document.createElement('th')
        th.innerHTML = `Fila ${i + 1}`
        tr.append(th)

        for (let j = 0; j < cols; j++) {
            //celda
            let td = document.createElement('td')
            //input
            let input = document.createElement('input')
            input.type = "Number"
            input.placeholder = `columna ${j + 1}`
            //agregamos input a la celda
            td.append(input)
            //agregamos celda a la fila
            tr.append(td)
        }
        //agregamos fila al cuerpo de la tabla
        tbody.append(tr)
    }
    //agregamos cuerpo a la tabla
    table.append(tbody)
    //renderizamos tabla
    content.append(table)
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

//lugar donde se van a renderizar los componentes de la página
const contentDiv = document.getElementById('content')
//botón para empezar
const startButton = document.getElementById('start_button')
//formulario para indicar las dimesiones de las matrices
const dimensionForm = document.getElementById('dimension_form')
//no mostrar el formulario al renderizar la página

dimensionForm.remove()

startButton.addEventListener("click", ()=>{
    startButton.remove()
    contentDiv.append(dimensionForm)
})

dimensionForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    dimensionForm.remove()
    showMatirxValuesForm(2, 4)
})



// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
// const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix3 = multiplyArrays(matrix1, matrix2)

// showMatrix("matriz1", matrix1)
// showMatrix("matriz2", matrix2)
// showMatrix("matriz3", matrix3)

