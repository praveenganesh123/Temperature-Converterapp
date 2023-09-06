function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let convertedTemperature = 0;
    let unitString = "";

    if (unit === 'celsius') {
        convertedTemperature = (temperatureInput - 32) * 5/9;
        unitString = "Celsius";
    } else if (unit === 'fahrenheit') {
        convertedTemperature = (temperatureInput * 9/5) + 32;
        unitString = "Fahrenheit";
    } else if (unit === 'kelvin') {
        convertedTemperature = (temperatureInput - 32) * 5/9 + 273.15;
        unitString = "Kelvin";
    }

    document.getElementById('result').value = ` ${convertedTemperature.toFixed(2)} `;
}