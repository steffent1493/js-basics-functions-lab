// Code your solution in this file!
const hq = 42

function distanceFromHqInBlocks(value) {
return Math.abs(value - hq)    
    
};

function distanceFromHqInFeet(value) {
    return distanceFromHqInBlocks(value) * 264
};

function distanceTravelledInFeet(start, destination) {
    return Math.abs((start - destination) * 264)
}

function calculatesFarePrice(start, destination) {
let travelled = distanceTravelledInFeet( start, destination)
    if (travelled < 400) {
        return 0;
    }
    else if(travelled > 400 && travelled < 2000) {
        return (travelled - 400) * .02;
    } 
    else if (travelled > 2001 && travelled <2500) {
        return 25;
    } 
    else if (travelled > 2500) {
        return 'cannot travel that far';
    }      
} 
