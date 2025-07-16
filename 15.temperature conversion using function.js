// 1. convert to Fahrenheit
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
console.log(toFahrenheit(0)); // Convert 0°C to Fahrenheit
// 2. convert to Celsius
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}
console.log(toCelsius(32)); // Convert 32°F to Celsius

// 3. create a function that takes a temperature and a unit, and returns the converted temperature
function convertTemperature(temp, unit) {
    if (unit === "C") {
        return toFahrenheit(temp); // Convert Celsius to Fahrenheit
    }else if (unit === "F") {
        return toCelsius(temp); // Convert Fahrenheit to Celsius
    }
}
console.log(convertTemperature(0, "C")); // Convert 0°C to Fahrenheit
console.log(convertTemperature(32, "F")); // Convert 32°F to Celsius