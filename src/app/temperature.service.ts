import { Injectable } from '@angular/core';
import { cities} from './mockCities';

@Injectable({
  providedIn: 'root'
})
export class TemperatureService {

  constructor() { }
  
  async getJSONFromFetch(latitude: number | string,longitude: number | string, day: string)
  {
	const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude='+latitude+'&longitude='+longitude+'&start_date='+day+'&end_date='+day+'&hourly=temperature_2m');
    return await response.json();
  }

  getHourFromJSON(hour: number, json: any)
  {
    return json.hourly.temperature_2m[hour];
  }

  async getTemp(hour: string, date: string, city: string){
    if(!(city in cities)){
        return "The specified city is not valid. Try again.";
    }
    else{
        let realHour: number = parseInt(hour);
        let lat: number = cities[city][0];
        let lon: number = cities[city][1];
        const JSON = await this.getJSONFromFetch(lat,lon,date);
        const temp: number = this.getHourFromJSON(realHour ,JSON);
        console.log(temp);
        return temp.toString();
    }
  }
}
