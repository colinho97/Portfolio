const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const options = {
    root: null, //this represent the viewport
    rootMargin: '0px 0px -99%',
}

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach((entry) => {
        if (entry.isIntersecting === true) {
            // console.log(entry.target);
            const id = entry.target.id
            // console.log(id);
            const navActive = document.querySelector(`a[href="#${id}"]`);
            // console.log(navActive);
            navLinks.forEach(link => link.classList.remove('active'));
            navActive.classList.add('active');
        } else {
            return;
        }
    });
},options);

sections.forEach(section => {
    observer.observe(section);
})

window.onscroll = function() {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        const navActive = document.querySelector(`a[href="#contact"]`);
        navLinks.forEach(link => link.classList.remove('active'));
        navActive.classList.add('active');
    }
};


//Hamburger Nav Functionality

const hamburger = document.querySelector('.hamburgerContainer');
const navMenu = document.querySelector('.navBarItemList');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.navLink').forEach((link) => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    })
})