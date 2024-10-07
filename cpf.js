
//API cpf
//Função para comsumit a API
function Buscar() {
    //Carrega o JSON e processqa os dados
    fetch('https://raw.githubusercontent.com/BatatinhaTostada/api-cpf/refs/heads/main/cpf.json').then(resposta => resposta.json()).then(corpo => {
        var identificador = document.getElementById('valor').value;
        var encontrado = false;
   
        corpo.forEach(pessoa => {
            if (identificador == pessoa.cpf) {
                var link1 = `<a href="${pessoa.link}">Veja esse momento</a>`;
                 document.getElementById('imagem').innerHTML = pessoa.imagem;
                 document.getElementById('nome').innerHTML = pessoa.nome;
                 document.getElementById('sobrenome').innerHTML = pessoa.sobrenome;
                 document.getElementById('pais').innerHTML = pessoa.pais;
             
                 document.getElementById('erro').innerHTML = "";
                 encontrado = true;
            }
        })
        if (!encontrado) {
            document.getElementById('erro').innerHTML = "Registro inválido";
        }
        console.log(corpo)
    });
}