// --- LÓGICA DO MENU DE NAVEGAÇÃO ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navBar.classList.add("scrolled");
    } else {
        navBar.classList.remove("scrolled");
    }
});


// --- LÓGICA FINAL DO CONTADOR DE TEMPO JUNTOS (COM HORAS, MINUTOS E SEGUNDOS) ---
const startDate = new Date(2023, 7, 12); // Ano, Mês (7 = Agosto), Dia
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();

    // Lógica para calcular anos, meses e dias decorridos
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
        months--;
        const daysInLastMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += daysInLastMonth;
    }

    if (months < 0) {
        years--;
        months += 12;
    }
    
    // Pega a hora, minuto e segundo atuais
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Adiciona um zero na frente se for menor que 10
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');

    // Formata o texto para não mostrar "0 anos" no primeiro ano
    let yearsText = "";
    if (years > 0) {
        yearsText = `<div><span>${years}</span>Ano${years !== 1 ? 's' : ''}</div>`;
    }

    const monthsText = `<div><span>${months}</span>Mês${months !== 1 ? 'es' : ''}</div>`;
    const daysText = `<div><span>${days}</span>Dias</div>`;
    const hoursText = `<div><span>${hours}</span>Horas</div>`;
    const minutesText = `<div><span>${minutes}</span>Minutos</div>`;
    const secondsText = `<div><span>${seconds}</span>Segundos</div>`;

    // Atualiza o HTML do timer com todos os elementos
    timerElement.innerHTML = `
        ${yearsText}
        ${monthsText}
        ${daysText}
        ${hoursText}
        ${minutesText}
        ${secondsText}
    `;
}

// Atualiza o timer imediatamente quando a página carrega
updateTimer();
// E depois define para atualizar a cada segundo
setInterval(updateTimer, 1000); 


// --- LÓGICA DA ANIMAÇÃO AO ROLAR (INTERSECTION OBSERVER) ---
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


// --- LÓGICA DO LIGHTBOX DA GALERIA ---
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close-button');

galleryItems.forEach(image => {
    image.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImage.src = image.src;
    });
});

function closeLightbox() {
    lightbox.classList.remove('active');
}

closeButton.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImage) {
        closeLightbox();
    }
});