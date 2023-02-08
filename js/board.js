var nav=document.querySelector(".boardNav");
var mukNav=nav.querySelector("span:first-child>a");
var nolNav=nav.querySelector("span:nth-child(2)>a");
var jalNav=nav.querySelector("span:last-child>a");
var mukDiv=document.querySelector(".boardMuk");
var nolDiv=document.querySelector(".boardPlay");
var jalDiv=document.querySelector(".boardJal");
var boardDiv=document.querySelector(".Muk>div");

var className="currentNav";
var hiddenClass="hidden";

mukNav.addEventListener('click', function(){
        mukNav.classList.add(className);
        nolNav.classList.remove(className);
        jalNav.classList.remove(className);
        mukDiv.classList.remove(hiddenClass);
        nolDiv.classList.add(hiddenClass);
        jalDiv.classList.add(hiddenClass);
});
nolNav.addEventListener('click', function(){
        mukNav.classList.remove(className);
        nolNav.classList.add(className);
        jalNav.classList.remove(className);
        mukDiv.classList.add(hiddenClass);
        nolDiv.classList.remove(hiddenClass);
        jalDiv.classList.add(hiddenClass);
});
jalNav.addEventListener('click', function(){
        mukNav.classList.remove(className);
        nolNav.classList.remove(className);
        jalNav.classList.add(className);
        mukDiv.classList.add(hiddenClass);
        nolDiv.classList.add(hiddenClass);
        jalDiv.classList.remove(hiddenClass);
});

boardDiv.addEventListener('click', function(){
        location.href="../pages/boardDetail.html";
})
