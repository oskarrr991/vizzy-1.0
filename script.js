var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
  showDivs(slideIndex = n);
}

function showDivs() {
  var x = document.getElementsByClassName('mySlides');

  for (var i = 0; i < x.length; i++){
    x[i].style.display = 'none';  
  }

  x[slideIndex-1].style.display = 'block';  
}

function open_menu(){
  if(document.getElementById('mobile-menu-items').style.display == 'block'){
    document.getElementById('mobile-menu-items').style.display = 'none';
  }
  else{
    document.getElementById('mobile-menu-items').style.display = 'block';
  }
}