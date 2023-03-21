let menu = document.querySelector('#open');
let close = document.querySelector('#close');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.style.display = "none"
    close.style.display = "block"
    navbar.style.display = "flex"
}

close.onclick = () => {
    menu.style.display = "block"
    close.style.display = "none"
    navbar.style.display = "none"
}