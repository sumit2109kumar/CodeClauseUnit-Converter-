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
            result = convertTime(inputVal, fromUnitVal, toUnitVal);
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

    function convertTime(value, fromUnit, toUnit) {
        const conversionFactors = {
            '1': 1, // Second to Second
            '2': 0.001, // Millisecond to Second
            '3': 0.000001, // Microsecond to Second
            '4': 0.000000001, // Nanosecond to Second
            '5': 0.000000000001, // Picosecond to Second
            '6': 60, // Minute to Second
            '7': 3600, // Hour to Second
            '8': 86400, // Day to Second
            '9': 604800, // Week to Second
            '10': 2592000, // Month to Second 
            '11': 31536000 // Year to Second
        };

        if (conversionFactors.hasOwnProperty(fromUnit) && conversionFactors.hasOwnProperty(toUnit)) {
            const result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
            return result.toFixed(2);
        } else {
            return 'Invalid units';
        }
    }
});