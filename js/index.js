const mainSection = document.querySelector('.main');
const aboutSection = document.querySelector('.about');
const skillsSection = document.querySelector('.skills');
const s2 = document.querySelector('#s2')

const scrollMain = e => {
    if (e.deltaY > 0) {
        aboutSection.classList.add('animate__backInLeft')
    } else {
        console.log('scroll up')
    }
}


mainSection.addEventListener('wheel', scrollMain)