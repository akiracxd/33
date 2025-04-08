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
            totalFloors: 9,
            year: 2015,
            description: "Просторная светлая квартира с современным ремонтом. Панорамные окна, кухня-гостиная 25 м², две изолированные спальни, санузел раздельный. Дом с закрытой территорией, парковкой и детской площадкой.",
            features: ["Кондиционер", "Мебель", "Техника", "Балкон", "Охрана"],
            images: ["apartment1.jpg", "apartment1-2.jpg", "apartment1-3.jpg"]
        },
        {
            id: 2,
            title: "1-комнатная квартира с ремонтом",
            address: "ул. Зеленая, 42",
            price: 25000,
            rooms: 1,
            area: 40,
            floor: 5,
            totalFloors: 12,
            year: 2018,
            description: "Уютная однокомнатная квартира с качественным ремонтом. Большая кухня 12 м², просторная комната 18 м², прихожая с гардеробной зоной. Окна выходят на тихий двор.",
            features: ["Мебель", "Техника", "Лоджия", "Видеодомофон"],
            images: ["apartment2.jpg", "apartment2-2.jpg"]
        },
        {
            id: 3,
            title: "3-комнатная квартира в новостройке",
            address: "ул. Новая, 7",
            price: 45000,
            rooms: 3,
            area: 85,
            floor: 12,
            totalFloors: 25,
            year: 2020,
            description: "Современная квартира в новом жилом комплексе бизнес-класса. Видовые характеристики, просторные комнаты, кухня 15 м², два санузла. В доме: фитнес-центр, подземный паркинг, консьерж-сервис.",
            features: ["Кондиционер", "Мебель", "Техника", "Два санузла", "Панорамные окна", "Охрана"],
            images: ["apartment3.jpg", "apartment3-2.jpg", "apartment3-3.jpg", "apartment3-4.jpg"]
        }
    ];

    const apartmentsList = document.getElementById('apartmentsList');
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <div class="apartment-details" id="apartmentDetails"></div>
        </div>
    `;
    document.body.appendChild(modal);
    const closeBtn = modal.querySelector('.close');
    const apartmentDetails = document.getElementById('apartmentDetails');

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
                <div class="apartment-img" style="background-image: url(${apartment.images[0]})"></div>
                <div class="apartment-info">
                    <h3>${apartment.title}</h3>
                    <p>${apartment.address}</p>
                    <p>Комнат: ${apartment.rooms}</p>
                    <p>Площадь: ${apartment.area} м²</p>
                    <p>Этаж: ${apartment.floor}/${apartment.totalFloors || '-'}</p>
                    <p class="price">${apartment.price.toLocaleString()} ₽/мес</p>
                    <button class="btn" onclick="viewApartment(${apartment.id})">Подробнее</button>
                </div>
            `;
            
            apartmentsList.appendChild(apartmentCard);
        });
    }

    function viewApartment(id) {
        const apartment = apartments.find(a => a.id === id);
        if (!apartment) return;

        apartmentDetails.innerHTML = `
            <div class="apartment-gallery">
                <img src="${apartment.images[0]}" alt="${apartment.title}" class="main-image" id="mainImage">
                <div class="thumbnails">
                    ${apartment.images.map((img, index) => `
                        <img src="${img}" alt="Фото ${index + 1}" class="thumbnail" onclick="document.getElementById('mainImage').src='${img}'">
                    `).join('')}
                </div>
            </div>
            <div class="apartment-info">
                <h2>${apartment.title}</h2>
                <p class="address">${apartment.address}</p>
                <p class="price" style="font-size: 1.5rem; color: #e74c3c;">${apartment.price.toLocaleString()} ₽/мес</p>
                
                <div class="info-grid">
                    <div class="info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Комнат: ${apartment.rooms}
                    </div>
                    <div class="info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="3" width="18" height="18" rx="2"></rect>
                        </svg>
                        Площадь: ${apartment.area} м²
                    </div>
                    <div class="info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                        </svg>
                        Телефон: +7 (123) 456-78-90
                    </div>
                    <div class="info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Этаж: ${apartment.floor}/${apartment.totalFloors || '-'}
                    </div>
                    <div class="info-item">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="M2 10h20M7 15h1m4 0h1m4 0h1"></path>
                        </svg>
                        Год постройки: ${apartment.year || '-'}
                    </div>
                </div>
                
                <div class="features">
                    <h3>Особенности:</h3>
                    <ul class="features-list">
                        ${apartment.features.map(f => `<li>${f}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="description">
                    <h3>Описание:</h3>
                    <p>${apartment.description}</p>
                </div>
                
                <button class="contact-btn" onclick="alert('Специалист свяжется с вами в ближайшее время!')">Связаться</button>
            </div>
        `;

        modal.style.display = "block";
    }

    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    window.viewApartment = viewApartment;

    // Инициализация - показываем все квартиры
    displayApartments(apartments);
});