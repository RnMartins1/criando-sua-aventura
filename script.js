
const atual = '';
const proximoPasso = '';
let botao = document.querySelector('.meu-botao');
let paragrafos = document.querySelectorAll('p');



// Funções 


const avanca = document.querySelectorAll('.btn-proximo');

avanca.forEach(button => {
    button.addEventListener('click', function(){
        const atual = document.querySelector('.ativo');
        const proximoPasso = 'passo-' + this.getAttribute('data-proximo');

        atual.classList.remove('ativo');
        document.getElementById(proximoPasso).classList.add('ativo');

     })
})