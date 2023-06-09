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
            result = convertVolume(inputVal, fromUnitVal, toUnitVal);
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

    function convertVolume(value, fromUnit, toUnit) {
        const conversionFactors = {
            '1': 1, // Cubic Meter to Cubic Meter
            '2': 1000000000, // Cubic Kilometer to Cubic Meter
            '3': 0.000001, // Cubic Centimeter to Cubic Meter
            '4': 0.000000001, // Cubic Millimeter to Cubic Meter
            '5': 0.001, // Liter to Cubic Meter
            '6': 0.000001, // Milliliter to Cubic Meter
            '7': 0.00378541, // US Gallon to Cubic Meter
            '8': 0.000946353, // US Quart to Cubic Meter
            '9': 0.000473176, // US Pint to Cubic Meter
            '10': 0.000236588, // US Cup to Cubic Meter
            '11': 0.0000295735, // US Fluid Ounce to Cubic Meter
            '12': 0.0000147868, // US Table Spoon to Cubic Meter
            '13': 0.00000492892, // US Tea Spoon to Cubic Meter
            '14': 0.00454609, // Imperial Gallon to Cubic Meter
            '15': 0.00113652, // Imperial Quart to Cubic Meter
            '16': 0.000568261, // Imperial Pint to Cubic Meter
            '17': 0.0000284131, // Imperial Fluid Ounce to Cubic Meter
            '18': 0.0000177582, // Imperial Table Spoon to Cubic Meter
            '19': 0.00000591939, // Imperial Tea Spoon to Cubic Meter
            '20': 4168181825.44, // Cubic Mile to Cubic Meter
            '21': 0.764554858, // Cubic Yard to Cubic Meter
            '22': 0.0283168, // Cubic Foot to Cubic Meter
            '23': 0.0000163871 // Cubic Inch to Cubic Meter
        };

        if (conversionFactors.hasOwnProperty(fromUnit) && conversionFactors.hasOwnProperty(toUnit)) {
            const result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
            return result.toFixed(2);
        } else {
            return 'Invalid units';
        }
    }

});