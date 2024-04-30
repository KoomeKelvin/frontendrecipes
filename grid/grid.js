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