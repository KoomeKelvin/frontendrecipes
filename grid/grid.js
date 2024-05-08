function aboutMe() {
    const mySkills = ["frontend development", "Backend developement", "DevOps Engineering", "Site Reliability Engineering"];
    const aboutMeElement = document.querySelector(".about-me");
    const writingSpeed = 100;
    const erasingSpeed = 50;
    const pause = 50;

    let isDeleting = false;
    let charIndex = 0;
    let textIndex = 0;
    function type() {
        let currentText = mySkills[textIndex];
        if (!isDeleting && charIndex < currentText.length) {
            aboutMeElement.textContent += currentText[charIndex];
            charIndex++;
            setTimeout(type, writingSpeed);
        }
        else if (isDeleting && charIndex > 0) {
            aboutMeElement.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
            setTimeout(type, erasingSpeed);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) {
                textIndex = (textIndex + 1) % mySkills.length;
            }
            setTimeout(type, pause);
        }
    }
    type();
}
aboutMe();

document.addEventListener('DOMContentLoaded', function () {

    const modeElement = document.getElementById('mode');
    const body = document.body;

    modeElement.addEventListener('click', () => {
        body.classList.toggle('dark-mode-enable');
        modeElement.classList.toggle('fa-sun');
        modeElement.classList.toggle('fa-moon');
    });
});

//javascript code for animating my skills

document.addEventListener('DOMContentLoaded', function () {

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.progress-bar');
                const progressBarData = progressBar.dataset.progress;
                progressBar.style.setProperty('--progress', `${progressBarData}%`);
                progressBar.classList.add('animated');
                observer.unobserve(entry.target)
            }
        });
    });

    // call the observer and then give it the skills
    const skillset = document.querySelectorAll('#skillset .skill');
    skillset.forEach(skill => {
        observer.observe(skill);
    });

});


/**code for displaying the navbar */

document.addEventListener('DOMContentLoaded', () => {

    const navbarButtonIcon = document.querySelector('.navbar-button-icon');
    const navbarButton = document.querySelector('.navbar-button');
    const navbarItems = document.querySelector('.navbar-items');

    navbarButton.addEventListener('click', () => {
        navbarItems.classList.toggle('active');
        navbarButtonIcon.classList.toggle('fa-bars');
        navbarButtonIcon.classList.toggle('fa-x');

    });
});