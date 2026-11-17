// Base de dados
const linksData = {
    gerais: [
        { title: "Novo Hub de Links", url: "https://prisma-pages.github.io/Hub-Links-Gerais/" }]
};

// Renderizar os botões dinamicamente
function renderButtons() {
    for (const category in linksData) {
        const container = document.getElementById(`grid-${category}`);
        if (!container) continue;

        container.innerHTML = '';

        linksData[category].forEach(item => {
            const card = document.createElement('div');
            card.className = 'btn-card';

            card.innerHTML = `
                <a href="${item.url}" target="_blank" rel="noopener noreferrer" class="main-link">
                    ${item.title}
                </a>
                <button class="copy-btn" aria-label="Copiar link do ${item.title}">
                    <i data-lucide="copy"></i> Copiar Link
                </button>
            `;

            const copyBtn = card.querySelector('.copy-btn');
            copyBtn.addEventListener('click', (e) => copyToClipboard(e, item.url));

            container.appendChild(card);
        });
    }

    // Inicializar os ícones do Lucide após renderizar o DOM
    lucide.createIcons();
}

// Copiar URL para a área de transferência
function copyToClipboard(event, url) {
    event.stopPropagation();
    event.preventDefault();

    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url)
            .then(() => showToast())
            .catch(err => console.error("Erro ao copiar o link: ", err));
    } else {
        const textArea = document.createElement('textarea');
        textArea.value = url;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (err) {
            console.error("Erro no fallback de cópia: ", err);
        }
        document.body.removeChild(textArea);
    }
}

// Toast Notificação
let toastTimeout;
function showToast() {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 2500);
}

// Inicialização
document.addEventListener('DOMContentLoaded', renderButtons);
