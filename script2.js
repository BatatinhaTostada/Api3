//DOLAR

fetch('https://economia.awesomeapi.com.br/last/USD-BRL').then(resposta =>{
    return resposta.json()
}).then(economia =>{
    console.log(economia)
    document.getElementById('valorDolar').innerHTML = economia.USDBRL.bid;
    document.getElementById('valorMaior').innerHTML = economia.USDBRL.high;
    document.getElementById('valorMenor').innerHTML = economia.USDBRL.low;
})