var navSlide = ()=>{
    const burger = document.querySelector('.burger')
    const navitems = document.querySelector(".nav-items");
    const navLinks = document.querySelectorAll('.nav-items li')


    burger.addEventListener('click',()=> {

        // click後 在目標增加/減少 nav-active
        navitems.classList.toggle('nav-active')

        //Animation Links
        navLinks.forEach((link, index) => {
            if(link.style.animation){
                link.style.animation='';
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + 0.5 }s`;
            }
        });

        // burger animation  轉成X
        burger.classList.toggle('toggle')
    })
}
navSlide();