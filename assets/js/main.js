/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
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

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text, .education__container, .section-title, .quote__cont',{delay: 50}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 100}); 
sr.reveal('.home__social-icon',{ interval: 100}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 100}); 





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
// https://apis.ccbp.in/random-quote
var url = "https://type.fit/api/quotes";
var quotesArr;
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
            quotesArr = jsonData;
        })
        .then(function(){
            changeQuote();
        })
        .then(function(){
            let intervalId = setInterval(function () {
                changeQuote();
            }, 30000);
        });
}

function changeQuote(){
    quote.textContent = "";
    authorEl.textContent = "";
    var curq = quotesArr[Math.floor(Math.random()*quotesArr.length)];
    if(curq===undefined){
        curq = {
            text: "In a time of drastic change, it is the learners who inherit the future.",
            author: "Eric Hoffer",
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

getquote();

// async.waterfall([
//     // A list of functions
//     function(callback){
//         // Function no. 1 in sequence
//         getquote();
//         callback(null, arg);
//     },
//     function(arg, callback){
//         // Function no. 2 in sequence
//         changeQuote();
//         callback(null);
//     }
//   ]);  

// let intervalId = setInterval(function () {
//     changeQuote();
// }, 10000);
