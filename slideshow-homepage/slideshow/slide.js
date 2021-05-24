
var ind_slide=0;

function showSlides(){

    var slides = document.getElementsByClassName("slidePic");
    for(let i=0; i<slides.length; i++){
        slides[i].style.display="none";
    }

    ind_slide++;
    if(ind_slide > slides.length)
        ind_slide=1;
    
    slides[ind_slide-1].style.display = "initial";
    setTimeout(showSlides,7000);
}

showSlides();

