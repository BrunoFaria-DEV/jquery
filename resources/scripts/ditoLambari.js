$(function() {

    // HEADER COMPONENT
    let header = '<hgroup class="d-flex"><div class="topbar-legend w-50">'
        header += '<h1>Site destinado a divulgar o trabalho de Dito Lambari</h1></div>'
        header +=  '<div class="social w-50"><a href="https://github.com/BrunoFaria-DEV/jquery" class="social-link">'
        header += '<img src="resources/img/github-ligth.png" alt=""></a></div></hgroup>'
        header +=  '<nav><a class="w-25" href="/"><img class="brand" src="resources/img/brand.png" alt=""></a>'
        header += '<ul class="w-50"><li><a class="links" href="index.html">Home</a></li>'
        header += '<li><a class="links" href="sobre.html">Sobre</a></li>'
        header += '<li><a class="links" href="receitas.html">Receitas</a></li>'
        header += '<li><a class="links" href="contato.html">Contato</a></li>'
        header += '<li><a class="links" href="pedidos.html">Pedidos</a></li></ul><div class="w-25"></div></nav>';
    $('header.topo').html(header);
    
    // ACTIVE LINKS
    let activeLink = $('.links');
    for (let i = 0; i < activeLink.length; i++){
        if ($(location).attr('href').toLowerCase().includes($(activeLink[i]).attr('href'))) {
            $(activeLink[i]).closest("li").css('background-color', '#00920c');
        }
    }

    // IMG CARD EVENT
    $('.receitas').on('mouseenter', function (e) {
        e.preventDefault();
        $(this).find('img').fadeIn();
    });
    $('.receitas').on('mouseleave', function (e) {
        e.preventDefault();
        $(this).find('img').fadeOut();
    });
    $('.receitas').trigger("mouseleave");

    /////////////////////////////////////////////////////////////////////////////////
    ////                            PEDIDOS.HTML EVENTS                         ////
    /////////////////////////////////////////////////////////////////////////////////
        
});