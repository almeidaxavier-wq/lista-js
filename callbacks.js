function processar(msg, id, func){
    console.log(msg)
    setTimeout(func, 3000, id)
    console.log("Inicializando dual boot")

}

processar("Inicializando sistema", 0, (id) => {
    console.log("Processo "+ id +" finalizado!")

})
