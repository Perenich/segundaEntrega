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

