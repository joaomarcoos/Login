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
})