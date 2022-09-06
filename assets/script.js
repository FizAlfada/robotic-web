const text = document.querySelector(".sec-text");

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "THE FUTURE!";
    }, 0);
    setTimeout(() => {
        text.textContent = "KILLER MACHINE";
    }, 4000);
    setTimeout(() => {
        text.textContent = "MECHANICAL TOOLS";
    }, 8000);
    setTimeout(() => {
        text.textContent = "HAALAND :V";
    }, 12000);
}

textLoad();
setInterval(textLoad , 16000)

window.addEventListener('scroll' , reveal);

function reveal () {
    let reveals = document.querySelectorAll('.reveal')

    for(let i = 0; i < reveals.length; i++ ) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;
        let revealPoint = 150;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}