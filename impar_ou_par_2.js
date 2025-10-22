const lista = [10, 3, 4, 9, 23, 7, 5, 2]
let pares = []
let impares = []

for (item of lista){
    item % 2 == 0 ? pares.push(item): impares.push(item)

}

console.log("Pares ", pares)
console.log("Ímpares ", impares)
