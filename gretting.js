const form = document.querySelector(".js-form"),
 input = form.querySelector("input"),
 greeting = document.querySelector(".js-greetings");

 const USER_LS = "currentUser",
    SHOWING_CN = "showing";

console.log("form" + form);
console.log("input" + input);
console.log("greeting" + greeting);

 //작은 정보(자바스크립트 정보)를 유저 컴퓨터에 저장하는 방법 (로컬 스토리지)


function saveName(text){    //저장하기
    localStorage.setItem(USER_LS, text);
}



function handleSubmit(event){
    event.preventDefault();    //이벤트 기본동작 막기
    //input.placeholder ="happy!!!";  //placeholder내용 변경하기 - 변경 안되는디?
    const currentValue=input.value; //input값을 currentValue에 넣기
    
    paintGreeting(currentValue);        //currentValue를 그려줘 
    saveName(currentValue);             //currentValue를 저장해줘
}


function askForName(){              
    form.classList.add(SHOWING_CN);     //form 클래스 추가
    form.addEventListener("submit", handleSubmit)       //submit이벤트 발생시 handleSubmit실행
}


function paintGreeting(text){
    form.classList.remove(SHOWING_CN);      //form태그 제거
    greeting.classList.add(SHOWING_CN);     //greeting클래스 추가
    greeting.innerText = `Hello ${text}`       //greeting안에 'hello 사용자이름' 출력하기
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS);      //localStorage에 저장된 USER_LS값 가져와 currentUser에 넣기
    if(currentUser === null){  
        askForName();       //유저 이름이 없다면 요청할 것.
    }else{
        paintGreeting(currentUser);     //유저이름 있다면 currentUser를 그려라.
    }
}
function init(){
    loadName();               //loadName호출
}

init();             //첫번쨰로 init()호출