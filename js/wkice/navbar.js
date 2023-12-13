
let menuIcon = document.querySelector('#menu-icon');
let navBar = document.querySelector('.navbar');

menuIcon.onclick = ()=> {
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('ativado');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            // adiciona e remove a classe ativado de acordo com o id do navbar
            navLinks.forEach(links => {
                links.classList.remove('ativado');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('ativado');
            })
        }
    })

    let header = document.querySelector('header');

    header.classList.toggle('sticky' , window.scrollY > 100);

    // remover o menu em tamanho de celular quando selecionar uma pagina
    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('ativado');
}