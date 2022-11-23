import { getJSON, getLocation} from './utilities.js';

const baseUrl = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';

function testGetQuakesForLocation() {
    // call the getLocation function to get the lat/long
    
    //use that information to build out the correct URL to call the getJSON function

    //use the url to request the correct quakes

    //log out the quakes for now
};

//GetQuakesForLocation();
/*
import QuakesController from "./QuakesController";

const quakesController =  new QuakesController();

console.log(quakesController.init());
*/
//console.log(quakesController);