//const clockContainer = document.querySelector(".js-clock");  //querySelector는 element자식을 탐색함(여기서는 js-clock클래스의 자식을 탐색함)
//const clockTitle = clockContainer.querySelector("h1");


const clockContainer = document.querySelector(".js-clock"),   //위처럼 따로 써도 되고 아래처럼 한번에 써도 됨
clockTitle = clockContainer.querySelector("h1");
console.log(clockTitle.innerText);

function getTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    console.log(date);
    console.log(hours);
    console.log(minutes);
    console.log(seconds);
    clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
        }:${ seconds < 10 ? `0${seconds}` : seconds}`;
}

function init(){
getTime();
setInterval(getTime, 1000);
}

init();
