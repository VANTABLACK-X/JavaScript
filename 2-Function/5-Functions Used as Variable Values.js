let text = "The temperature is " + toCelsius(77) + " Celsius."; //toCelsius(77) as a variable
document.getElementById("demo").innerHTML = text;

function toCelsius(fahrenheit) {
  return (5/9) * (fahrenheit-32);
} 