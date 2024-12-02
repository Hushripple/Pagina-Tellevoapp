const bg = [
    'img/bg.png',
    'img/bg1.jpg',
    'img/bg2.png',
    'img/bg3.jpg',
    'img/bg4.jpg',
    'img/bg5.png',
    'img/bg6.png',

];

function cambiarBg() {
    const randomBg = bg[Math.floor(Math.random() * bg.length)];

    document.body.style.background = `url(${randomBg}) no-repeat center center fixed`;
    document.body.style.backgroundSize = 'cover';  
}

window.onload = cambiarBg;
