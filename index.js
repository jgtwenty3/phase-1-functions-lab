function distanceFromHqInBlocks(location){
    const headquartersLocation = 42; 
    const distance = Math.abs(location - headquartersLocation);
    return distance;
}
function distanceFromHqInFeet(location){
    const blockInFeet = 264;
    const distanceInBlocks = Math.abs(location-42);
    const distanceInFeet = Math.abs(distanceInBlocks * blockInFeet);
    return distanceInFeet;
}
function distanceTravelledInFeet(start, destination) {
    const blocksInFeet = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = Math.abs(distanceInBlocks * blocksInFeet);
    return distanceInFeet;
}
function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet <= 400) {
        return 0;
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
        return (distanceInFeet - 400) * 0.02;
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
        return 25;
    } else {
        return 'cannot travel that far';
    }
}
