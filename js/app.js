const about = document.querySelector("#about");
const projects = document.querySelector("#project");
const contact = document.querySelector("#contact");
const pjSection = document.querySelector(".projectsSection");
const aboutSection = document.querySelector(".aboutMe");
const contactSection = document.querySelector(".contactContainer");
const btn = document.querySelector("#projectBtn")

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