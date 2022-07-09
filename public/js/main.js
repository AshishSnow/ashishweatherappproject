const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');

const temp_status = document.getElementById('temp_status')
const temp = document.getElementById('temp')


const getInfo = async (e) => {
    e.preventDefault();

    let cityValue = cityName.value
    if (cityValue === "") {
        city_name.innerText = 'Search City'
    } else {

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=83ec35247ddef86a634459588506716f
    `
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];


            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`

            temp.innerText =(+arrData[0].main.temp - 273.15).toFixed(2)


            temp_status.innerText = arrData[0].weather[0].main

        } catch {
            city_name.innerText = 'Search City properly'
        }
    }

}
submitBtn.addEventListener('click', getInfo)


