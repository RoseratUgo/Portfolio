//Hamburger menu
document.getElementById('gofullmenu').onclick = function () {
    document.getElementById('fullmenu').style.transform = 'translateX(0)';
}

document.getElementById('closemenu').onclick = function () {
    document.getElementById('fullmenu').style.transform = 'translateX(-100vw)';
    document.getElementById('second').style.transform = 'translateX(-100vw)';
    document.getElementById('third').style.transform = 'translateX(-100vw)';
    document.getElementById('four').style.transform = 'translateX(-100vw)';
}

document.getElementById('webcatego').onclick = function () {
    document.getElementById('second').style.transform = 'translateX(0)';
    document.getElementById('third').style.transform = 'translateX(-100vw)';
    document.getElementById('four').style.transform = 'translateX(-100vw)';
}
document.getElementById('designcatego').onclick = function () {
    document.getElementById('third').style.transform = 'translateX(-15vw)';
    document.getElementById('second').style.transform = 'translateX(-100vw)';
    document.getElementById('four').style.transform = 'translateX(-100vw)';
}
document.getElementById('photoscatego').onclick = function () {
    document.getElementById('third').style.transform = 'translateX(-100vw)';
    document.getElementById('second').style.transform = 'translateX(-100vw)';
    document.getElementById('four').style.transform = 'translateX(-30vw)';
}

// change tumbnail
document.getElementById('webbox1').onmouseover = function () {
    document.getElementById('thumbnail').style.backgroundImage = "url('./assets/img/froggy.jpg')";
}

document.getElementById('webbox2').onmouseover = function () {
    document.getElementById('thumbnail').style.backgroundImage = "url('./assets/img/congres.jpg')";
}

document.getElementById('designbox2').onmouseover = function () {
    document.getElementById('thumbnail').style.backgroundImage = "url('./assets/img/congres.jpg')";
}

// change radio
document.getElementById('graphics').onclick = function () {
    document.getElementById('design').style.display = 'block';
    document.getElementById('web').style.display = 'none';
    document.getElementById('photos').style.display = 'none';
    document.getElementById('webactive').classList.remove('active');
    document.getElementById('webactivetext').classList.remove('active');
    document.getElementById('photosactive').classList.remove('active');
    document.getElementById('photosactivetext').classList.remove('active');
    document.getElementById('graphicsactive').classList.add('active');
    document.getElementById('graphicsactivetext').classList.add('active');
}

document.getElementById('weber').onclick = function () {
    document.getElementById('web').style.display = 'block';
    document.getElementById('design').style.display = 'none';
    document.getElementById('photos').style.display = 'none';
    document.getElementById('webactive').classList.add('active');
    document.getElementById('webactivetext').classList.add('active');
    document.getElementById('photosactive').classList.remove('active');
    document.getElementById('photosactivetext').classList.remove('active');
    document.getElementById('graphicsactive').classList.remove('active');
    document.getElementById('graphicsactivetext').classList.remove('active');
}

document.getElementById('photoser').onclick = function () {
    document.getElementById('photos').style.display = 'block';
    document.getElementById('design').style.display = 'none';
    document.getElementById('web').style.display = 'none';
    document.getElementById('webactive').classList.remove('active');
    document.getElementById('webactivetext').classList.remove('active');
    document.getElementById('photosactive').classList.add('active');
    document.getElementById('photosactivetext').classList.add('active');
    document.getElementById('graphicsactive').classList.remove('active');
    document.getElementById('graphicsactivetext').classList.remove('active');
}


// doc title change
let docTitle = document.title;
window.addEventListener("blur", () =>{
    document.title = "Reviens :(";
})
window.addEventListener("focus", () => {
    document.title = docTitle;
})
