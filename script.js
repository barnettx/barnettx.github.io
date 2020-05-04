function openMobileNav(){
    // document.querySelector('.mobile__menu').style.display = "block";
    document.querySelector('.mobile__menu').style.width = "100%";
    document.querySelector('.nav__mobile__open').style.display = "none";
    document.querySelector('.nav__mobile__close').style.display = "block";
}

function closeMobileNav(){
    // document.querySelector('.mobile__menu').style.display = "none";
    document.querySelector('.mobile__menu').style.width = "0%";
    document.querySelector('.nav__mobile__open').style.display = "block";
    document.querySelector('.nav__mobile__close').style.display = "none";
}

