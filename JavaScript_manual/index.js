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