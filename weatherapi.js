const key = 'tjF2fmAtbxgy5RepvIBoRzI591Ffomt1';

//Get the city
const getLocation = async (city) => {
    const path = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const add = `?apikey=${key}&q=${city}`;
    const request = await fetch(path + add);
    const data = await request.json();

    return data[0];
};

//Get the weather
const getWeather = async (id) => {
    const path = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const add =   `${id}?apikey=${key}`;
    const request = await fetch(path + add);
    const data = await request.json();

    return data[0];

};



// getLocation('gondar')
// .then(data => {
//     return getWeather(data.Key);
// })
// .then(data => console.log(data))
// .catch(err => console.log(err));