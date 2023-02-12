var myInfoBtn=document.querySelector('#mPmyInfoBtn');
var myHeartBtn=document.querySelector('#mPmyHeartBtn');
var myReviewBtn=document.querySelector('#mPmyReviewBtn');
var myPlaceBtn=document.querySelector('#mPmyPlaceBtn');
var myInfoDiv=document.querySelector('.myInfo');
var myHeartDiv=document.querySelector('.myHearts');
var myReviewDiv=document.querySelector('.myReviews');
var myPlaceDiv=document.querySelector('.myPlaces');

function myPageNavClk(e){
    e.preventDefault();
    var curPageChk=document.querySelector('.myPageChk');
    var curNoHidden=document.querySelector(".myNoHidden");
    var myPageChk="myPageChk";
    var myNoHidden="myNoHidden";
    var myHidden="myHidden";
    if("myPageChk" in e.target.classList){
    }else{
        curPageChk.classList.remove(myPageChk);
        curNoHidden.classList.add(myHidden);
        curNoHidden.classList.remove(myNoHidden);
        e.target.classList.add(myPageChk);
        if(e.target.id=="mPmyInfoBtn"){
            myInfoDiv.classList.remove(myHidden);
            myInfoDiv.classList.add(myNoHidden);
        }else if(e.target.id=="mPmyHeartBtn"){
            myHeartDiv.classList.remove(myHidden);
            myHeartDiv.classList.add(myNoHidden);
        }else if(e.target.id=="mPmyReviewBtn"){
            myReviewDiv.classList.remove(myHidden);
            myReviewDiv.classList.add(myNoHidden);
        }else if(e.target.id=="mPmyPlaceBtn"){
            myPlaceDiv.classList.remove(myHidden);
            myPlaceDiv.classList.add(myNoHidden);
        }
    }
}

myInfoBtn.addEventListener('click', myPageNavClk);
myHeartBtn.addEventListener('click', myPageNavClk);
myReviewBtn.addEventListener('click', myPageNavClk);
myPlaceBtn.addEventListener('click', myPageNavClk);