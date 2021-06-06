const body = document.querySelector("body");

const IMG_NUMBER = 6;

function handleImgLoad(){
    console.log("finished loading");
}

function paintImage(imgNumber){
    const image = new Image();
    image.src = `images/${imgNumber + 1}.jpg`;    //random함수가 0부터 값을 주기 때문에 1을 더함.
    image.classList.add("bgImage");
    body.appendChild(image);
}


function genRandom(){
    const number = Math.floor(Math.random() * IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();