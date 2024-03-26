// Code your solution in this file!

// 1-get distance of Hq in blocks
function distanceFromHqInBlocks(blockNumber){
    if(blockNumber > 42){
        return blockNumber - 42
    } else{
        return 42 - blockNumber
    }
};


// 2- returns distance 

const feetPerBlock = 264;

function distanceFromHqInFeet(blockNumber){
    return feetPerBlock * distanceFromHqInBlocks(blockNumber)
}


// 3-calculates distance below 42nd street

function distanceTravelledInFeet(start, end){
    if (end > start){
        return (end - start) * feetPerBlock
    } else if (start > end){
        return (start - end) * feetPerBlock
    }
}


// 4- returns distance in feet

function calculatesFarePrice(start, end){
    if (distanceTravelledInFeet(start, end) < 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, end) > 400 && distanceTravelledInFeet(start, end) < 2000){
        return 0.02 * (distanceTravelledInFeet(start, end) - 400);
    } else if (distanceTravelledInFeet(start, end) < 2500){
        return 25;
    } else if (distanceTravelledInFeet(start, end) > 2500){
        return 'cannot travel that far'
    }
}
