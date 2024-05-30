
document.querySelectorAll('.btn.see-more').forEach(button => {
    button.addEventListener('click', function (e) {
        e.preventDefault();
        const modalId = this.getAttribute('data-modal-target');
        const modal = document.querySelector(modalId);
        if (modal) {
            modal.style.display = "block";
            disableScroll();
        }
        const carouselContainer = document.querySelector('.carousel-container');
        if (carouselContainer) {
            initializeCarousel(carouselContainer);
        }
    });
});

function initializeCarousel(carouselContainer) {
    let slideIndex = 1;

    const slides = carouselContainer.querySelectorAll(".carousel-slide .img");

    showSlides(slideIndex, slides);

    carouselContainer.querySelector('.prev').addEventListener('click', () => showSlides(--slideIndex));
    carouselContainer.querySelector('.next').addEventListener('click', () => showSlides(++slideIndex));
}

function disableScroll() {
    document.style.overflow = "hidden";
}

function enableScroll() {
    document.style.overflow = "";
}

let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
    showSlide(slideIndex += n);
}
function showSlides(n, slides) {
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex - 1].style.display = "block";

}

function showSlide(n) {
    let i, j;
    var carousels = document.querySelectorAll('.carousel-slide');
    carousels.forEach(carousel => {
        const slides = carousel.querySelectorAll("img");
        showSlides(n, slides);
    });
}

/**close modal functionality */
document.addEventListener('click', function (e) {
    if (e.target.classList.contains('modal') || e.target.classList.contains('close')) {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            modal.style.display = "none";
        });
        enableScroll();
    }
});