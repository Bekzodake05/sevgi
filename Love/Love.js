const btns=document.querySelectorAll(".btn")
const slides=document.querySelectorAll(".videoslide")
const contents=document.querySelectorAll(".content")
var slidernav=function(manual){
    btns.forEach((btn) => {
        btn.classList.remove("active")
    });
    
    slides.forEach((slide) => {
        slide.classList.remove("active")
    });

    contents.forEach((content) => {
        content.classList.remove("active")
    });
    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");
}
btns.forEach((btn,i) => {
    btn.addEventListener("click", () => {
        slidernav(i);
    })
})