//SLIDER
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Variable to track current slide index
let currentSlideIndex = 0;

// DOM elements to be updated - images and taglines
const sliderImage = document.querySelector("#banner .banner-img")
const sliderTagline = document.querySelector("#banner p");

// Selecting bullets div
const dots = document.querySelector("#banner .dots");

//Adding as bullets div to the DOM as images on the slider
slides.forEach((slide, index) =>  {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.dataset.index = index //storing the index
	dots.appendChild(dot);
});

//Function to update the image, tagline and active bullet
function updateSlide(index) {
	sliderImage.src = `./assets/images/slideshow/${slides[index].image}`;
	sliderTagline.innerHTML = slides[index].tagLine;
	const allDots = document.querySelectorAll('#banner .dots .dot');
	allDots.forEach(dot => dot.classList.remove('dot_selected'));
	allDots[index].classList.add('dot_selected');
	}

//Slider arrows
function goToPreviousSlide() {
	//Decrement the slide index
	currentSlideIndex--;
	if (currentSlideIndex < 0) {
		currentSlideIndex = slides.length -1;
	}
	//Updating the displayed slide
	updateSlide(currentSlideIndex);
}

const arrowLeft = document.querySelector("#banner .arrow_left");
arrowLeft.addEventListener('click', goToPreviousSlide);


function goToNextslide () {
	currentSlideIndex++;
	if (currentSlideIndex >= slides.length) {
		currentSlideIndex = 0;
	}
	updateSlide (currentSlideIndex);
}

const arrowRight = document.querySelector("#banner .arrow_right");
arrowRight.addEventListener('click', goToNextslide);

// Automatic slideshow
let autoSlideInterval = setInterval(goToNextslide, 3000);

// On click on each bullet,the correct image is set
const allDots = document.querySelectorAll('#banner .dots .dot');
allDots.forEach((dot, index) => {
	dot.addEventListener('click', function() {
		currentSlideIndex = index;
		updateSlide(currentSlideIndex);
	});
});







