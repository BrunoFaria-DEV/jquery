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
        $(this).find('img').css({'width':  '110%', 'height': '110%'});
    });
    $('.receitas').on('mouseleave', function (e) {
        e.preventDefault();
        $(this).find('img').css({'width':  '100%', 'height': '100%'});
    });
    $('.receitas').trigger("mouseleave");

    /////////////////////////////////////////////////////////////////////////////////
    ////                            PEDIDOS.HTML EVENTS                         ////
    /////////////////////////////////////////////////////////////////////////////////
        const pratos = [
            {
                'id' : 1,
                'title' : 'Pudim de Leite',
                'description' : 'Pudim de leite com calda de caramelo.',
                'value' : 33.50
            },
            {
                'id' : 2,
                'title' : 'Bolo de Chocolate',
                'description' : 'Bolo de chocolate com calda de chocolate.',
                'value' : 55.97
            },
            {
                'id' : 3,
                'title' : 'Ventrecha de Pacu',
                'description' : 'Ventrecha de Pacu frita com arros, batata frita, farofa de banana e salada.',
                'value' : 155.77
            },
            {
                'id' : 4,
                'title' : 'Pintado Assado',
                'description' : 'Ventrecha de Pacu frita com arros, batata frita, farofa de banana e salada.',
                'value' : 253.33
            },
            {
                'id' : 5,
                'title' : 'Licor de Caju',
                'description' : 'Ventrecha de Pacu frita com arros, batata frita, farofa de banana e salada.',
                'value' : 53.33
            },
        ];

        pratos.forEach(prato => {
            $('#product0').append('<option value="' + prato.id + '">' + prato.title + '</option>')
        });

        $('.quantidade').on('input', function() {
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });

        let row = 1;

        $('.new-item').on('click', function(e){
            e.preventDefault;
            $(this).closest()
        });

        // função javascript puro que foi utilizada console.log(pratos.find(prato => prato.id === 3).title);
});