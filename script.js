// --- LÓGICA DA TELA DE CARREGAMENTO (PRELOADER) ---
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        preloader.classList.add('preloader-hidden');
    }
});


// --- LÓGICA DO MENU DE NAVEGAÇÃO ---
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navBar = document.querySelector(".navbar");

if (hamburger && navMenu && navBar) {
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
}


// --- LÓGICA DO CONTADOR DE TEMPO JUNTOS ---
const startDate = new Date(2023, 7, 15);
const timerElement = document.getElementById('timer');

function updateTimer() {
    const now = new Date();
    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();
    if (days < 0) {
        months--;
        days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    }
    if (months < 0) {
        years--;
        months += 12;
    }
    let hours = String(now.getHours()).padStart(2, '0');
    let minutes = String(now.getMinutes()).padStart(2, '0');
    let seconds = String(now.getSeconds()).padStart(2, '0');
    let yearsText = "";
    if (years > 0) {
        yearsText = `<div><span>${years}</span>Ano${years !== 1 ? 's' : ''}</div>`;
    }
    const monthsText = `<div><span>${months}</span>Mês${months !== 1 ? 'es' : ''}</div>`;
    const daysText = `<div><span>${days}</span>Dias</div>`;
    const hoursText = `<div><span>${hours}</span>Horas</div>`;
    const minutesText = `<div><span>${minutes}</span>Minutos</div>`;
    const secondsText = `<div><span>${seconds}</span>Segundos</div>`;
    timerElement.innerHTML = `${yearsText}${monthsText}${daysText}${hoursText}${minutesText}${secondsText}`;
}

if (timerElement) {
    updateTimer();
    setInterval(updateTimer, 1000); 
}


// --- LÓGICA DA ANIMAÇÃO AO ROLAR ---
const hiddenElements = document.querySelectorAll('.hidden');
if (hiddenElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    hiddenElements.forEach((el) => observer.observe(el));
}


// --- LÓGICA DO LIGHTBOX DA GALERIA ---
const galleryItems = document.querySelectorAll('.gallery-item img');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightbox-image');
const closeButton = document.querySelector('.close-button');

if (galleryItems.length > 0 && lightbox && lightboxImage && closeButton) {
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
}


// --- LÓGICA PARA MANTER OS CARTÕES DE MOTIVOS VIRADOS AO CLICAR ---
const reasonCards = document.querySelectorAll('.reason-card');

if (reasonCards.length > 0) {
    reasonCards.forEach(card => {
        card.addEventListener('click', () => {
            // Adiciona ou remove a classe 'flipped' no elemento interno do cartão
            card.querySelector('.reason-card-inner').classList.toggle('flipped');
        });
    });
}