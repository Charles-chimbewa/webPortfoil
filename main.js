const slide = ["pic1.jpeg", "pic2.jpeg", "pic3.jpeg", "pic4.jpeg"];
let numero = 0;

function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}

setInterval("ChangeSlide(1)", 4000);

// const topMen = document.querySelector(".show")
// console.log(topMen);
function menu(){
   topMen.style.display ="block";
}