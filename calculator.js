function appendToResult(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}

function calculateResult() {
    let expression = document.getElementById('result').value;
    let result;

    try {
        result = eval(expression);
    } catch (error) {
        result = 'Error';
    }

    document.getElementById('result').value = result;
}

function calculateSquare() {
    let number = document.getElementById('result').value;
    let result = parseFloat(number) ** 2;

    document.getElementById('result').value = result;
}