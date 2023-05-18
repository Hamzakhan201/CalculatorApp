let result = document.getElementById("result");

function insertValue(val) {
    result.value += val;
}

function clearResult() {
    result.value = "";
}

function calculate() {
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}