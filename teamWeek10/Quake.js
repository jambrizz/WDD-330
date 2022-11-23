// Quakes model

import {getJSON} from './utilities';

export default class Quake {
  constructor() {
    this.baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson';
    // this is where we will store the last batch of retrieved quakes in the model in the empty array below
    this._quakes = [];
  }

  async getEarthQuakesByRadius(position, radius = 100) {
    this._quakes = await getJSON(
      //This will uppend the location and radius to the end of the url from the user's current loction
      this.baseUrl + 
      `&starttime=2019-01-01&endtime=2019-03-02&latitude=${position.lat}&longitude=${position.lon}&maxradiuskm=${radius}`
    );
    return this._quakes;
  }
  getQuakeById(id){
    //This will filter the quakes by the id of the quake
    return this_quakes.feature.filter(item => item.id === id)[0];
  }
}