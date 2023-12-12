const senha = document.getElementById('senha');
const spanOlhos = document.getElementById('visibilidade');

spanOlhos.addEventListener('click', ()=>{

    if(senha.type == 'password') {
        senha.type = 'text';
        spanOlhos.innerHTML = '<span class="material-symbols-outlined">visibility_off </span>'
    }
    else{
        senha.type = 'password';
        spanOlhos.innerHTML = '<span class="material-symbols-outlined">visibility</span>'
        
    }
})