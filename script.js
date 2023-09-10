const burger = document.querySelector('.header_burger');
const menu = document.querySelector('.header_li_main');
const link = document.querySelector('.header_li_link')

if (burger){
    burger.addEventListener("click", function(e){
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    });

    menu.querySelectorAll('.header_li_link').forEach(link => {
        link.addEventListener('click', function(e) {
            document.body.classList.remove('lock');
            menu.classList.remove('active');
            burger.classList.remove('active');
        })
    })
    
}

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
