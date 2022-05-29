const APP_CONTAINER = document.querySelector('#app-weather')
const API_ENDPOINT = "https://api.weatherapi.com/v1/current.json?key=86c37c482ca644efbdc142517222905&q=Budapest&aqi=no";

async function getWeather(){
	const response = await fetch(API_ENDPOINT);
	const data = response.json();
	return data;
}

function Template({location, current}){
	return `
		<div class="widget-container">
			<p>${location.name}</p>
			<img src="${current.condition.icon}" />
			<p>${current.temp_c} CELSIUS</p>
		</div>
	`
}

async function init(){
	const data = await getWeather();
	console.log(APP_CONTAINER);
	APP_CONTAINER.innerHTML = Template(data);
}

init()
