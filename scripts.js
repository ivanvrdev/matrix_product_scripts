//obtener dimensiones de las matrices
//validar si las matrices son multiplicables
//cargar las matrices
//multiplicar las matrices

let matrices = []

//lugar donde se van a renderizar los componentes de la página
const contentDiv = document.getElementById('content')
//botón para empezar
const startButton = document.getElementById('start_button')
//formulario para indicar las dimesiones de las matrices
const dimensionForm = document.getElementById('dimension_form')

const arraysValuesForm = document.getElementById("values_form_matrix")

//no mostrar el formulario al renderizar la página
dimensionForm.remove()
arraysValuesForm.remove()

const validateDimensionForm = (colsMatrix1, rowsMatrix2) => {
    // console.log(parseInt(colsMatrix1) === parseInt(rowsMatrix2))

    return parseInt(colsMatrix1) === parseInt(rowsMatrix2)
}

const showAlert = (message, color) =>{
    let divAlert = document.getElementById("alert")

    let alert = document.createElement('p')
    alert.id = "alert"
    alert.innerHTML = message
    alert.className = `alert alert-${color}`

    divAlert.append(alert)

    setTimeout(()=>{
        divAlert.remove()
    }, 2000)
}

const showMatrix = (tagId, matrix) =>{
    let documentTag = document.getElementById(tagId)
    let table = document.createElement("table")
    table.className = "matrix-table"
    
    matrix.forEach(row =>{
        let tr = document.createElement('tr')
        row.forEach(item => {
            let td = document.createElement('td')
            td.innerHTML = item
            td.className = "matrix-td"
            tr.append(td)
        })
        table.append(tr)
    })
    documentTag.append(table)
}

const showMatirxValuesForm = (matrixNumber, rows, cols) =>{
    //título
    let title = document.createElement('h2')
    title.innerHTML = `Inserte los valores de la matriz ${matrixNumber}`
    
    //tabla
    let table = document.createElement('table')
    table.className = "table table-borderless"

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
            input.className = "form-control"
            input.placeholder = `columna ${j + 1}`
            input.id = `matriz_${matrixNumber}_fila_${i + 1}_columna_${j+1}`
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

    arraysValuesForm.append(title)
    arraysValuesForm.append(table)
}

const getArraysValues = (matrixNumber, rows, cols) =>{
    let matrix = []

    for (let i = 0; i < rows; i++) {
        let row = []
        for (let j = 0; j < cols; j++) {
            let item = document.getElementById(`matriz_${matrixNumber}_fila_${i + 1}_columna_${j + 1}`).value
            row[j] = item
        }
        matrix[i] = row
    }

    return matrix
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


//eventos
startButton.addEventListener("click", ()=>{
    startButton.remove()
    contentDiv.append(dimensionForm)
})

dimensionForm.addEventListener("submit", (e)=>{
    e.preventDefault()

    const rowsMatrix1 = document.getElementById("rows_matrix_1").value
    const colsMatrix1 = document.getElementById("cols_matrix_1").value
    const rowsMatrix2 = document.getElementById("rows_matrix_2").value
    const colsMatrix2 = document.getElementById("cols_matrix_2").value

    matrices[0] = {rows: rowsMatrix1, cols: colsMatrix1}
    matrices[1] = {rows: rowsMatrix2, cols: colsMatrix2}

    if(validateDimensionForm(colsMatrix1, rowsMatrix2)){
        //saca el formulario de las dimensiones
        dimensionForm.remove()
        //muestra los formularios de los valores de las matrices
        showMatirxValuesForm(1, rowsMatrix1, colsMatrix1)
        showMatirxValuesForm(2, rowsMatrix2, colsMatrix2)

        let button = document.createElement('button')
        button.type = "submit"
        button.className = "btn btn-primary"
        button.innerHTML = "Calcular"

        let divButton = document.createElement("div")
        divButton.className = "d-grid"

        divButton.append(button)
        arraysValuesForm.append(divButton)

        contentDiv.append(arraysValuesForm)
        
    }else{
        showAlert("Deben coincidir las columnas de la primera matriz con las filas de la segunda para que sean mulpilicables", "danger")
    }
})

arraysValuesForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    matrices[0].value = getArraysValues(1, matrices[0].rows, matrices[0].cols)
    matrices[1].value = getArraysValues(2, matrices[1].rows, matrices[1].cols)
    let productMatrix = multiplyArrays(matrices[0].value, matrices[1].value)

    arraysValuesForm.remove()

    let divMatrix1 = document.getElementById("matriz1")
    let divMatrix2 = document.getElementById("matriz2")
    let divMatrix3 = document.getElementById("matriz3")

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")

    p1.innerHTML = "Matriz 1"
    p2.innerHTML = "Matriz 2"
    p3.innerHTML = "Matriz producto"

    divMatrix1.append(p1)
    divMatrix2.append(p2)
    divMatrix3.append(p3)

    showMatrix("matriz1", matrices[0].value)
    showMatrix("matriz2", matrices[1].value)
    showMatrix("matriz3", productMatrix)
})





//dividir la navegación en secciones consecutivas que se pasen con un "siguiente"

// const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]
// const matrix2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// const matrix3 = multiplyArrays(matrix1, matrix2)

// showMatrix("matriz1", matrix1)
// showMatrix("matriz2", matrix2)
// showMatrix("matriz3", matrix3)

