function add (a , b) {
	return a + b;
};

function subtract (a , b) {
	return a - b;
};
function multiply (a , b) {
	return a * b;
};
function divide (a , b) {
	return a / b;
};
function operate (value1, operator, value2){
    let value = 0; 
    if(operator == "+")
        value = add(value1, value2);
    if(operator == "-")
        value = subtract(value1, value2);
    if(operator == "*")
        value = multiply(value1, value2);
    if(operator == "/")
        value = divide(value1, value2);
}