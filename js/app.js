// var navSlide = ()=>{
//     const burger = document.querySelector('.burger')
//     const navitems = document.querySelector(".nav-items");
//     burger.addEventListener('click',()=> {
//         navitems.classList.toggle('nav-active')
//     })

// }

function showText() {
    $(this).text("Hello world")
}

$(".burger").click(function(){

    $(".nav-itmes").animate({
        left: "5px"
    })
})



// navSlide();