const posicion = document.querySelector("#posicion");
const button = document.querySelector("button");
const loading = document.querySelector("#loading");

loading.style = "display: none;";

function getPosition() {
  console.log("getting position");
  loading.style = "display: block";
  navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
  console.log("success");
  loading.style = "display: none";
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  posicion.innerHTML = `latitude: ${latitude} - longitude: ${longitude}`;
}

function error(err) {
  console.log("error: ");
  console.log(err);
  loading.style = "display: none";
  alert("Sorry, no position available. " + err);
}

const options = {
  enableHighAccuracy: true,
  maximumAge: 30000,
  timeout: 27000,
};

//const watchID = navigator.geolocation.watchPosition(success, error, options);

button.addEventListener("click", getPosition);
