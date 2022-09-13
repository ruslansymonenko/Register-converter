const textInput = document.querySelector('.text_input');
const btnConvert = document.querySelector('.convert_btn');
const ouputText = document.querySelector('.ouput_text');
const copyBtn = document.querySelector('.copy_btn');
const modeBtns = document.querySelectorAll('.btn');

const modes = {
    upperCase: false,
    loverCase: false,
    capitalLetters: false,
    inversionRegister: false,
}

function modesSort (keyValue) {
    for (key in modes) {
        if (key == keyValue) {
            modes[key] = true
        } else {
            modes[key] = false
        }
    }
}

function checkModeOn () {
    let currentModeToCheck = '';

    modeBtns.forEach((item) => {
        if (item.classList.contains('btn_on')) {
            currentModeToCheck = item.textContent;
        }
    })

    if (currentModeToCheck != '') {
        return currentModeToCheck;
    } else {
        alert('Please, chose the mode');
    }
}

function useUpperCase (text) {
    return text.toUpperCase();
}

function useLowerCase (text) {
    return text.toLowerCase();
}

function useCapitalLetters (text) {
    text = text.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');
    return text;
}

function useInversionRegister (text) {
    text = text.replace(/./g, c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase());
    return text;
}

function changeRegister (str = 'Write text', mode) {
    let result = '';

    switch (mode) {
        case 'Uppercase':
            result = useUpperCase(str);
            break;
        case 'Lovercase':
            result = useLowerCase(str);
            break;
        case 'Capital Leters':
            result = useCapitalLetters(str);
            break;
        case 'Inversion Register':
            result = useInversionRegister(str);
            break;
        default:
            console.log('Something wrong');
    }

    return result;
}

function checkResultContainer () {
    let element = document.querySelector('.output_text');

    if (typeof(element) != 'undefined' && element != null) {
        element.remove();
    }
}

function showResult (result) {
    let resultContainer= document.querySelector('.ouput_text_field');
    let resultField = document.createElement('div');
    resultField.classList.add('output_text');
    resultField.textContent = result;
    resultContainer.append(resultField);
}



btnConvert.addEventListener('click', () => {
    let text = textInput.value;
    let mode = checkModeOn();
    let textResult = changeRegister(text, mode);
    checkResultContainer();
    showResult(textResult);
})

