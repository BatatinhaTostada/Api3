//CEP

//preencher os inputs com função (arrow Functions)
const preencherFormulario = (endereco) => {
    document.getElementById("cep").value = endereco.cep;
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("estado").value = endereco.uf;
}
//auto preenchimento
const capValido = (cep) => {
    if (cep.lenght == 8) {
        return true;
    } else {
        return false;
    }

}

//buscar API
const PesquisaCep = async () => {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`;
    if(cepValido(cep)) {
        const dados = await fetch (url);
        const endereco = await dados.json();
        preencherFormulario(endereco);
    }           
} 
//chamar a função
document.getElementById("cep").addEventListener("focusout", PesquisaCep);
