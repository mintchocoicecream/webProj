var getHeader = document.querySelector("header");

function scrollFunction(){
    if (document.body.scrollTop > 3 || document.documentElement.scrollTop > 3) {
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.backgroundColor = "white";
        getHeader.style.boxShadow = "0 0em 1.2em 0em rgb(233, 233, 233)";
      } else {
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.boxShadow = "none";
        getHeader.style.backgroundColor = "";
      }
}

window.onscroll = function() {scrollFunction()};