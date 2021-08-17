//jQuery

$(document).ready(function(){

    /* Configuração para a chamda de uma página para outra através dos botões */

    $('#cadastro').on('click', function(){
        $('.page1').hide();
        $('.page2').show(800);
    })
    $('#temcadastro').on('click', function(){
        $('.page2').hide();
        $('.page1').show(800);
    })
    $('#esquecisenha').on('click', function(){
        $('.page1').hide();
        $('.page3').show(800);
    })
    $('#voltar').on('click', function(){
        $('.page3').hide();
        $('.page1').show(800);
    })

    /*Configuração da máscara dos inputs */

    $('#masktelefone').mask('(00) 0 0000-0000')


    /*Configuração para mostrar e ocultar senha dos inputs */

    $('.olho1').on('click', function(){
        $('.iconeSenha').hide();
        $('.iconeSenha2').show();

        $('.senha').attr('type', 'text');
    })

    $('.olho2').on('click', function(){
        $('.iconeSenha2').hide();
        $('.iconeSenha').show();

        $('.senha').attr('type', 'password');
    })
})

/*Validação de e-mail */

const botaoEntrar = document.getElementById('btnEntrar');

botaoEntrar.addEventListener('click', function(evente){

    evente.preventDefault();

    const emailLogin = document.getElementById('emaillogin');

    const senhaLogin = document.getElementById('senhalogin');

    if(emailLogin.value == ''){
        emailLogin.classList.add('erroinput')
    }else{
        emailLogin.classList.remove("erroinput");
    }

    if(emailLogin.value.indexOf("@") == -1 || emailLogin.value.indexOf('.') == -1 || (emailLogin.value.indexOf('.') - emailLogin.value.indexOf('@') == 1)){
        emailLogin.classList.add('erroinput')
    }else{
        emailLogin.classList.remove('erroinput');
        emailLogin.classList.add('validinput');
    }

    if(senhaLogin.value == "" && senhaLogin.value.length <= 5){
        senhaLogin.classList.add('erroinput')
    }else{
        senhaLogin.classList.remove('erroinput')
        senhaLogin.classList.add('validinput')
    }


})

/*Validação da área de  cadastro */

const finalizaCadastro = document.getElementById('finalizarcadastro')

finalizaCadastro.addEventListener('click', function(){
    
    const nome = document.getElementById('seunome')
    const numeroCelular = document.getElementById('masktelefone')
    const emailCadastro = document.getElementById('emailcadastro')
    const senhaCadastro = document.getElementById('senhacadastro')
    const senhaCadastro2 = document.getElementById('senhacadastro2')
    const caixa = document.getElementById('caixa-checkbox')

    if(nome.value =='' || !isNaN(nome.value)){
        nome.classList.add('erroinput')
    }else{
        nome.classList.remove('erroinput')
    }

    if(numeroCelular.value == ''){
        numeroCelular.classList.add('erroinput')
    }else{
        numeroCelular.classList.remove('erroinput')
    }

    if(emailCadastro.value == ''){
        emailCadastro.classList.add('erroinput')
    }else{
        emailCadastro.classList.remove('erroinput')
    }

    if(emailCadastro.value.indexOf("@") == -1 || emailCadastro.value.indexOf('.') == -1 || (emailCadastro.value.indexOf('.') - emailCadastro.value.indexOf('@') == 1)){
        emailCadastro.classList.add('erroinput')
    }else{
        emailCadastro.classList.remove('erroinput')
    }

    if(senhaCadastro.value == ''){
        senhaCadastro.classList.add('erroinput')
    }

    if(senhaCadastro2.value == ''){
        senhaCadastro2.classList.add('erroinput')
    }
    
})

/*Validação recupera e-mail */

const btnRecuperaEmail = document.getElementById('enviarecuperaemail')

btnRecuperaEmail.addEventListener('click', function(e){

    e.preventDefault();

    const recuperaEmail = document.getElementById('recuperaemail')

    if(recuperaEmail.value ==''){
        recuperaEmail.classList.add('erroinput')
    }else{
        recuperaEmail.classList.remove('erroinput')
    }

    if(recuperaEmail.value.indexOf("@") == -1 || recuperaEmail.value.indexOf('.') == -1 || (recuperaEmail.value.indexOf('.') - recuperaEmail.value.indexOf('@') == 1)){
        recuperaEmail.classList.add('erroinput')
    }else{
        recuperaEmail.classList.remove('erroinput')
    }

})
