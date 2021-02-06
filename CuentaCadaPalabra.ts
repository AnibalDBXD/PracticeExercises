const text:string = "Buenas! Solo una puntualización: como lo que buscas es que el programa sea lo más optimo posible, no tiene sentido que llames a la funcion 'normalize' 2 veces en cada iteracion. Lo suyo sería que la ejecutaras una única vez asignando su resultado a una variable (normalizedWord, por ejemplo) y de ahí en adelante uses dicha variable en lugar de volver a llamar a la función de nuevo. Saludos!";

function normalize(words:string):string {
    return words.toLowerCase().replace(/[.!¡,:()'"]/g, "");
}

function separateWords(text:string) {
    const dictionary = {};

    const separateText:string[] = text.split(" ");

    for(let words of separateText){
        if(normalize(words) in dictionary){
            ++dictionary[normalize(words)]
        }
        else{
            dictionary[normalize(words)] = 1;
        }
    }

    return dictionary;
}

console.log(separateWords(text));