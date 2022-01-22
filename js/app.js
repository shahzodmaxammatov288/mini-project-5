// Selectors
const days = document.querySelector('.days');
const hours = document.querySelector('.hours');
const minutes = document.querySelector('.minutes');
const seconds = document.querySelector('.seconds');

let countDate = new Date('Jan 1, 2023 00:00:00').getTime();
// console.log(countDate);

function newYear() {
  let now = new Date().getTime();
  gap = countDate - now;
  
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor((gap % (day)) / (hour));
  let m = Math.floor((gap % (hour)) / (minute));
  let s = Math.floor((gap % (minute)) / (second));
  days.innerText = d;
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
}
// newYear();

setInterval(newYear, 1000);


function createSnow() {
  const newSnow = document.createElement('i');
  newSnow.classList.add('fas');
  newSnow.classList.add('fa-snowflake');

  newSnow.style.left = Math.random() * window.innerWidth + "px";
  newSnow.style.animationDuration = Math.random() * 3 + 2 + "s";
  newSnow.style.opacity = Math.random();
  newSnow.style.fontSize = Math.random() * 5 + 15 + "px";

  document.body.append(newSnow);

  setTimeout(() => {
    newSnow.remove();
  }, 4000)
}

setInterval(createSnow, 40)

!(function($) {
  "use strict"

  if($('.typed').length) {
      var typed_strings = $(".typed").data('typed-items');
      typed_strings = typed_strings.split(',');
      new Typed('.typed', {
          strings: typed_strings,
          loop: true,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 1000
      });
  }

})(jQuery)