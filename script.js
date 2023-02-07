$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_li_main').toggleClass('active');
        $("body").toggleClass('lock');
    });
});