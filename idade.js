// 09 - Faça um algoritmo que receba a idade do usuário e informe se ele é criança (0-12),
// adolescente (13-17), adulto (18-59) ou idoso (60+).

const idade = 15
const checar_idade = (idade) => {
    const idade_floor = Math.floor(idade)
    if (idade_floor <= 12){
        return "criança"
    } else if (18 > idade_floor && idade_floor > 12){
        return "adolescente"
    } else if (60 > idade_floor && idade_floor > 17){
        return "adulto"
    } else{
        return 'idoso'
    }

}

console.log(checar_idade(18)) //Exemplos
console.log(checar_idade(30))
console.log(checar_idade(100))
