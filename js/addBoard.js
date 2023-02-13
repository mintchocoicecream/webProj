var nav=document.querySelector(".boardNav");
var mukNav=nav.querySelector("span:first-child>a");
var nolNav=nav.querySelector("span:nth-child(2)>a");
var jalNav=nav.querySelector("span:last-child>a");

var category=document.querySelector("#addCategory");
var sigMenu=document.querySelector(".boardAddDiv>div:nth-child(4)");

var className="currentNav";

mukNav.addEventListener('click', function(){
        mukNav.classList.add(className);
        nolNav.classList.remove(className);
        jalNav.classList.remove(className);
});
nolNav.addEventListener('click', function(){
        mukNav.classList.remove(className);
        nolNav.classList.add(className);
        jalNav.classList.remove(className);
});
jalNav.addEventListener('click', function(){
        mukNav.classList.remove(className);
        nolNav.classList.remove(className);
        jalNav.classList.add(className);
});

category.addEventListener('change', function(e){
    console.log(e.target.value);
    if(e.target.value=="nol"||e.target.value=="jal"){
        sigMenu.classList.add("hiddenAdd");
    }else{
        sigMenu.classList.remove("hiddenAdd");
    }
})