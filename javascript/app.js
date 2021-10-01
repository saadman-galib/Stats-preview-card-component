var mediaQuery = window.matchMedia('(max-width: 1160px)')
var image01 = document.querySelector('.right-part-img')

if (mediaQuery.matches){
    image01.src = ('./images/image-header-mobile.jpg');
}

else{
    image01.src = ('./images/image-header-desktop.jpg');    
}