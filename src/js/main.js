let menuBtn = document.querySelector('.header_burger');
let menu = document.querySelector('.header_menu');
let bgc = document.querySelector('.black_bgc');


menuBtn.addEventListener('click', function(){
    
    menu.classList.toggle('active');
    bgc.classList.toggle('active');
    
})

