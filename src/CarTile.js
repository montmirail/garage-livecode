const carsList = document.getElementById('cars-list');

const renderCarTile = car => {
    const el = `
    <div class="car">
        <div class="car-image">
            <img src="http://loremflickr.com/280/280/Ferrari 308 GTS" />
        </div>

        <div class="car-info">
            <h4>${car.brand} ${car.model}</h4>
            <p><strong>Owner:</strong> ${car.owner}</p>
            <p><strong>Plate:</strong> ${car.plate}</p>
        </div>
    </div>
    `
    carsList.insertAdjacentHTML('beforeend', el);
}

export {renderCarTile}