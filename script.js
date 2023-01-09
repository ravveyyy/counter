let value = 0;
function increment() {
    value++;
    num.textContent = value;
}

function decrement() {
    value--;
    num.textContent = value;
}

function reset() {
    value=0;
    num.textContent = value;
}
const num = document.querySelector('#number');

const incrementButton = document.querySelector('#increment');
incrementButton.addEventListener("click",increment);

const decrementButton = document.querySelector('#decrement');
decrementButton.addEventListener("click",decrement);

const resetButton = document.querySelector('#reset');
resetButton.addEventListener("click",reset);
