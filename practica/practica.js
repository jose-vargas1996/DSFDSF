/* 
Titulo: Maquina dispensadora
Descripción: 
Se requiere escribir un programa que tenga  las opciones
con los siguientes productos:

1.Gaseosa : S/2.00
2.Papitas: S/3.00
3.Galleta: S/1.00
4.Agua Mineral: S/4.00

El usuario debera ingresar una opcion y luego deberá ingresar la moneda,
solo se admite un valor maximo de moneda de S./5.00.

El programa deberá retornar el vuelto y escribir en pantalla el producto 
que acaba de comprar. 

El programa debe reconocer si el monto de la moneda ingresada es menor al precio del producto elegido debera escribir en pantalla que el saldo es insuficiente.
*/

let precioGaseosa = 2
let precioPapitas = 3
let precioGalleta = 1
let precioAguaMineral = 4

producto = parseInt(prompt(`
==========================
1.Gaseosa: 🥤  S/2.00 
2.Papitas: 🍟 S/3.00
3.Galleta: 🍪 S/1.00
4.Agua Mineral: 🍶 S/4.00
==========================
Ingresa la opcion:
`))

moneda = parseInt(prompt('Ingresar la Moneda'))

if (producto === 1) {
    alert('acabas de comprar 01 🥤 gaseosa');
    if (moneda < precioGaseosa) {
        alert('Saldo insuficiente');
    } else {
        vuelto = moneda - precioGaseosa
        alert(`Tu Vuelto es: S/${vuelto}`)
    }
} else {
    if (producto === 2) {
        alert('acabas de comprar 01 🍟 papitas');
        if (moneda < precioPapitas) {
            alert('Saldo insuficiente');
        } else {
            vuelto = moneda - precioPapitas
            alert('tu vuelto es:  S/' + vuelto)
        }
    } else {
        if (producto === 3) {
            alert('acabas de comprar 01 🍪 galleta');
            if (moneda < precioGalleta) {
                alert('Saldo insuficiente');
            } else {
                vuelto = moneda - precioGalleta
                alert('tu vuelto es: S/' + vuelto)
            }
        } else {
            if (producto === 4) {
                alert('acabas de comprar 🍶 AguaMineral');
                if (moneda < precioAguaMineral){
                    alert('Saldo insuficiente');
                }else{
                    vuelto = moneda - precioAguaMineral
                    alert('tu vuelto es: S/' + vuelto)
                }
            }
        }
    }
}

