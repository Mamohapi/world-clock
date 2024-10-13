function updateTime() {
// Phuthaditjhaba
let phuthaditjhabaElement = document.querySelector("#phuthaditjhaba");
if (phuthaditjhabaElement) {
let phuthaditjhabaDateElement = phuthaditjhabaElement.querySelector(".date");
let phuthaditjhabaTimeElement = phuthaditjhabaElement.querySelector(".time");
let phuthaditjhabaTime = moment().tz("Africa/Phuthaditjhaba");


phuthaditjhabaDateElement.innerHTML = phuthaditjhabaTime.format("MMMM Do YYYY");
phuthaditjhabaTimeElement.innerHTML = phuthaditjhabaTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}


// Cairo
let cairoElement = document.querySelector("#cairo");
if (cairoElement) {
let cairoDateElement = cairoElement.querySelector(".date");
let cairoTimeElement = cairoElement.querySelector(".time");
let cairoTime = moment().tz("Africa/Cairo");


cairoDateElement.innerHTML = cairoTime.format("MMMM Do YYYY");
cairoTimeElement.innerHTML = cairoTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

// Lagos
let lagosElement = document.querySelector("#lagos");
if (lagosElement) {
let lagosDateElement = lagosElement.querySelector(".date");
let lagosTimeElement = lagosElement.querySelector(".time");
let lagosTime = moment().tz("Africa/Lagos");


lagosDateElement.innerHTML = lagosTime.format("MMMM Do YYYY");
lagosTimeElement.innerHTML = lagosTime.format(
"h:mm:ss [<small>]A[</small>]"
);
}

}



function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  <a href="/">All cities</a>
  `;
}



updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);