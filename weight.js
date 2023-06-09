document.addEventListener('DOMContentLoaded', function () {

    var SelectfromUnit = document.getElementById('fromUnit');
    var SelecttoUnit = document.getElementById('toUnit');
    var inputField = document.getElementById('Input');
    var resultDiv = document.getElementById('result');
    var resetBtn = document.getElementById('resetBtn');
    var calculateBtn = document.getElementById('calculateBtn');

    calculateBtn.addEventListener('click', function (event) {
        event.preventDefault();
        var fromUnitVal = parseFloat(SelectfromUnit.value);
        var toUnitVal = parseFloat(SelecttoUnit.value);
        var inputVal = parseFloat(inputField.value);

        var result;
        if (inputVal != NaN) {
            result = convertWeight(inputVal, fromUnitVal, toUnitVal);
            resultDiv.textContent = result;
        } else {
            resultDiv.textContent = 'Invalid input';
        }
    });

    resetBtn.addEventListener('click', function (event) {
        event.preventDefault();
        inputField.value = '';
        resultDiv.textContent = '';
        SelectfromUnit.selectedIndex = 0;
        SelecttoUnit.selectedIndex = 0; 
    });

    function convertWeight(value, fromUnit, toUnit) {
        const conversionFactors = {
            '1': 1, // Kilogram to Kilogram
            '2': 0.001, // Gram to Kilogram
            '3': 0.000001, // Milligram to Kilogram
            '4': 1000, // Metric Ton to Kilogram
            '5': 1016.0469088, // Long Ton to Kilogram
            '6': 907.18474, // Short Ton to Kilogram
            '7': 0.45359237, // Pound to Kilogram
            '8': 0.028349523125, // Ounce to Kilogram
            '9': 0.0002, // Carrat to Kilogram
            '10': 1.66053906660e-27 // Atomic Mass Unit to Kilogram
        };

        if (conversionFactors.hasOwnProperty(fromUnit) && conversionFactors.hasOwnProperty(toUnit)) {
            const result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
            return result.toFixed(2);
        } else {
            return 'Invalid units';
        }
    }
});