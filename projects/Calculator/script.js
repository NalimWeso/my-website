let runningTotal = 0;
let buffer = '0';
let previousOperator = null;

const screen = document.querySelector('.screen');

function buttonClick(value) {
    if (isNaN(value)) {
        handleSymbol(value);
    }
    else {
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol) {
    switch (symbol) {
        case 'C':
            runningTotal = 0;
            buffer = '0';
            break;
        case '←':
            if (buffer.length === 1) {
                buffer = '0';
            }
            else {
                bufferToString = buffer.toString();
                buffer = bufferToString.substring(0, bufferToString.length - 1);
            }
            break;
        case '+':
        case '−':
        case '×':
        case '÷':
            handleMath(symbol);
            break;
        case '=':
            if (previousOperator === null) {
                return;
            };
            flushOperation(parseInt(buffer));
            buffer = runningTotal;
            runningTotal = 0;
            break;
    }
};

function handleMath(symbol) {
    if (buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    if (runningTotal === 0) {
        runningTotal = intBuffer;
    }
    else {
        flushOperation(intBuffer);
    }

    previousOperator = symbol;

    buffer = '0';
}

function flushOperation(intBuffer) {
    if (previousOperator === '+') {
        runningTotal += intBuffer;
    }
    else if (previousOperator === '−') {
        runningTotal -= intBuffer;
    }
    else if (previousOperator === '×') {
        runningTotal *= intBuffer;
    }
    else if (previousOperator === '÷') {
        runningTotal /= intBuffer;
    }
}

function handleNumber(numberString) {
    if (buffer === '0') {
        buffer = numberString;
    }
    else {
        buffer += numberString;
    }
};

function init() {
    document.querySelector('.calc-buttons').addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            buttonClick(event.target.innerText);
        }
    });
}

init();