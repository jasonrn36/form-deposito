/* Constante responsavel por chamar o formulário */
const form  = document.getElementById('form-deposito');

/* Aqui temos a função validaNome que está configurada */
/*para aceitar enviar o formulário apenas se estiver escrito dois nomes separadamente*/
function validaNome(nomeCompleto){
    const nomeCompletoArray = nomeCompleto.split(' ');
    return nomeCompletoArray.length >= 2;
}

/*Aqui o formuário chama a classe add.EventListener */
/*dentro dela temos a função 'submit' sendo chamada */
/*após a vírgula temos fuction(e) que chama a função*/
/*e.preventDefault() */
/* Isso previne que a página atualize quando clicamos*/
/*no botão enviar*/
form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();
    
    /* Declaração de variáveis do programa*/

    const nomeBeneficiario = document.getElementById('nomeCompleto');
    const numeroContaBeneficiário = document.getElementById('accont-number');
    const valorDeposito = document.getElementById('value-dep');
    const mensagemSucesso = `Montante de: ${valorDeposito.value} depositado para o cliente: ${nomeCompleto.value} - conta: ${numeroContaBeneficiário.value}`;

        formEValido = validaNome(nomeBeneficiario.value);
        if (formEValido) {
        alert(mensagemSucesso);
        } else {
            alert('O nome não está completo');
        }

})

console.log(form);


