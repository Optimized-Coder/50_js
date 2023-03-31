navBtn = document.getElementById('hamburger');
navWrapper = document.getElementById('nav-list');
body = document.querySelector('body');
main = document.querySelector('.main')
headerTitle = document.querySelector('#header-title');
headerTitleText = headerTitle.textContent;
navItem = document.querySelectorAll('.nav-list-item');


function openNav(){
    navBtn.classList.add('spin');
    body.classList.add('no-overflow');
    headerTitle.classList.add('fade-out');
    navWrapper.classList.add('open');

    setTimeout(() => {
        headerTitle.textContent = 'Menu';
        headerTitle.classList.remove('fade-out');
        navBtn.classList.remove('spin');
    }, 500)
    setTimeout(() => {
        headerTitle.classList.remove('fade-in');
    }, 1000)
}

function closeNav(){
    navBtn.classList.add('spin');
    navWrapper.classList.add('up-right');
    headerTitle.classList.add('fade-out');

    setTimeout(() => {
        headerTitle.classList.remove('fade-out');
        headerTitle.classList.add('fade-in');
        navBtn.classList.remove('spin');
        headerTitle.textContent = headerTitleText;
    }, 500)

    setTimeout(() => {
        main.classList.add('fade-in-2')
    }, 700)

    setTimeout(() => {
        navWrapper.classList.remove('open');
        headerTitle.classList.remove('fade-in');
    }, 1000);
    

    

    setTimeout(() => {
        navWrapper.classList.remove('up-right');
    }, 1000)
}


navBtn.addEventListener('click', () => {
    navBtnSrc = navBtn.getAttribute('src');
    if(navBtnSrc === './assets/menu-open.svg'){
        setTimeout(() => {
        navBtn.setAttribute('src', './assets/menu-close.svg');
        // navBtn.classList.add('fade-in');
        }, 500)
        openNav()
    } else {
        setTimeout(() => {
            navBtn.setAttribute('src', './assets/menu-open.svg');
        }, 500)
        closeNav()
    }
});