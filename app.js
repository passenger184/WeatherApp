const form = document.querySelector('.change-location');
const details = document.querySelector('.details');
const card = document.querySelector('.card');
const pic = document.querySelector('img.time');
const icon = document.querySelector('.icon img');
//const weather_opp = new Weatherapi();   //for oop or class


const displayInfo = (info) => {
    const location = info.location;
    const weather = info.weather;
    //destructuring property
    //so, it is a new property in js and it helps us to do the above simply.
    //but the variable name must be the same as the objects
    //const {location , weather} = info;    //can be done like this 

    details.innerHTML = `
        <h5 class="my-3">${location.EnglishName}</h5>
        <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
    `;

    if (card.classList.contains('d-none')){
        card.classList.remove('d-none');
    }

    // let daynight = null;
    // if (weather.IsDayTime){
    //     daynight = 'img/day.svg'
    // }
    // else {
    //     daynight = 'img/night.svg';
    // }
    //It is also possible to use ternay operator to check this like below
    let daynight = weather.IsDayTime ? 'img/day.svg' : 'img/night.svg';

    pic.setAttribute('src', daynight);
    
    const icons = `img/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', icons);

};


const updateInfo = async (city) => {
    const location = await getLocation(city);
    const weather = await getWeather(location.Key);

    return {
        location: location,
        weather: weather
        // if key and value are the same then we can use object short hand notation 
        // just like this
        //return {location, weather}
    }
};


form.addEventListener('submit', (e) => {
   e.preventDefault();
   const val = form.city.value.trim();
   form.reset();
   updateInfo(val)
    .then(data => displayInfo(data))
    .catch(err => console.log(err));

    //store the city in the local storage
    localStorage.setItem('location', val);
});

//check the local storage and make an api call
if (localStorage.getItem('location')){
    updateInfo(localStorage.getItem('location'))
    .then(data => displayInfo(data))
    .catch(err => console.log(err));
}


// // for oop_weather_api.js that applies class or oop concept
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const val = form.city.value.trim();
//     form.reset();
//     weather_opp.updateInfo(val)
//      .then(data => displayInfo(data))
//      .catch(err => console.log(err));
 
//      //store the city in the local storage
//      localStorage.setItem('location', val);
//  });
 
//  //check the local storage and make an api call
//  if (localStorage.getItem('location')){
//     weather_opp.updateInfo(localStorage.getItem('location'))
//      .then(data => displayInfo(data))
//      .catch(err => console.log(err));
//  }






