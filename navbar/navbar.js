document.addEventListener('DOMContentLoaded', function () {

    const humbergerButton = document.querySelector('.humberger-button');
    humbergerButton.addEventListener('click', () => {
        document.querySelector('.hide-small-screen-menu').classList.toggle('display-small-screen-menu');
        document.querySelector('.bars-button').classList.toggle('bars-button-is-closed');
        document.querySelector('.cross-button').classList.toggle('cross-button-is-open');
    });
});