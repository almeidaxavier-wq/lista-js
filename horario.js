let hora = 19
if (4 >= hora % 24 && hora % 24>= 23){
    console.log("Boa madrugada!")

} else if (12 > hora % 24 && hora % 24 > 4){
    console.log("Bom dia!")

} else if (18 > hora % 24 && hora % 24 > 12){
    console.log("Boa tarde!")

} else{
    console.log("Boa noite!")

}
