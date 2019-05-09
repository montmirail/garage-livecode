import {apiUrl, garageName} from './config';
import { renderCarTile } from './CarTile';

export const fetchCars = () => {
    fetch(`${apiUrl}/${garageName}/cars`)
        .then(response => response.json())
        .then(data => data.forEach(renderCarTile));
}

export const addCar = data => {
    fetch(`${apiUrl}/${garageName}/cars`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(renderCarTile);
}