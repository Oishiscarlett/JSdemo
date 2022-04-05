const box1 = document.getElementsByClassName("container")[0];

box1.addEventListener('click', e => {
    box1.classList.toggle("rotate");
});