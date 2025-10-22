// Crie uma função que receba um número como parâmetro e retorne o seu quadrado.

const lista = [20, 30, 5, 6, 9, 19, 11]
const maior_que_10 = (lista) => {
    let array = []
    for (item of lista){
        item > 10 ? array.push(item): null

    }

    return array

}

console.log("Numeros maiores que 10: ", maior_que_10(lista))
