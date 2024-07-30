$(function() {
    $('.receitas').on('mouseenter', function (e) {
        e.preventDefault();
        $(this).find('img').fadeIn();
    });
    $('.receitas').on('mouseleave', function (e) {
        e.preventDefault();
        $(this).find('img').fadeOut();
    });
    $('.receitas').trigger("mouseleave");
    

    let activeLink = $('.links');

    
    for (let i = 0; i < activeLink.length; i++){
        if ($(location).attr('href').toLowerCase().includes($(activeLink[i]).attr('href'))) {
            $(activeLink[i]).closest("li").css('background-color', '#00920c');
        }
    }
});