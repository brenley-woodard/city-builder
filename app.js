/* Get DOM Elements */
const temperatureSelect = document.getElementById('temperature-select');
const architectureSelect = document.getElementById('architecture-select');
const cuisineSelect = document.getElementById('cuisine-select');

const tempImg = document.getElementById('temp-img');
const archImg = document.getElementById('arch-img');
const foodImg = document.getElementById('food-img');

const counterEl = document.getElementById('counter');

const addButton = document.getElementById('add-button');
const sloganInput = document.getElementById('slogan-input');
const sloganEl = document.getElementById('slogan-element');

/* State */
let tempCounter = 0;
let archCounter = 0;
let foodCounter = 0;

let slogans = [];

/* Events */
temperatureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    tempImg.src = `./assets/${value}.png`;
    tempCounter++;
    displayStats();
});

architectureSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    archImg.src = `./assets/${value}.png`;
    archCounter++;
    displayStats();
});

cuisineSelect.addEventListener('change', (e) => {
    const value = e.target.value;
    foodImg.src = `./assets/${value}.png`;
    foodCounter++;
    displayStats();
});

addButton.addEventListener('click', () => {
    const sloganValue = sloganInput.value;
    slogans.push(sloganValue);

    displaySlogan();
    sloganInput.value = '';
});

/* Display Functions */
function displayStats() {
    counterEl.textContent = `You have changed the temperature ${tempCounter} times, 
    the architecture ${archCounter} times, and the cuisine ${foodCounter} times. Your cities slogans are ...`;
}

function displaySlogan() {
    sloganEl.textContent = '';

    // for (let slogan of slogans) {
    //     const p = document.createElement('p');
    //     p.textContent = slogan;
    //     sloganEl.append(p);
    // }

    const p = document.createElement('p');
    p.textContent = slogans[slogans.length - 1];
    sloganEl.append(p);
}
// (don't forget to call any display functions you want to run on page load!)

displayStats();
