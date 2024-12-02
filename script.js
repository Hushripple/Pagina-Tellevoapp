const bg = [
    'img/bg.png',
    'img/bg3.jpg',
    'img/bg6.png',
    'img/bg7.jpg'

];

function cambiarBg() {
    const randomBg = bg[Math.floor(Math.random() * bg.length)];

    document.body.style.background = `url(${randomBg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';  
}

window.onload = cambiarBg;
