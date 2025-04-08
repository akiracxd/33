document.addEventListener('DOMContentLoaded', function() {
    // Массив квартир
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
        }
    ];

    // Отображение избранных квартир на главной
    const featuredApartments = document.getElementById('featuredApartments');
    
    apartments.slice(0, 3).forEach(apartment => {
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
            </div>
        `;
        
        featuredApartments.appendChild(apartmentCard);
    });
});