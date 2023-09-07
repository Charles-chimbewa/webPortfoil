const testimonials = document.querySelector('.testimonials');
const input = document.querySelectorAll('input[name="testimonial"]');
let current = 0;

function showTestimonial(index) {
  var number =  input[index].checked = true;
  number.style.transform ='scale(2)';

}

function swap() {
    current = (current + 1) % input.length;
    showTestimonial(current);
}

// Call swap every second
setInterval(swap, 8000);