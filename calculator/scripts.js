function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}
function multipy(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b == 0) {
        console.log("can't divide");
    } else {
        return a / b;
    }
}
function operate(number1, operator, number2) {
    switch (operator) {
        case '+':
            return add(number1, number2);

        case '-':
            return subtract(number1, number2);

        case '*':
            return multipy(number1, number2);
        case '/':
            return divide(number1, number2);
    }
}

const display = document.querySelector('.display');
function sendToDisplay(displayText) {
    display.textContent = `${displayText}`;
}

function clearDisplay() {
    display.textContent = '';
}
const number = Array.from(document.querySelectorAll('.numeric-keys'));
const operator = Array.from(document.querySelectorAll('.operator-keys'));
const nums = [];
let opera = '';
let currentNum='';
const number1 = number.forEach((number) => {
    number.addEventListener('click', () => {
        currentNum+=number.textContent;
        sendToDisplay(currentNum);
    });
});
const operator1 = operator.forEach((op) => {
    op.addEventListener('click', () => {
        nums.push(Number(currentNum));
        currentNum='';
        opera = op.textContent;
        sendToDisplay(op.textContent);
    });
});

const result = document.querySelector('.equal');
result.addEventListener('click', () => {
    nums.push(currentNum);
    const number_1=Number(nums[0]);
    const number_2=Number(nums[1]);
    const final = operate(number_1, opera, number_2);
    sendToDisplay(final);
});
const deleteAll=document.querySelector('.ac');
deleteAll.addEventListener('click', ()=>{
    clearDisplay();
    currentNum='';
    nums.length=0;
})

const delOne =  document.querySelector('.delete');
// delOne.addEventListener('click', ()=>{
//     if(currentNum==''|| currentNum.length==1){
//         clearDisplay();
//     }
//     const newNum= currentNum.splice(currentNum.length-1,)

// })