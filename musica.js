var json =`{
    "id": 1,
    "serie": "Brooklyn Nine-nine",
    "temporadas": "Temp: 8",
    "genero": "Sitcom",
    "imagem": "<img url'img/brooklyn 99.jpg' width='200px'>",
    "link": "https://www.netflix.com/br/title/70281562"
}`;
var json2 =`{
    "id": 2,
    "serie": "A maldição da Residência Hill",
    "temporadas": "Temp: 1",
    "genero": "Terror",
    "imagem": "<img url 'img/hill1.jpg' width='200px'>",
    "link": "https://www.netflix.com/br/title/80189221"
}`;
var json3 =`{
    "id": 3,
    "serie": "GOT",
    "temporadas": "Temp: 8",
    "genero": "Drama",
    "imagem": "<img url'img/game-of-thrones-vendas.jpg' width='200px'>",
    "link": "https://www.max.com/br/pt/shows/game-of-thrones/4f6b4985-2dc9-4ab6-ac79-d60f0860b0ac"
}`;
var json4 =`{
    "id": 4,
    "serie": "Supernatural",
    "temporadas": "Temp: 15",
    "genero": "Drama",
    "imagem": "<img url'img/supernatural.jpg' width='200px'>",
    "link": "https://www.max.com/br/pt/shows/supernatural/759711ff-f46f-4c29-9134-84e247e0e7da"
}`;
var json5 =`{
    "id": 5,
    "serie": "Breaking Bad",
    "temporadas": "Temp: 5",
    "genero": "Drama",
    "imagem": "<img url'img/breaking bad' width='200px'>",
    "link": "https://www.netflix.com/br/title/70143836"
}`;
var json6 =`{
    "id": 6,
    "serie": "American Horror Story",
    "temporadas": "Temp: 12",
    "genero": "Terror",
    "imagem": "<img url'img/ahs' width='200px'>",
    "link": "https://www.disneyplus.com/pt-br/series/american-horror-story/4yFvVceupA9J"
}`;
//converter o texto STRING para JSON
var dados1 = JSON.parse(json);
var dados2 = JSON.parse(json2);
var dados3 = JSON.parse(json3);
var dados4 = JSON.parse(json4);
var dados5 = JSON.parse(json5);
var dados6 = JSON.parse(json6);


//Link com JQUERY
var link1 = `<a href="${dados1.link}">Assista agora</a>`;
var link2 = `<a href="${dados2.link}">Assista agora</a>`;
var link3 = `<a href="${dados3.link}">Assista agora</a>`;
var link4 = `<a href="${dados4.link}">Assista agora</a>`;
var link5 = `<a href="${dados5.link}">Assista agora</a>`;
var link6 = `<a href="${dados6.link}">Assista agora</a>`;


function apertar1() {
    document.getElementById('imagem').innerHTML = dados1.imagem;
    document.getElementById('serie').innerHTML = dados1.serie;
    document.getElementById('temporadas').innerHTML = dados1.temporadas;
    document.getElementById('genero').innerHTML = dados1.genero;
    document.getElementById('link').innerHTML = link1;
}
function apertar2() {
    document.getElementById('imagem').innerHTML = dados2.imagem;
    document.getElementById('serie').innerHTML = dados2.serie;
    document.getElementById('temporadas').innerHTML = dados2.temporadas;
    document.getElementById('genero').innerHTML = dados2.genero;
    document.getElementById('link').innerHTML = link2;
}
function apertar3() {
    document.getElementById('imagem').innerHTML = dados3.imagem;
    document.getElementById('serie').innerHTML = dados3.serie;
    document.getElementById('temporadas').innerHTML = dados3.temporadas;
    document.getElementById('genero').innerHTML = dados3.genero;
    document.getElementById('link').innerHTML = link3;
}
function apertar4() {
    document.getElementById('imagem').innerHTML = dados4.imagem;
    document.getElementById('serie').innerHTML = dados4.serie;
    document.getElementById('temporadas').innerHTML = dados4.temporadas;
    document.getElementById('genero').innerHTML = dados4.genero;
    document.getElementById('link').innerHTML = link4;
}
function apertar5() {
    document.getElementById('imagem').innerHTML = dados5.imagem;
    document.getElementById('serie').innerHTML = dados5.serie;
    document.getElementById('temporadas').innerHTML = dados5.temporadas;
    document.getElementById('genero').innerHTML = dados5.genero;
    document.getElementById('link').innerHTML = link5;
}
function apertar6() {
    document.getElementById('imagem').innerHTML = dados6.imagem;
    document.getElementById('serie').innerHTML = dados6.serie;
    document.getElementById('temporadas').innerHTML = dados6.temporadas;
    document.getElementById('genero').innerHTML = dados6.genero;
    document.getElementById('link').innerHTML = link6;
}



console.log(dados1)
console.log(dados2)
console.log(dados3)
console.log(dados4)
console.log(dados5)
console.log(dados6)
