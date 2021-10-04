$('.login').on('mouseover', function () {
    $('.login_form', this).show();
}).on('mouseout', function (e) {
    if (!$(e.target).is('input')) {
        $('.login_form', this).hide();
    }
});

$('input').on('hover'),function(){
    
};