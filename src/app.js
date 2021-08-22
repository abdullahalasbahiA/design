import component from './component.js';
// import style from './css/style.css';
// import swiper from '../node_modules/swiper/swiper-bundle';
const portfolio_link = document.getElementById("portfolio");
const drop_down_menu = document.getElementById("dd-menu");

// portfolio_link.onclick(()=>{

    // });

import "./scss/style.scss";
import "./scss/about.scss";
import "./scss/blog.scss";
import "./scss/single_post.scss";
import "./scss/features.scss";
import "./scss/contact.scss";
import "./scss/portfolio1.scss";
import "./scss/portfolio2.scss";
import "./scss/portfolio_single_project.scss";
import "./scss/services.scss";

// import 'bootstrap';
// font awesome
import "C:/Users/abdul/Desktop/HardPoints/designing/design/node_modules/@fortawesome/fontawesome-free/js/all.js";



// google icon
// document.body.append(component())


// Drop down menu
const dropping_link = document.querySelector(".dropping-link");
const dd_menu = document.querySelector(".dd-menu");


dropping_link.addEventListener("click", event => {
    dd_menu.parentElement.classList.toggle("show");
});



// Accordion
const accordion_tabs = document.querySelectorAll(".accordion-top");
const accordion_contents = document.querySelectorAll(".accordion-content");

accordion_tabs.forEach(accordion_tab => {
    accordion_tab.addEventListener("click", event => {
        accordion_tab.querySelectorAll(".accordion-but").forEach(butt => {
            butt.classList.toggle("hidden");
        })
        accordion_tab.nextElementSibling.classList.toggle("hidden");
        accordion_tab.parentElement.classList.toggle("light-bg");
    });
});


// TABS

// get the data attribute >>> getAttribute('data-name');

const tabs = document.querySelectorAll(".tab");
const tabs_content = document.querySelectorAll(".content-box");

tabs.forEach(tab => {
    tab.addEventListener("click",event => {
        // get the tab number
        var tab_number = event.target.getAttribute("data-number");
        // get the content with the same number
        for(var i = 0; i < tabs_content.length; i++){
            if(tabs_content[i].getAttribute("data-number") === tab_number){
                tabs_content[i].classList.add("active-content");
                event.target.classList.add("active-tab");
            } else{
                tabs_content[i].classList.remove("active-content");
                tabs[i].classList.remove("active-tab");
            }
        }
        // add the show class to it and remove it from other content
    })
})

const tabs2 = document.querySelectorAll(".tab2");
const tabs2_content = document.querySelectorAll(".content-box2");

tabs2.forEach(tab => {
    tab.addEventListener("click",event => {
        // get the tab number
        var tab_number = event.target.getAttribute("data-number2");
        // get the content with the same number
        for(var i = 0; i < tabs2_content.length; i++){
            if(tabs2_content[i].getAttribute("data-number2") === tab_number){
                tabs2_content[i].classList.add("active-content");
                event.target.classList.add("active-tab");
            } else{
                tabs2_content[i].classList.remove("active-content");
                tabs2[i].classList.remove("active-tab");
            }
        }
        // add the show class to it and remove it from other content
    })
})