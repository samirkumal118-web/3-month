function scrollToSection(index){
  document.querySelectorAll('section')[index].scrollIntoView({behavior:'smooth'});
}

function showLove(){
  document.getElementById('loveMsg').innerText = "I Love You So Much ❤️";
}
