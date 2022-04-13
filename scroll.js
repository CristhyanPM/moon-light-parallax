let header = document.querySelector('header');
let stars = document.getElementById('stars');
let moon = document.getElementById('moon')
let mountainsBehind = document.getElementById('mountains_behind')
let mountainFront = document.getElementById('mountains_front')
let tittle = document.getElementById('tittle')
let button = document.querySelector('btn')

window.onscroll = function() {
  let value = window.scrollY;
  header.style.top = value * 0.5 + 'px';
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountainsBehind.style.top = value * 0.5 + 'px';
  mountainFront.style.top + value * 0 + 'px';
  tittle.style.marginRight = value * 4 + 'px';
  mountainFront.style.cssText = `transform: scale(${value * 0.0005 + 1} )`
}


