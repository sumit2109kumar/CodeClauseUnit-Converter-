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
        result = convertLength(inputVal, fromUnitVal, toUnitVal);
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
  
    function convertLength(value, fromUnit, toUnit) {
      const conversionFactors = {
        1: 1, // Meter to Meter
        2: 1000, // Kilometer to Meter
        3: 0.01, // Centimeter to Meter
        4: 0.001, // Millimeter to Meter
        5: 0.000001, // Micrometer to Meter
        6: 0.000000001, // Nanometer to Meter
        7: 1609.34, // Mile to Meter
        8: 0.9144, // Yard to Meter
        9: 0.3048, // Foot to Meter
        10: 0.0254, // Inch to Meter
        11: 9460730472580800 // Light Year to Meter
      };
  
      if (conversionFactors.hasOwnProperty(fromUnit) && conversionFactors.hasOwnProperty(toUnit)) {
        const result = (value * conversionFactors[fromUnit]) / conversionFactors[toUnit];
        return result.toFixed(2);
      } else {
        return 'Invalid units';
      }
    }
  });