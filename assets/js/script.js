// ================================================
// Deutsche Nachlass Bank - Premium JavaScript
// Exercice Développement Web - Version Haut de Gamme
// ================================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('%c🚀 Deutsche Nachlass Bank Demo chargée - Exercice Dev Web 2026', 
                'color: #60a5fa; font-size: 15px; font-weight: bold;');

    // Animation du solde au chargement
    animateBalance();
});

// Animation élégante du solde
function animateBalance() {
    const balanceElements = document.querySelectorAll('.balance');
    balanceElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.style.transition = 'all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)';
            el.style.opacity = '1';
            el.style.transform = 'scale(1.05)';
            setTimeout(() => el.style.transform = 'scale(1)', 600);
        }, index * 150);
    });
}

// === PAGE LOGIN ===
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const button = e.target.querySelector('button');
        button.innerHTML = `
            <span class="inline-block animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-3"></span>
            Vérification en cours...
        `;
        button.disabled = true;

        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1450);
    });
}

// === MODAL FREIGABE ===
function openFreigabeModal() {
    const modal = document.getElementById('freigabeModal');
    if (!modal) return;

    modal.classList.remove('hidden');
    modal.classList.add('flex');

    // Effet sonore visuel (animation)
    const card = document.querySelector('.bank-card');
    if (card) card.style.transform = 'scale(0.98)';
    setTimeout(() => { if (card) card.style.transform = 'scale(1)'; }, 200);
}

function closeModal() {
    const modal = document.getElementById('freigabeModal');
    if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    }
}

function submitFreigabe() {
    closeModal();

    const loaderHTML = `
        <div id="customLoader" class="fixed inset-0 bg-zinc-950/90 flex items-center justify-center z-[9999]">
            <div class="text-center">
                <div class="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p class="text-blue-400 mt-8 text-lg font-medium">Transmission à Notar Zink Alfred...</p>
                <p class="text-zinc-500 text-sm mt-2">Sécurisé • Chiffré • Traçable</p>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', loaderHTML);

    setTimeout(() => {
        const loader = document.getElementById('customLoader');
        if (loader) loader.remove();

        alert(`✅ ANTRAG ERFOLGREICH GESENDET !

Notar Zink Alfred a été informé.
Numéro de dossier : NK-2026-${Math.floor(100000 + Math.random() * 900000)}

Temps de traitement estimé : 5 à 10 jours ouvrables.

Merci pour votre confiance.`);
    }, 2450);
}

// === LOGOUT ===
function logout() {
    if (confirm("Voulez-vous vraiment vous déconnecter ?")) {
        window.location.href = 'index.html';
    }
}

// === Bonus interactions ===
document.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        const modal = document.getElementById('freigabeModal');
        if (modal && !modal.classList.contains('hidden')) closeModal();
    }
});