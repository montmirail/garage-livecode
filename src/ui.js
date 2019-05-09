import {addCar, fetchCars} from './api';

const form = document.getElementById('new-car');
const brandInput = document.getElementById('brand'); 
const modelInput = document.getElementById('model');
const plateInput = document.getElementById('plate');
const ownerInput = document.getElementById('owner');

const setFocusAtStart = () => brandInput.focus();

const initForm = () => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const car = {
            brand: brandInput.value,
            model: modelInput.value,
            owner: plateInput.value,
            plate: ownerInput.value
        }
        
        addCar(car);
        form.reset();
        setFocusAtStart();
    });
}

const initUI = () => {
    initForm();
    fetchCars();
}

export { initUI };