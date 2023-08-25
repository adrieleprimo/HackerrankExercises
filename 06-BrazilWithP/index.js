const palavras= [
    "aveia",
    "manha",
    "ave"];


    let primeiraLetra = "a";
    let segundaLetra = "v";
    let encontrado = false
    let i =0;
    let j =1;
    let duas = primeiraLetra+segundaLetra;
    for(palavra of palavras){
        if(palavra[i]=== primeiraLetra && palavra[j] === segundaLetra ){
            encontrado = true;
            console.log(palavra)
        }
    }

    if(encontrado === false){
        console.log("NENHUMA");
    }