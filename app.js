const btn = document.querySelectorAll('.btn');
const input = document.querySelector('#input');

const divide = document.querySelector('#divide');
const multiply = document.querySelector('#multiply');
const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const equals = document.querySelector('#equals');
const reset = document.querySelector('#reset');

divide.addEventListener('click', () => {
    addOperatorsToInput("/");
});

multiply.addEventListener('click', () => {
    addOperatorsToInput("*");
});

add.addEventListener('click', () => {
    addOperatorsToInput("+");
});

minus.addEventListener('click', () => {
    addOperatorsToInput("-");
});

equals.addEventListener('click', calculateFinal);

reset.addEventListener('click', () => {
    input.value = '';
});

btn.forEach(ele => {
    ele.addEventListener('click', addToInput);
})

function addToInput(e) {
    const value = e.target.innerText;
    input.value = `${input.value}${value}`;
}

function addOperatorsToInput(value) {
    input.value = `${input.value}${value}`;
}

function calculateFinal() {
    const res = eval(input.value);
    input.value = res;
}