// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
//Returns first two drivers
const returnFirstTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(0, 2);
}
    //Returns the last two drivers
const returnLastTwoDrivers = function(drivers){
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    return drivers.slice(2);
}
//Select drivers from two functions
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
const createFareMultiplier = function (multiplier){
    return function(fare){
        return fare * multiplier
    }
}


//create a function to multiply a number by 5

 //function to double fares

 const fareDoubler = function(fare){
    
   return fare * 2;
    

   
} 
// function to tripples fare
const fareTripler = function(fare){
    
    return fare * 3;
}
const selectDifferentDrivers = function(drivers,returnFirstTwoDrivers ) {
    return returnFirstTwoDrivers(drivers)
  }
  
