// Base de dados
const linksData = {
    patio: [
        { title: "Painel CCO", url: "https://autovm/Sistemas/PainelCCO/PainelCCO.aspx" },
        { title: "Painel CCP", url: "https://autovm/Sistemas/PainelCCPTU/PainelCCPTU.aspx" },
        { title: "Painel Gráfico Torre B", url: "http://efvmonline/ccp_online/painelgrafico/vtu/torreb/" },
        { title: "Layout Torre B", url: "https://efvmworkplace/Portal/CCPOnline/System/VisualizarLayout.php?id=2" },
        { title: "SIOP", url: "https://siop.gpvportos-v2.valeglobal.net/reports/menu/view" },
        { title: "TOPS", url: "https://tops/AssetManager/RailRoadReport/Index" },
        { title: "Tempo de Drenagem", url: "https://apps.powerapps.com/play/e/default-7893571b-6c2c-4cef-b4da-7d4b266a0626/a/43c98f33-9f63-4004-92b1-fd81c5589612?tenantId=7893571b-6c2c-4cef-b4da-7d4b266a0626&hint=be57728e-7413-4edd-a3e1-5946ff8c6e29&sourcetime=1790801032159" },
        { title: "Painel de Apresentação", url: "http://efvmonline/trocadeturno/v2/default.asp" },
        { title: "Teste de Prontidão", url: "https://sistemaprontos.com.br/auth/realms/vale/protocol/openid-connect/auth?client_id=teste-web&redirect_uri=https%3A%2F%2Fvale.sistemaprontos.com.br%2F%23%2Fintroducao&state=d99fbf2d-46b3-42ae-b42e-d989565bf037&response_mode=fragment&response_type=code&scope=openid&nonce=6d95ac97-25d3-4a64-851c-c32570dc1d7c" }
    ],
    gerais: [
        { title: "GDB", url: "https://gdb.valeglobal.net/gdb/view/login/login.faces" },
        { title: "DSS", url: "https://efvmworkplace/dss/login_form.asp?logim=500" },
        { title: "FMDS", url: "https://app.powerbi.com/singleSignOn?ctid=7893571b-6c2c-4cef-b4da-7d4b266a0626&experience=power-bi&bookmarkGuid=3d256c68-3049-4128-99c7-bfb8a49f1052&ru=https%3A%2F%2Fapp.powerbi.com%2Fgroups%2Fme%2Fapps%2F395a30ec-08d1-4e65-a74b-56054cb0e6c7%2Freports%2F41e048db-e095-4ec3-95c5-c76f0bc2c548%2FReportSection90f9ec802b7e00200520%3Fctid%3D7893571b-6c2c-4cef-b4da-7d4b266a0626%26experience%3Dpower-bi%26bookmarkGuid%3D3d256c68-3049-4128-99c7-bfb8a49f1052%26noSignUpCheck%3D1" },
        { title: "E-Dados", url: "https://lbrportalfolha.valenet.valeglobal.net/portalrh/Produtos/SAAA/Principal2.aspx?amb_selecionado=0&abrir_nova_janela=N&eh_mdesigner=N&nome_portal=616653596455764672655738516965596E57664E38413D3D" },
        { title: "Oportunidades Internas", url: "https://vale.eightfold.ai/careers?pid=39794224&domain=vale.com&sort_by=relevance" },
        { title: "Kaizen", url: "https://efvmworkplace/central%20de%20kaizen/login.html" },
        { title: "Manutenção EFVM", url: "http://efvmonline/cco/manut_mes/" },
        { title: "Redefinição de Senha", url: "https://spx.valeglobal.net/" },
        { title: "Fale com o Gerente", url: "https://vale-forms.valeglobal.net/public?id=jrWjwyWM%2F62TMGK2s3KvEA%3D%3D&lang=pt-BR&need_auth=false" },
         { title: "Bate Papo com o Gerente", url: "https://vale-forms.valeglobal.net/public?id=pzHQFNU5uR5GAGBSWO3I%2Fg%3D%3D&lang=pt-BR" },
        { title: "A Grande Jogada 2026 - Roda de Conversa", url: "https://vale-forms.valeglobal.net/public?id=P9QeoYmB9svosCBS9srXpA%3D%3D&lang=pt-BR&need_auth=false" },
        { title: "Teams", url: "https://teams.microsoft.com/v2/" },
        { title: "Inclusão de Links na Página", url: "https://forms.cloud.microsoft/r/GiHKkf8cAz" }
    ],
    registros: [
        { title: "Forms Tempo de Drenagem", url: "https://vale-forms.valeglobal.net/public?id=WSqN%2fvQcg26iUzmzvSi59Q%3d%3d&lang=pt-BR" },
        { title: "Registros de N3", url: "https://vale-forms.valeglobal.net/public?id=Re09HKtbLVS7ByxL27eKFA%3D%3D&lang=pt-BR" },
        { title: "Iris", url: "https://iris.valeglobal.net/login" },
        { title: "Troca de Escala", url: "https://forms.cloud.microsoft/pages/responsepage.aspx?id=G1eTeCxs70y02n1LJmoGJjxfhEFV92NPrOn1n7zEqAxUMTBOMlhZQkRFN0lQNjZMNjdaTzFTVVhORy4u&origin=QRCode&qrcodeorigin=presentation&route=shorturl" },
        { title: "Consumo de Água - Controle Hídrico", url: "https://vale-forms.valeglobal.net/public?id=GR4AlFhgc9bw%2BkQk5z73Dg%3D%3D&lang=pt-BR&need_auth=false" },
        { title: "Pátio Limpo", url: "https://apps.powerapps.com/mobile/redirect?canvasapp=1&appid=537366e4-299f-4094-8523-0d7fbd85b10d&environmentid=default-7893571b-6c2c-4cef-b4da-7d4b266a0626&tenantid=7893571b-6c2c-4cef-b4da-7d4b266a0626&sourceurl=https%3A%2F%2Fapps.powerapps.com%2Fplay%2Fe%2Fdefault-7893571b-6c2c-4cef-b4da-7d4b266a0626%2Fa%2F537366e4-299f-4094-8523-0d7fbd85b10d%3FtenantId%3D7893571b-6c2c-4cef-b4da-7d4b266a0626%26hint%3D19a1cc70-5457-4089-8076-dd20caf19744%26sourcetime%3D1761219099521%26source%3Dportal%26hidenavbar%3Dtrue" }
    ],
    treinamentos: [
        { title: "AMV Alstom 80", url: "https://gestaodoconhecimento.blob.core.windows.net/cct/pilulasdoconhecimento/MFER-PDC-11-AlstonP80.mp4.mp4?sp=r&st=2025-05-30T01:24:34Z&se=2045-05-30T09:24:34Z&sv=2024-11-04&sr=b&sig=5gWv4byHlEZkFfGD7AIoEWUr%2FXjRXmi8dY%2BPCpoIq6Y%3D" },
        { title: "AMV GEC", url: "https://gestaodoconhecimento.blob.core.windows.net/cct/pilulasdoconhecimento/MFER-PDC-12-GEC.mp4.mp4?sp=r&st=2025-05-30T01:24:59Z&se=2045-05-30T09:24:59Z&sv=2024-11-04&sr=b&sig=9zlnvVnrruQD2yStN%2FDmbSqw1jO3qlHvr0DDjm0aduc%3D" },
        { title: "AMV Kiosan Trecho", url: "https://gestaodoconhecimento.blob.core.windows.net/cct/pilulasdoconhecimento/MFER-PDC-13-KiosanDe%20Trecho.mp4.mp4?sp=r&st=2025-05-30T01:25:16Z&se=2045-05-30T09:25:16Z&sv=2024-11-04&sr=b&sig=mi3Spmn0WxFjDLD202AQUbB%2FGmO4RNQeKnZ97YdNcuA%3D" },
        { title: "AMV Kiosan Pátio", url: "https://gestaodoconhecimento.blob.core.windows.net/cct/pilulasdoconhecimento/MFER-PDC-14-KiosanDePatio.mp4.mp4?sp=r&st=2025-05-30T01:25:39Z&se=2045-05-30T09:25:39Z&sv=2024-11-04&sr=b&sig=AN828rdaKxj%2FDYebEC5OWgb3c7UxdRmp5Y%2B%2FberQIms%3D" },
        { title: "VES", url: "https://valep.lms.hr.cloud.sap/learning/user/personal/landOnPortalHome.do?fromSF=Y&fromDeepLink=true&pageID=" }
    ]
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
