/* BMI calculator */

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return bmi;
}

console.log(bmiCalculator(70, 1.8).toFixed(2));