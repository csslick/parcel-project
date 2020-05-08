import Header from './component/header.html'
import Slider from './component/slider.html'
import css from './style.css'
var app = document.getElementById('app')

app.innerHTML = `
  ${Header}
  ${Slider}
`;


$(document).ready(function(){
  $('.slider').bxSlider();
});
