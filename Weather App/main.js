let apikey = "fc4eb5f36953486fa30140814220201";

let inputCity = document.querySelector("#inputCity");
let Btn = document.querySelector("#btn");
let content = document.querySelector("#content");

let time = new Date();

console.log(time.getHours());

if (time.getHours() > 6 && time.getHours() < 18) {

    document.body.style.backgroundImage = "url('day.png')";
} else {
    document.body.style.backgroundImage = "url('night.png')";
}

Btn.addEventListener("click", () => {
    let city = inputCity.value;
    url = `https://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}&aqi=no`;

    fetch(url).then((response) => {
        return response.json();
    }).then((data) => {


        console.log(data);
        let a = data.current;
        let b = data.location;
        let c = a.condition;



        let str = "";

        str += `<div id="content">
                    <div class="location">
                    Location : 
                        <div class="city"> ${b.name}, </div>
                        <div class="state"> ${b.region}</div>
                     </div>
                    <div class="weather">
                        <div class="weatherTitle">
                            <div class="icon">
                                <img src="${c.icon}" alt="">
                            </div>
                            <div class="text">${c.text}</div>
                        </div>
                        <div class="values">
                            <div class="temp">Temperature : ${a.temp_c}<sup>o</sup>C</div>
                            <hr>
                            <div class="humidity">Humidity : ${a.humidity}%</div>
                            <hr>
                            <div class="wind">Wind : ${a.wind_kph} km/h</div>
                            <hr>
                            <div class="uv">UV Index : ${a.uv}</div>
                        </div>

                    </div>
                </div>`;

        content.innerHTML = str;
    }).catch((err) => {
        let str = "";
        str += `<div id="content">
            <div class="location">
                Invalid Location
             </div>
        </div>`;

        content.innerHTML = str;
    })
});