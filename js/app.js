const about = document.querySelector("#about");
const projects = document.querySelector("#project");
const contact = document.querySelector("#contact");
const pjSection = document.querySelector(".projectsSection");
const aboutSection = document.querySelector(".aboutMe");
const contactSection = document.querySelector(".contactContainer");
const btn = document.querySelector("#projectBtn");
const navBar = document.querySelector('#navBar');
const list = document.querySelector(".list");

about.addEventListener("click", () => {
    aboutSection.scrollIntoView();
})
projects.addEventListener("click", () => {
    pjSection.scrollIntoView()
})
contact.addEventListener("click", () => {
    contactSection.scrollIntoView();
})
btn.addEventListener('click', () => {
    pjSection.scrollIntoView();
})


var active = true;
navBar.addEventListener('click', () => {
    if (active) {
        active = false;
        navBar.classList.toggle("fa-times");
        navBar.style.color = "black";

        list.style.right = "-10px";
        list.style.transition = "0.5s"
        list.style.zIndex= "3";

       active = false;        
        
    }else {
        navBar.classList.toggle("fa-times");
        list.style.right = "-100%";
        list.style.transition = "0.5s"
        active = true;
        
        
    }
})
