document.addEventListener('DOMContentLoaded', function() {
    const apartments = [
        {
            id: 1,
            title: "2-комнатная квартира в центре",
            address: "ул. Центральная, 15",
            price: 35000,
            rooms: 2,
            area: 65,
            floor: 3,
            img: "apartment1.jpg"
        },
        {
            id: 2,
            title: "1-комнатная квартира с ремонтом",
            address: "ул. Зеленая, 42",
            price: 25000,
            rooms: 1,
            area: 40,
            floor: 5,
            img: "apartment2.jpg"
        },
        {
            id: 3,
            title: "3-комнатная квартира в новостройке",
            address: "ул. Новая, 7",
            price: 45000,
            rooms: 3,
            area: 85,
            floor: 12,
            img: "apartment3.jpg"
        },
        {
            id: 4,
            title: "Студия в центре",
            address: "ул. Главная, 33",
            price: 22000,
            rooms: 1,
            area: 35,
            floor: 2,
            img: "apartment4.jpg"
        },
        {
            id: 5,
            title: "4-комнатная квартира",
            address: "ул. Широкая, 10",
            price: 55000,
            rooms: 4,
            area: 110,
            floor: 7,
            img: "apartment5.jpg"
        },
        {
            id: 6,
            title: "2-комнатная квартира с балконом",
            address: "ул. Солнечная, 5",
            price: 32000,
            rooms: 2,
            area: 60,
            floor: 4,
            img: "apartment6.jpg"
        }
    ];

    const apartmentsList = document.getElementById('apartmentsList');
    const roomsFilter = document.getElementById('rooms');
    const priceFilter = document.getElementById('price');
    const applyFiltersBtn = document.getElementById('applyFilters');

    function displayApartments(apartmentsToShow) {
        apartmentsList.innerHTML = '';
        
        if (apartmentsToShow.length === 0) {
            apartmentsList.innerHTML = '<p>По вашему запросу ничего не найдено</p>';
            return;
        }
        
        apartmentsToShow.forEach(apartment => {
            const apartmentCard = document.createElement('div');
            apartmentCard.className = 'apartment-card';
            
            apartmentCard.innerHTML = `
                <div class="apartment-img" style="background-image: url(${apartment.img})"></div>
                <div class="apartment-info">
                    <h3>${apartment.title}</h3>
                    <p>${apartment.address}</p>
                    <p>Комнат: ${apartment.rooms}</p>
                    <p>Площадь: ${apartment.area} м²</p>
                    <p>Этаж: ${apartment.floor}</p>
                    <p class="price">${apartment.price.toLocaleString()} ₽/мес</p>
                    <button class="btn" onclick="viewApartment(${apartment.id})">Подробнее</button>
                </div>
            `;
            
            apartmentsList.appendChild(apartmentCard);
        });
    }

    function filterApartments() {
        const roomsValue = roomsFilter.value;
        const priceValue = priceFilter.value ? parseInt(priceFilter.value) : null;
        
        const filtered = apartments.filter(apartment => {
            let matches = true;
            
            if (roomsValue !== 'any') {
                if (roomsValue === '3+' && apartment.rooms < 3) {
                    matches = false;
                } else if (parseInt(roomsValue) !== apartment.rooms) {
                    matches = false;
                }
            }
            
            if (priceValue && apartment.price > priceValue) {
                matches = false;
            }
            
            return matches;
        });
        
        displayApartments(filtered);
    }

    function viewApartment(id) {
 
        alert(`Просмотр квартиры #${id}`);
    }


    displayApartments(apartments);

    applyFiltersBtn.addEventListener('click', filterApartments);
    window.viewApartment = viewApartment;
});