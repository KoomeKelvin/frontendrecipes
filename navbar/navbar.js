document.addEventListener('DOMContentLoaded', function () {

    const humbergerButton = document.querySelector('.humberger-button');
    humbergerButton.addEventListener('click', () => {
        document.querySelector('.small-screen-menu').classList.toggle('display-small-screen-menu');
        document.querySelector('.bars').classList.toggle('bars-is-closed');
        document.querySelector('.cross').classList.toggle('cross-is-open');
    });
});