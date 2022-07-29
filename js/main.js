function convertir() {
    let valore = parseInt(document.getElementById("valor").value)
    let resultado = 0
    const dolar = 223.99
    const euro = 223.575
    if (document.getElementById("uno").checked) {
        resultado = valore / dolar
        alert('El valor es: $' + resultado.toFixed(2))
    }
    else if (document.getElementById("dos").checked){
        resultado = valore / euro
        alert('El valor es: ' + resultado.toFixed(2))
    }
    else{
        alert('Debes completar correctamente el formulario')
    }

    formulario.reset()

    return
}


function primos(){
    let n = parseInt(document.getElementById("num").value)

    let con = 0
    
        for (let i = 1; i <= n; i++) {
            if (n % i == 0) {
                con++
            }
        }
        if (con == 2) {
            alert('El número es primo')
        } 
        else if (con > 2) {
            alert('El número no es primo')
        }
        else{
            alert('Debes completar correctamente el formulario')
        }

        formularioDos.reset()

        return 
}


function Calcular() {
    let monto_ini = 0
    let desc = 0
    let total_desc =0

    monto_ini = document.getElementById('monto_inicial').value
    desc = document.getElementById('descuento').value


    total_desc = (monto_ini * desc)/100

    if (total_desc != 0) {
        alert('Su descuento es: ' + total_desc)
    } else {
        alert('Debe llenar los campos para que podamos calcular el descuento que desea obtener')
    }


    formularioTres.reset()

  return

}

const servicios = ['Esculpida', 'Esmaltada', 'Kipping']

servicios.push('Art Nail')

servicios.unshift('Esmaltado Sintetico')

for (let i=0; i < servicios.length ; i++){
    console.log('Servicio: '+ servicios[i])
}


console.log(servicios)


let objeto1 = {
    'propiedad': 'valor',
    'propiedad2': 2,
    'propiedad3': true,
    'metodo': function(){
        console.log('hola')
    }
}

objeto1.metodo()

function sumar(num1, num2){
    return num1+num2
}
function restar(num1, num2){
    return num1-num2
}
function dividir(num1, num2){
    return num1/num2
}
function multiplicar(num1, num2){
    return num1*num2
}

     
function calculadora(operacion, num1, num2){
    let resultado = operacion(num1, num2)
    
    return resultado
}

console.log(calculadora(sumar, 15,15))
console.log(calculadora(restar, 20,10))
console.log(calculadora(dividir, 100,5))
console.log(calculadora(multiplicar, 3,15))

const comidas = [
    {'nombre': 'Hamburguesa', 'valor': 1000},
    {'nombre': 'Tacos', 'valor': 1200},
    {'nombre': 'Pizza de muzza', 'valor': 800},
    {'nombre': 'tarta individuals', 'valor': 500}
]

const comidasVal = comidas.find( (e) => e.valor < 800)

console.log(comidasVal)