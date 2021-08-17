//jQuery

$(document).ready(function(){

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


    /*Configuração para mostrar e ocultar senha dos inputs */
    
    $('.olho1').on('click', function(){
        $('.iconeSenha').hide();
        $('.iconeSenha2').show();

        $('#senha').attr('type', 'text');
    })

    $('.olho2').on('click', function(){
        $('.iconeSenha2').hide();
        $('.iconeSenha').show();

        $('#senha').attr('type', 'password');
    })
})