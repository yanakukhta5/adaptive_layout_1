const headerButton = document.querySelector("#headerMobile")
const headerOverflow = document.querySelector("#headerMenu")
const headerInput = document.querySelector("#headerInput")
const headerSubmit = document.querySelector("#inputSearch")

const headerArr = [headerButton, headerOverflow]
headerButton.addEventListener('click', () => {
 headerArr.forEach(item => item.classList.toggle('active'))
 document.body.classList.toggle('hidden')
})

headerSubmit.addEventListener('click', () => {
 headerInput.classList.toggle('active')
})

const swiper = new Swiper('.services-swiper', {
 speed: 400,
 spaceBetween: 10,
 navigation: {
  nextEl: '.services-button-next',
  prevEl: '.services-button-prev',
 },
 slidesPerView: 3,
 scrollbar: {
  el: '.swiper-scrollbar',
  draggable: true,
 },
 breakpoints: {
  300: {
    slidesPerView: 1.3,
    spaceBetween: 10,
    navigation: false,
  },
  650: {
    slidesPerView: 3,
    spaceBetween: 10
  },
  1100: {
    slidesPerView: 3,
    spaceBetween: 30
  }
 }
});

const priceSwiper = new Swiper('.price-swiper', {
  speed: 400,
  spaceBetween: 10,
  navigation: {
   nextEl: '.price-button-next',
   prevEl: '.price-button-prev',
  },
  slidesPerView: 3,
  scrollbar: {
   el: '.price-scrollbar',
   draggable: true,
  },
  breakpoints: {
   300: {
     slidesPerView: 1.1,
     spaceBetween: 10,
     navigation: false,
   },
   650: {
     slidesPerView: 2,
     spaceBetween: 10
   },
   1100: {
     slidesPerView: 2,
     spaceBetween: 30
   }
  }
 });

 window.addEventListener("DOMContentLoaded", function() {
  [].forEach.call( document.querySelectorAll('.tel'), function(input) {
  var keyCode;
  function mask(event) {
      event.keyCode && (keyCode = event.keyCode);
      var pos = this.selectionStart;
      if (pos < 3) event.preventDefault();
      var matrix = "+7 ( ___ ) - ___ -__-__",
          i = 0,
          def = matrix.replace(/\D/g, ""),
          val = this.value.replace(/\D/g, ""),
          new_value = matrix.replace(/[_\d]/g, function(a) {
              return i < val.length ? val.charAt(i++) || def.charAt(i) : a
          });
      i = new_value.indexOf("_");
      if (i != -1) {
          i < 5 && (i = 3);
          new_value = new_value.slice(0, i)
      }
      var reg = matrix.substr(0, this.value.length).replace(/_+/g,
          function(a) {
              return "\\d{1," + a.length + "}"
          }).replace(/[+()]/g, "\\$&");
      reg = new RegExp("^" + reg + "$");
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
      if (event.type == "blur" && this.value.length < 5)  this.value = ""
  }

  input.addEventListener("input", mask, false);
  input.addEventListener("focus", mask, false);
  input.addEventListener("blur", mask, false);
  input.addEventListener("keydown", mask, false)
});
});

const inputEmail = document.querySelector('#inputEmail')
const inputName = document.querySelector('#inputName')
const inputSubmit = document.querySelector('#inputSubmit')

function readySubmit(){
 if(inputEmail.value.trim() && inputName.value.trim()) inputSubmit.disabled = false
 else inputSubmit.disabled = true
}
inputEmail.addEventListener('blur', readySubmit)
inputName.addEventListener('blur', readySubmit)

const scrollWidth = Math.max(
  document.body.scrollWidth, document.documentElement.scrollWidth,
  document.body.offsetWidth, document.documentElement.offsetWidth,
  document.body.clientWidth, document.documentElement.clientWidth
);

const footerToTop = document.querySelector('#footerToTop')
footerToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})