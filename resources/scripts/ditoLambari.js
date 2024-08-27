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
            $(activeLink[i]).closest("li").css('background-color', 'rgb(1 118 112)');
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

        /* Fake DataBase */
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
        /* first select */
        pratos.forEach(prato => {
            $('#productRow0').find('select').append('<option value="' + prato.id + '">' + prato.title + '</option>')
        });
        /* validate int values */
        $(document).on('input change', '.quantidade', function() {
            if (parseInt($(this).val()) < 1 ) {
                $(this).val('1')
            }
            $(this).val($(this).val().replace(/[^0-9]/g, ''));
        });
        $(document).on('click', function(e) {
            var quantidade = $(".quantidade");
            if(!quantidade.is(e.target) && quantidade.has(e.target).length === 0) {
                // quantidade.hide(); 
                $('.quantidade').each(function(index, quantity) {
                    if (parseInt($(quantity).val()) < 1 ) {
                        $(quantity).val('1')
                    }
                });
            }
        });
        /* index of dynamic product create */ 
        let productRowControl = 0;

        $(document).on('click', '.new-item', function(e){
            e.preventDefault;
            
            let newRow = $('#productExample').html();
            $('.itens').append('<div id="productRow'+(productRowControl+1)+'" class="productRow form-group"></div>')
            $('#productRow'+(productRowControl+1)).html(newRow);
            
            pratos.forEach(prato => {
                $('#productRow'+(productRowControl+1)).find('select').append('<option value="' + prato.id + '">' + prato.title + '</option>')
            });
            
            $('#productRow'+(productRowControl)).find('.new-item').remove();
            $('#productRow'+(productRowControl+1)).append('<button class="new-item form-control mt-3 btn btn-primary">Adicionar Produto</button>');
            
            productRowControl ++;
            
            reloadValues();
        });

        $(document).on('click', '.delete-item', function(e){
            e.preventDefault;

            let id = parseInt($(this).closest('div.productRow').attr('id').substring(10));
            $(this).closest('div.productRow').remove();
            
            let products = $('.productRow');
            for (let i = id; i < products.length; i++) {
                const element = $(products[i]).attr('id', 'productRow'+id);
                id++;
            }
            productRowControl --;
            reloadValues();
        });

        function reloadValues(){
            let total = [];
            $('.productRow').each(function(index, product) {
                let productId = parseInt($(this).find('select[name="products[]"]').val());
                let productDBValues = pratos.find(prato => prato.id === productId);

                total += productDBValues.value*parseInt($(product).find('input.quantidade').val());
                console.log(total);
            });
        }

        // função javascript puro que foi utilizada console.log(pratos.find(prato => prato.id === 3).title);
        console.log(pratos.find(prato => prato.id === 3).title)
});