// Velocidade maxima 70
// A cada 5km acima da velocidade maxima, acrescenta 1 ponto a carteira.
// Usar o Math.floor para transformar o numero em inteiro nos pontos.
// Caso "pontos" seja maior que 12 => "Carteira suspensa"

let velMax = 70
let KmPorPonto = 5
let msg=""

let resultado = verificadorVel(84);
console.log(resultado)

let titulo = document.querySelector("#title");
titulo.innerHTML = resultado


function verificadorVel(velocidade){
    
    if(velocidade <= velMax){
        msg = "OK. Dentro do limite de velocidade";
    }
    else{
        
        let pontos = Math.floor((velocidade - velMax)/KmPorPonto);
        
        if(pontos < 12){
            msg = "Vc está acima da velocidade e recebeu "+ pontos +" pontos.";
        }
        else{
            msg = "12 pontos ou mais. Carteira suspensa"
        }
    }
    return msg
}