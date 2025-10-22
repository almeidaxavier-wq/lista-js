const soma = (a, b) =>{
    return a + b

}

const subtracao = (a, b) =>{
    return a - b

}

const multiplicacao = (a, b) =>{
    return a * b

}

const divisao = (a, b) =>{
    return a / b

}

const resto = (a, b) =>{
    return a % b

}

const seno = (a) =>{
    return Math.sin(a)

}

const cosseno = (a) => {
    return Math.cos(a)

}

const tangente = (a) => {
    return seno(a)/cosseno(a)

}


// Exemplo de operação: cos (2 + 3/5)
console.log(cosseno(soma(2,divisao(3, 5))))
