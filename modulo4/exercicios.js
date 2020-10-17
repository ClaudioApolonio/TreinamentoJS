function checaIdade(idade) {
    var resultado = new Promise(function (resolve,reject) {        
        if (idade >= 18){
            setInterval(resolve,2000,"Maior de idade");
        } else {
            setInterval(reject,2000,"Menor de idade");
        }
    });
    return resultado;
}

checaIdade(15)
    .then(function (resolve) {
        console.log(resolve);
    })
    .catch(function (reject) {
        console.warn(reject);
    })