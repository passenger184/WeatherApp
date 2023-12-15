class Weatherapi {
    constructor(){
        this.key = 'tjF2fmAtbxgy5RepvIBoRzI591Ffomt1';
        this.pathLocation = 'http://dataservice.accuweather.com/locations/v1/cities/search';
        this.pathWeather = 'http://dataservice.accuweather.com/currentconditions/v1/';
    }
    async updateInfo(city){
        const location = await this.getLocation(city);
        const weather = await this.getWeather(location.Key);

        return {location, weather};
    }
    async getLocation(city){
        const add = `?apikey=${this.key}&q=${city}`;
        const request = await fetch(this.pathLocation+ add);
        const data = await request.json();

        return data[0];
    }
    async getWeather(id){
        const add =   `${id}?apikey=${this.key}`;
        const request = await fetch(this.pathWeather + add);
        const data = await request.json();

        return data[0];
    }
}