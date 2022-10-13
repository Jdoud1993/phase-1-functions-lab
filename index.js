// Code your solution in this file!
function distanceFromHqInBlocks(location) {
    return Math.abs(location - 42)
}

function distanceFromHqInFeet(location) {
    distanceFromHqInBlocks(location);
    return (distanceFromHqInBlocks(location) * 264)
}

function distanceTravelledInFeet(a,b) {
    return Math.abs(a-b) * 264
}

function calculatesFarePrice(a,b) {
    distanceTravelledInFeet(a,b)
    if (distanceTravelledInFeet(a,b) < 400)
        return 0 
    else if (distanceTravelledInFeet(a,b) <= 2000)
        return (distanceTravelledInFeet(a,b) - 400) * .02
    else if (distanceTravelledInFeet(a,b) <=2500)
        return 25
    else if (distanceTravelledInFeet(a,b) >2500)
        return `cannot travel that far`
}