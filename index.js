const drivers = ['Antonia','Nuru','Amari','Mo'];
function returnFirstTwoDrivers(drivers){
    const firstTwo = drivers.slice(0,2);
    return firstTwo
}
function returnLastTwoDrivers(drivers){
    const lastTwo = drivers.slice(-2);
    return lastTwo
}
const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]
// Code your solution in this file!
function createFareMultiplier(fare){
  return function fareQuintupler(fare){
    let quad = (fare * 4) + fare
    return quad
  }
}
const double = createFareMultiplier()
function fareDoubler(fare){
   return fare * 2
}
function fareTripler(fare){
    return fare * 3
 }
 function selectDifferentDrivers(drivers, func){
      return func(drivers);
 }