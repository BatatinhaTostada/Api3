//Conectar com a API utilizando o FETCH

fetch('https://raw.githubusercontent.com/BatatinhaTostada/test5/refs/heads/main/ecommerce.json').then(resposta => resposta.json()).then(corpo => {
    console.log(corpo)

    document.getElementById('imagem1').innerHTML = corpo.image1
    document.getElementById('nome1').innerHTML = corpo.nome1
    document.getElementById('preco1').innerHTML = corpo.price1

    document.getElementById('imagem2').innerHTML = corpo.image2
    document.getElementById('nome2').innerHTML = corpo.nome2
    document.getElementById('preco2').innerHTML = corpo.price2

    document.getElementById('imagem3').innerHTML = corpo.image3
    document.getElementById('nome3').innerHTML = corpo.nome3
    document.getElementById('preco3').innerHTML = corpo.price3

    document.getElementById('imagem4').innerHTML = corpo.image4
    document.getElementById('nome4').innerHTML = corpo.nome4
    document.getElementById('preco4').innerHTML = corpo.price4

    document.getElementById('imagem5').innerHTML = corpo.image5
    document.getElementById('nome5').innerHTML = corpo.nome5
    document.getElementById('preco5').innerHTML = corpo.price5

    document.getElementById('imagem6').innerHTML = corpo.image6
    document.getElementById('nome6').innerHTML = corpo.nome6
    document.getElementById('preco6').innerHTML = corpo.price6
})