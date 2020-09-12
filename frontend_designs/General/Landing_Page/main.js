// Testimonials
const authorsEl = document.querySelectorAll('.author');
const container = document.querySelector('.testimonials-container');
const nameEl = document.querySelector('.name');
const textEl = document.querySelector('.text');

const testimonials = [{
	text: 'I had my concerns that due to a tight deadline this project can\'t be done. But Florin proved me wrong not only he delivered an outstanding work but he managed to deliver 1 day prior to the deadline. And when I asked for some revisions he made them in MINUTES. I\'m looking forward to work with him again and I totally recommend him. Thanks again Florin!',
	name: 'Arthur Birnbaum',
	color: 'rgba(75, 123, 236,1.0)'
},{
	text: 'Second time hiring him. Finished everything in a timely manner and his work is excellent. Can\'t recommend him enough.',
	name: 'Phoebe Kotliar',
	color: 'rgba(250, 130, 49,1.0)'
},{
	text: 'Alexandru Florin never fails to impress me by the quality of his work and delivering on time. When it comes to front-end, he is definitely my go to guy. Always is a pleasure to work with Alexandru even when deadlines are tight and pressure is great. It\'s reassuring to have a project in such good hands.',
	name: 'Louisa P. Huard',
	color: 'rgba(235, 59, 90,1.0)'
},{
	text: 'Florin has been of great help on our different web projects. He is very trustworthy and serious in the work done. Keep on the good work and energy, been a pleasure to collaborate.',
	name: 'Cristina Aurmoogum',
	color: 'rgba(165, 94, 234,1.0)'
},{
	text: 'I hired Florin Pop based on others positive experiences, and I understand why he\'s so highly rated. His code is very clean, he communicates well, and he likes to offer alternative solutions.',
	name: 'J. Kent Pepper',
	color: 'rgba(32, 191, 107,1.0)'
}];

addTestimonial(0);

authorsEl.forEach((author, idx) => {
	author.addEventListener('click', (e) => {
		addTestimonial(idx);
		author.classList.add('selected');
	})
});

function addTestimonial(idx) {
	const testimonial = testimonials[idx];
	
	nameEl.innerHTML = testimonial.name;
	textEl.innerHTML = testimonial.text;
	container.style.background = testimonial.color;
	container.style.boxShadow = `0 20px 10px -20px ${testimonial.color.substring(0, testimonial.color.length-4)}0.9)`;
	
	authorsEl.forEach(author => {
		author.classList.remove('selected');
	});
}
// End

// Typing Effect
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
// End