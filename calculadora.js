

while(true) {

    let error = false

    function realizarOperacion(num1, num2, operacion) {
        if (operacion == "suma") {
            return num1 + num2        
        } else if (operacion == "resta") {
            return num1 - num2
        }else if (operacion == "multi") {
            return num1 * num2
        } else if (operacion == "division") {
            return num1 / num2
        } else {
            return error = true
        }

    }

    let num1 = parseInt(prompt("Ingrese el primer numero: "));
    let num2 = parseInt(prompt("Ingrese el segundo numero: "));

    let operacion = prompt("Ingresa una operacion (suma, resta, multi, division): ");

    let resultado = realizarOperacion(num1, num2, operacion);

    if (error) {
        console.log("Error... Ingrese los datos correctamente.")    
    } else {
        console.log("El resultado de la operacion es " + resultado);
        res = prompt("Desea realizar otra operacion? si/no: ")
        if (res == "no") {break}  
    }

}
console.log("Has salido de la calduladora")