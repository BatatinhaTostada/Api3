//TEMPO

async function getWeather() {
    //var q pega o valor do input
    var cidade = document.getElementById('cidade').value


    //conectando a API
    var resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`)

    //var para consumir o json do item temp
    var TempCelsius = resposta.data.main.temp;

    console.log(TempCelsius)
    //imprimir na tela FRONT END
    document.getElementById('temperatura').innerHTML = `A temperatura atual de ${cidade} é: ${TempCelsius.toFixed(0)} °C`
}
//chamar função
getWeather()