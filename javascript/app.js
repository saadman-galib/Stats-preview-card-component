var mediaQuery = window.matchMedia('(max-width: 1160px)')
var image01 = document.querySelector('.right-part-img')

if (mediaQuery.matches){
    // alert("Ok")
    //document.image01.src('./images/image-header-mobile.jpg');
    image01.src = ('./images/image-header-mobile.jpg');
}

else{
    //document.image01.src('./images/image-header-desktop.jpg');
    image01.src = ('./images/image-header-desktop.jpg');    
}