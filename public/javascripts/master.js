
let span = document.querySelector('.up');

window.onscroll = function () {
    
   
    this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show");
};
span.onclick = function (){
window.scrollTo({
    top:0,
    behavior:"smooth"
});
};

//Check If There's Local Storage

// const { response } = require("express");


// Check If There's Local Storage

// back gound Random 
let backgroundOption = true;
    
// Variable To Control The Interval
let backgroundInterval ;

// Check local Storage
let backgoundLocalItem = localStorage.getItem("background_options");

// Check If Random background 

if (backgoundLocalItem !== null) {
if (backgoundLocalItem === 'true') {
    backgroundOption = true;
}
else{
    backgroundOption = false;
}
}

let mainColor = localStorage.getItem("color-option");

if(mainColor !== null){

document.documentElement.style.setProperty('--main-color',localStorage.getItem("color-option"));

}

// Toggle Spin Class on Icon
document.querySelector(".toggle-settings img").onclick = function () {
    // Toggle Class Fa-spin 
    this.classList.toggle("fa-spin");

    // Toggle Class open
    document.querySelector(".setting-box").classList.toggle("open");
    // Remove Active 
  
}

    //Switch Color 
    const colors = document.querySelectorAll(".color-list li");
    colors.forEach(li =>{
        li.addEventListener("click",(e) =>{
            console.log(e.target.dataset.color);
            //setColor 
            document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
            localStorage.setItem("color-option" , e.target.dataset.color);
        })
    })

    //  Select Landing Page Element
    let landingPage = document.querySelector(".landing-page");
    
    //Get Array of Images 

    let imgsArray =  ["img 1.jpg","img 2.jpg","img 3.jpg","img 4.jpg"];

    
    //Function To Random Background
    function randomize() {
        if (backgroundOption === true) {
            
            backgroundInterval =  setInterval(()=>{
                // Get Random Number
                let randomNumber = Math.floor(Math.random() * imgsArray.length);
            // Change Background  Image Url            
            landingPage.style.backgroundImage = 'url("images/Home-page/' + imgsArray[randomNumber] + '")';
            
            }, 1000);
            
        }
    }
    randomize(); 

//Close Popup 

document.addEventListener('click', function (e){

    if(e.target.className === 'close-button'){

        //Remove Current Popup

        e.target.parentNode.remoove();

        document.querySelector(".popup-overlay").remove();
    }
});



// Select All Bullets 

const allBullets = document.querySelectorAll(".bullets .bullet");

allBullets.forEach(bullet =>{
    bullet.addEventListener("click" , (e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        });
    });
});


const allLinks = document.querySelectorAll(".list-unstyled .link");
console.log(allLinks);

allLinks.forEach(link =>{
    link.addEventListener("click" , (e)=>{
        document.querySelector(e.target.dataset.section).scrollIntoView({
            behavior:'smooth'
        })
    });
});

// SWitch Random  Background Options

const randomBackEl = document.querySelectorAll(".random-background span");

//Loop on All list Items
randomBackEl.forEach(span => {
    //Click on Every Span
    span.addEventListener("click", (e) => {

        //Remove Active Class  From All Span
        e.target.parentElement.querySelectorAll(".active").forEach(element => {
            element.classList.remove("active");
        });
        e.target.classList.add("active");
        if (e.target.dataset.background ==='yes') {

            backgroundOption = true;
            // console.log(backgroundOption);
            randomize();
            localStorage.setItem("background_option" , true);
        }
        else{
         console.log("No");   
         backgroundOption = false;
        //  console.log(backgroundOption);
        clearInterval(backgroundInterval);
        localStorage.setItem("background_option" , false);

        }
    });

});
 