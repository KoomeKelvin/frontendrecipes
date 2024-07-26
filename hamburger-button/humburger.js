document.addEventListener('DOMContentLoaded', function () {
    const humbergerButton = document.querySelector('.humberger-button');
    const bars = document.querySelector('.bars');
    const cross = document.querySelector('.cross');
    humbergerButton.addEventListener('click', () => {
        bars.classList.toggle('bars-is-closed');
        cross.classList.toggle('cross-is-open');
    })
});