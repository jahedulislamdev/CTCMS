// swiper carousel start here
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  speed: 1000,
  loop: true,
  pagination: {
  el: ".swiper-pagination",
  clickable: true,
  },
  autoplay: {
  delay: 2500,
  disableOnInteraction: false,
  },
  breakpoints: { 
    200 : { 
      slidesPerView : 1,
    },
    768 : { 
      slidesPerView : 2,
    },
    1024 : { 
      slidesPerView : 3,
    },
  }
});
// swiper carousel end here
// scrolling animaition start here
const animatedSections = document.querySelectorAll(".inanimation");
// console.log(animatedSections);
window.onscroll = () => { 
  animatedSections.forEach( section => { 
    let top = window.scrollY;
    let offset = section.offsetTop -190;
    let height = section.offsetHeight;

    if(top >= offset && top < offset + height){ 
      section.classList.add('show_animate');
    }
    // else{
    //   section.classList.remove('show_animate')
    // }
  } )
}
// scrolling animaition end here
// see more 
const see = document.querySelector("#see");
const more = document.querySelector("#more");
see.addEventListener("click", () => { 
  more.style.display = "block";
  see.style.display = "none";
})




