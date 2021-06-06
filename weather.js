const weather = document.querySelector(".js-weather");

const API_KEY = "59e6b36bb541c683c5d05edf4baef54d";
const COORDS = "coords";

function getWeather(lat, lng){        //lat:위도, lng:경도, fetch를 통해 데이터를 얻는다. 
    //fetch()안에 가져올 데이터가 들어가면 됨. 앞에 https://넣어주고, 따옴표가 아닌 backtick(`)을 사용할 것.
    //fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`)
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    )
        .then(function(response){
             return response.json()
    })
        .then(function(json){
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`;
          //   const city = json.list[3].name;
         //    const temp = json.list[3].main.temp;
         //    const description = json.list[3].weather[0].description;
         //    weather.innerText = `${city} ${temp.toFixed(1)}°C ${description}`;

        });
}


function saveCoords(coordsObj){      
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));

}


function handleGeoSuccess(position){
    console.log("position:" + position)
    const latitude = position.coords.latitude;      //위도
    const longitude = position.coords.longitude;       //경도
    /*const coordsObj = { 
        latitude :latitude, 
        longitude : longitude
    };*/  // JS에서는 객체의 변수 이름과 객체의 key이름을 같게 저장할 때는 아래 처럼 작성할 수 있다.
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    
}

function handleGeoError(){
    console.log("Cant access geo location");
}

function askForCoords(){
    //navigator API를 이용함, navigator외에 window, document등등 많이 있음.
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)      //geolocation는 객체임, 
     //handleGeoSuccess는 좌표 가져올때 성공시에 호출
   
}

function loadCoords(){
    const loadedCoords = localStorage.getItem(COORDS);
    if(loadedCoords === null){  //로컬 스토리지에 아무것도 없다면 askForCoords함수 호출해서 현재 위도 경도를 가져옴.
        askForCoords();     //좌표를 요청
    }else{      //로컬스토리지에 값이 있으면 
        const parsedCoords = JSON.parse(loadedCoords);
        getWeather(parsedCoords.latitude, parsedCoords.longitude );
    }
}

function init(){
    loadCoords();
}

init();