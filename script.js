let display = document.getElementById('display');

function appendToDisplay(value) {
    if (value === 'Math.PI') {
        display.value += Math.PI;
    } else if (value === 'Math.E') {
        display.value += Math.E;
    } else {
        display.value += value;
    }
}

function clearDisplay() {
    display.value = '';
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let result = eval(display.value);
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function calculateFunction(func) {
    try {
        let value = parseFloat(display.value);
        let result;
        
        switch(func) {
            case 'sin':
                result = Math.sin(value);
                break;
            case 'cos':
                result = Math.cos(value);
                break;
            case 'tan':
                result = Math.tan(value);
                break;
            case 'sqrt':
                if (value < 0) {
                    throw new Error('Cannot calculate square root of negative number');
                }
                result = Math.sqrt(value);
                break;
        }
        
        if (isNaN(result) || !isFinite(result)) {
            throw new Error('Invalid calculation');
        }
        
        display.value = result;
    } catch (error) {
        display.value = 'Error';
    }
}

function changeSign() {
    if (display.value.startsWith('-')) {
        display.value = display.value.substring(1);
    } else {
        display.value = '-' + display.value;
    }
}

// 키보드 입력 지원
document.addEventListener('keydown', function(event) {
    const key = event.key;
    
    if (/[0-9]/.test(key) || ['+', '-', '*', '/', '(', ')', '.', '^'].includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculate();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}); 