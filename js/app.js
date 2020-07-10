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


// ------ canvas --------
// (function () {
//     const canvas = document.querySelector('.bg-canvas');
//     const ctx = canvas.getContext('2d');
//     const video = document.querySelector('.bg-video');

//     video.addEventListener('play', draw);
		
//     function draw() {
//         canvas.width = canvas.clientWidth;
//         canvas.height = canvas.clientHeight;
//         if (video.paused || video.ended) return false;
//         ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

//         requestAnimationFrame(draw);
//     }
// })();