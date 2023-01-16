
// var preloader = document.getElementById("preloader");
// var main_page = document.getElementById("main_page");
// preloader.classList.add("d-none");
// main_page.classList.remove("d-none");

//profile image random background
var bg_img_urls = ["url(https://p0.pxfuel.com/preview/159/799/726/various-background-backgrounds-royalty-free-thumbnail.jpg)", "url(https://t3.ftcdn.net/jpg/00/31/30/60/360_F_31306048_2kvZTRcwm8X1b2zy607S7m8HYKZLmuAe.jpg)", "url(https://media.istockphoto.com/id/825778252/photo/blue-sky-and-white-clouds-background.jpg?s=170667a&w=0&k=20&c=GGnAGvQsEehICWkFlLY366bgCLb1BKmR8z1TddfSm-I=)", "url(data:image/jpeg;base64,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)"];
var circle = document.getElementById("img_circle");
circle.style.backgroundImage = bg_img_urls[(Math.floor(Math.random() * 1000))%bg_img_urls.length];

//dark mode
const checkbox = document.getElementById('checkbox');
let theme = localStorage.getItem("theme");

if(theme==="dark"){
    // change to dark mode
    document.body.classList.toggle('dark');
}else{
    checkbox.checked = !checkbox.checked;
    localStorage.setItem("theme","light");
    theme="light";
}

checkbox.addEventListener('change', (event)=>{
  if(theme==="light"){
    localStorage.setItem("theme","dark");
    theme="dark";
  }else{
    localStorage.setItem("theme","light");
    theme="light";
  }
  document.body.classList.toggle('dark');
});

// preloading
var preloader = document.getElementById("preloader");
var main_page = document.getElementById("main_page");
var t = 0;
var loading_time = 2; //secs
var xintervalId = setInterval(function (){
    t = t+0.1;
    if(t>loading_time){
        preloader.classList.add("d-none");
        main_page.style.display = "block";









/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            var nav_btn = document.getElementById("nav_btn");
            nav_btn.classList.toggle('opened');
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
    var nav_btn = document.getElementById("nav_btn");
    nav_btn.classList.toggle('opened')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
}); 

sr.reveal('.about__img, .skills__subtitle, .skills__text, .section-title',{delay: 50}); 
sr.reveal('.about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .education__container, .contact__input',{interval: 100}); 





//modal

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");
var modal4 = document.getElementById("myModal4");
var modal5 = document.getElementById("myModal5");
var modal6 = document.getElementById("myModal6");

var btn1 = document.getElementById("myBtn1");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");

// When the user clicks on the button, open the modal
btn1.onclick = function() {modal1.style.display = "block";}
btn2.onclick = function() {modal2.style.display = "block";}
btn3.onclick = function() {modal3.style.display = "block";}
btn4.onclick = function() {modal4.style.display = "block";}
btn5.onclick = function() {modal5.style.display = "block";}
btn6.onclick = function() {modal6.style.display = "block";}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {modal1.style.display = "none";}
close2.onclick = function() {modal2.style.display = "none";}
close3.onclick = function() {modal3.style.display = "none";}
close4.onclick = function() {modal4.style.display = "none";}
close5.onclick = function() {modal5.style.display = "none";}
close6.onclick = function() {modal6.style.display = "none";}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal1) modal1.style.display = "none";
  else if(event.target==modal2) modal2.style.display = "none";
  else if(event.target==modal3) modal3.style.display = "none";
  else if(event.target==modal4) modal4.style.display = "none";
  else if(event.target==modal5) modal5.style.display = "none";
  else if(event.target==modal6) modal6.style.display = "none";
}


//quote

var ref = document.getElementById("refresh");
var spinner = document.getElementById("spinner");

// https://apis.ccbp.in/random-quote
// https://api.quotable.io/random
var url = "https://api.quotable.io/random";
var cur_quote;
let quote = document.getElementById("quote");
let authorEl = document.getElementById("author");
function getquote() {
    let options = {
        method: "GET",
    };
    fetch(url, options)
        .then(function (response) {
            return response.json();
        })
        .then(function (jsonData) {
            cur_quote = jsonData;
            changeQuote();
        });
}

function changeQuote(){
    quote.textContent = "";
    authorEl.textContent = "";
    if(cur_quote===undefined){
        curq = {
            text: "In a time of drastic change, it is the learners who inherit the future.",
            author: "Eric Hoffer",
        }
    }else{
        curq = {
            text: cur_quote["content"],
            author: cur_quote["author"],
        }
    }
    var str = curq.text;
    var author = curq.author;
    var i = 0;
    let intervalId0 = setInterval(function () {
        quote.textContent+= str[i];
        i++;
        if(i==str.length){
            clearInterval(intervalId0);
            spinner.classList.add("d-none");
            ref.classList.remove("d-none");
        }
    }, 50);
    var j=0;
    if(author.length!=0){
        authorEl.textContent = "-";
        let intervalId1 = setInterval(function(){
            authorEl.textContent+= author[j];
            j++;
            if(j==author.length){
                clearInterval(intervalId1);
            }
        }, 50);
    }
}

ref.classList.add("d-none");
spinner.classList.remove("d-none");
getquote();


//prof image animation
ref.addEventListener('click',()=>{
    ref.classList.add("d-none");
    spinner.classList.remove("d-none");
    getquote();
});

function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if(entry.isIntersecting){
        document.getElementById('img_container').style.transform = "scale(0.5)";
        document.getElementById('prof_img').style.transform = "scale(1.7)";
    }else{
        document.getElementById('img_container').style.transform = "";
        document.getElementById('prof_img').style.transform = "";
    }
  });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
  };

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('img_trigger'));
// observer.observe(document.getElementById('home'));
// observer.observe(document.getElementById('img_container'));


// //website reload after certain width
// var ww = $(window).width();
// var limit = 900;

// function refresh() {
//    ww = $(window).width();
//    var w =  ww<limit ? (location.reload(true)) :  ( ww>limit ? (location.reload(true)) : ww=limit );
// }

// var tOut;
// $(window).resize(function() {
//     var resW = $(window).width();
//     clearTimeout(tOut);
//     if ( (ww>limit && resW<limit) || (ww<limit && resW>limit) ) {        
//         tOut = setTimeout(refresh, 100);
//     }
// });


//SCROLL TO TOP
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}




















        clearInterval(xintervalId);
    }
}, 100);