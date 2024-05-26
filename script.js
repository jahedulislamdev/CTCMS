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
// scrolling animaition start here
const animatedSections = document.querySelectorAll(".inanimation");
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

// gallery modal script 
document.addEventListener('click' , (e)=> { 
  if(e.target.classList.contains("gallery_img")){
    const src = e.target.getAttribute("src");
    document.querySelector(".modal_img").src = src;
    const myModal = new bootstrap.Modal(document.getElementById('galleryModal'))
    myModal.show();
  }
})
// modal image zoom in and out function
const ZoomInOut = ()=> { 
  const galleryImgId = document.getElementById('galleryImgId');
  const zoomIn = document.querySelector('.zooIn_button');
  const zoomOut = document.querySelector('.zooOut_button');

  zoomIn.addEventListener('click',()=> { 
    galleryImgId.classList.add('zoomed')
  })
  zoomOut.addEventListener('click', ()=> { 
    galleryImgId.classList.remove('zoomed')
  })
}
ZoomInOut();