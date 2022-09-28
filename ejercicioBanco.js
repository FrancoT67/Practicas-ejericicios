/**
 * Armar el algortmo para un cajero de banco. Este posee billetes de: 50,20,10,5 y 1. Con esto,el cajero debe:
 * -Aceptar el monto de entrada(INT) que representa el monto a retirar.
 * -Calcular y mostrar cuantos billetes de cada monto entrega en total.
 *  EJEMPLO:
 *       Monto a retirar: 221
 *       Cantidad de billetes de 50: 4
 *       Cantidad de billetes de 20: 1
 *       Cantidad de billetes de 10: 0
 *       Cantidad de billetes de 5: 0
 *       Cantidad de billetes de 1: 1
 */

function comprobarDinero(a){
    let billetes=[50,20,10,5,1]
    let resto=0
    let cant=[]
    let resultado=[]
    if((a === a.toString()) || (a === true)|| (a === false)){
        console.log('ingrese un numero entero')
    }else{
        console.log(`Monto a retirar:${a}`)
        for(i=0;i<billetes.length;i++){
            resultado.push(Math.floor(a/billetes[i]))
            resto=a%billetes[i]
            if(resto>0){
                a=resto
            }
            console.log(`Cantidad de billetes de ${billetes[i]}: ${resultado[i]}`)
        }
        

    }

        
}

let valor=220
console.log(comprobarDinero(valor))