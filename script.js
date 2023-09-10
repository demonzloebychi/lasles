$(document).ready(function(){
    $('.header_burger').click(function(event){
        $('.header_burger, .header_li_main').toggleClass('active');
        $("body").toggleClass('lock');
    });
});


const anchors = document.querySelectorAll("a[href*='#']")

for (let anchor of anchors){
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const blockID = anchor.getAttribute('href')
        document.querySelector(' ' + blockID).scrollIntoView({
            behavior: "smooth",
            block: 'start'
        })
       
    })
}