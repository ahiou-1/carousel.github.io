const image = document.querySelector('.image');
const pic = document.querySelector('.pic');
const left = document.querySelector('.left');
const right = document.querySelector('.right');
const pointers = document.querySelectorAll('.dot');

let src = 1
function toRight() {
    src++
    if(src === 6) {
        src = 1;
        pic.src = "images/image-1.png";
    } else {
        pic.src = "images/image-" + `${src}` + ".png";
    }
    const dot = document.getElementById(src);
    dot.style.opacity = 1;

    const beforeDot = document.getElementById(src-1);
    if(src <= 1) {
        document.getElementById(5).style.opacity = 0.3
    }
    beforeDot.style.opacity = 0.3;
}

function toLeft() {
    src--
    if(src === 0) {
        src = 5;    
        pic.src = "images/image-5.png";
    } else {
        pic.src = "images/image-" + `${src}` + ".png";
    }
    const dot = document.getElementById(src);
    dot.style.opacity = 1;

    const afterDot = document.getElementById(src+1);
    if(src === 5) {
        document.getElementById(1).style.opacity = 0.3
    }
    afterDot.style.opacity = 0.3;
}

function toPic (event) {
    for (let i = 0; i < pointers.length; i++) {
        pointers[i].style.opacity = 0.3;
    }
    const target = event.target;
    src = target.id;
    pic.src =  "images/image-" + `${src}` + ".png";
    target.style.opacity = 1;
}

for (let i = 0; i < pointers.length; i++) {
    pointers[i].addEventListener('click', toPic);
}

left.addEventListener('click', toLeft);
right.addEventListener('click', toRight);

