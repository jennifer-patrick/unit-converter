/*
1 meter = 3.281 feet
1 litre = 1.7598 UK pints
1 kilogram = 2.204 pounds
*/

const number = document.getElementById("number")
const convertBtn = document.getElementById("convert")

const lengthConvert = document.getElementById("length")
const volumeConvert = document.getElementById("volume")
const massConvert = document.getElementById("mass")

convertBtn.addEventListener("click", function() {
    lengthConvert.innerText=
    `${number.value} meters = ${(number.value*3.281).toFixed(3)} feet | ${number.value} feet = ${(number.value/3.281).toFixed(3)} meters`
    
    volumeConvert.innerText=
    `${number.value} litres = ${(number.value*1.7598).toFixed(3)} pints | ${number.value} litres = ${(number.value/1.7598).toFixed(3)} pints`
    
    massConvert.innerText=
    `${number.value} kilograms = ${(number.value*2.204).toFixed(3)} pounds | ${number.value} kilograms = ${(number.value/2.204).toFixed(3)} pounds`
})
