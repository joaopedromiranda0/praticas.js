const notaPrimeiroBi = 8;
const notaSegundoBi = 6.3;
const notaTerciroBi = 7;
const notaQuartoBi = 9.3;

let media = (notaPrimeiroBi + notaSegundoBi + notaTerciroBi + notaQuartoBi) / 4;

if (media >= 7) {
    media += media *0.1;

}
console.log(`a média é ${media.toFixed(2)}`);

