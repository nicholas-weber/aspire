let testimonials = [
  {
    name: "Neill O.",
    testimonial: "I have used Aspire on several projects. Their knowledge, especially that of Brian Zabrok, its owner, never fails to amaze me. Not only is their work done promptly, per plan, and with cleanliness, their pricing is excellent and a value for the expertise and performance that you receive!"
  },
  {
    name: "Jerry J.",
    testimonial: "Brian was excellent and I endorse him and Aspire Builders Inc. and their work without reservation. There are 3 things I look for in remodeling contractor. First and foremost I want the job done well. Secondly I look for someone who is experienced and knowledgeable, a master in the trade. Thirdly, although I would rank this as a luxury if the first two requirements were satisfied, it is always preferable to work with someone who is friendly. Brian fits this description. He was very thorough and a source of knowledge that he was happy to share. He gave me practical advice relevant to the home remodeling project. When he was finished I felt very comfortable that I understood the scope of the remodeling project for this house but also how to troubleshoot the home in the future. He was quick with advice and never impatient when educating me on technical issues. I whole-heartedly endorse Brian and Aspire Builders Inc. and the wonderful job they did."
  },
  {
    name: "Joyce B.",
    testimonial: "Brian took the time to listen and understand what I wanted."
  },
  {
    name: "Matt & Patty",
    testimonial: "We strongly recommend Brian because he actually cared about our project!"
  },
  {
    name: "Ted P.",
    testimonial: "Brian was the only one who took the time to think outside the box for my projects.  He listened and came up with great ideas that saved me money and looks great"
  }
]

const loadTestimonials = () => {
  const testimonialsHTML = document.getElementById("testimonials-carousel");
  testimonials.forEach(testimonial => {
    testimonialsHTML.innerHTML += `
      <div class="testimonial-slide">
        <div class="testimonial">
          <p>${testimonial.testimonial}</p>
          <p class="testimonial-name">${testimonial.name}</p>
        </div>
      </div>
    `;
  })
  testimonialsHTML.innerHTML += 
    `
      <a class="prev" onclick="plusSlides(-1)">❮</a>
      <a class="next" onclick="plusSlides(1)">❯</a>
    `
};

loadTestimonials();

const loadBottomButtons = () => {
  const buttonsHTML = document.getElementById("bottom-buttons");
  testimonials.forEach((testimonial, index) => {
    buttonsHTML.innerHTML += `
      <span class="dot" onclick="currentSlide(${index + 1})"></span>
    `
  })
}

loadBottomButtons();

let testimonialsSlideIndex = 1;
showSlides(testimonialsSlideIndex);

function plusSlides(n) {
  showSlides(testimonialsSlideIndex += n);
}

function currentSlide(n) {
  showSlides(testimonialsSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("testimonial-slide");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { testimonialsSlideIndex = 1 }
  if (n < 1) { testimonialsSlideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[testimonialsSlideIndex - 1].style.display = "block";
  dots[testimonialsSlideIndex - 1].className += " active";
}