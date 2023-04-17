// modo claro
const fundo = document.querySelector('.claro');
fundo.addEventListener('click', () => {
    fundo.classList.toggle('escuro');
    document.body.classList.toggle('black');
})

function gerarTabuada() {
    let numero = parseInt(document.getElementById('number').value);
    let tabela = document.getElementById('multiplication-table');

    tabela.innerHTML = '';

    for (let i = 1; i <= 15; i++) {
        let res = numero * i;
        let linha = `<tr><td> ${numero} X ${i}  = ${res} </td></tr>` ;
        tabela.innerHTML += linha;
    }
}