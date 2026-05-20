const STATES = {
    success: {
        label:    'Conta criada',
        headline: 'Bem-vindo à sua próxima aventura.',
        body:     'Sua conta foi criada com sucesso. Comece agora a planejar roteiros, descobrir destinos e organizar cada detalhe da sua viagem.',
        icon:     'check',
        bg:       'assets/img/carousel/capri-italia.webp',
        primaryBtn: {
            text: '<i class="fa-solid fa-compass"></i> Começar a explorar',
            href: 'index.html',
        },
        secondaryBtn: {
            text: '<i class="fa-solid fa-user"></i> Ver meu perfil',
            href: '#',
        },
        sub: 'Dúvidas? <a href="#">Fale com o suporte</a>',
    },

    confirm: {
        label:    'Verifique seu e-mail',
        headline: 'Um passo a mais para decolar.',
        body:     'Enviamos um link de confirmação para o seu e-mail. Verifique sua caixa de entrada (e o spam, por precaução) para ativar sua conta.',
        icon:     'mail',
        bg:       'assets/img/carousel/muralha-china.webp',
        primaryBtn: {
            text: '<i class="fa-solid fa-envelope-open-text"></i> Abrir meu e-mail',
            href: 'mailto:',
        },
        secondaryBtn: {
            text: '<i class="fa-solid fa-rotate-right"></i> Reenviar link',
            href: '#',
        },
        sub: 'Não recebeu? Aguarde alguns minutos ou <a href="#">reenvie o e-mail</a>.',
    },

    error: {
        label:    'Algo deu errado',
        headline: 'Não conseguimos completar sua solicitação.',
        body:     'Encontramos um erro inesperado. Verifique sua conexão e tente novamente. Se o problema persistir, entre em contato com o suporte.',
        icon:     'error',
        bg:       'assets/img/carousel/restaurante-interior.webp',
        primaryBtn: {
            text: '<i class="fa-solid fa-rotate-right"></i> Tentar novamente',
            href: 'register.html',
        },
        secondaryBtn: {
            text: '<i class="fa-solid fa-headset"></i> Falar com suporte',
            href: '#',
        },
        sub: 'Código do erro: <a href="#">ERR_500</a> · <a href="#">Ver status do sistema</a>',
    },

    schedule: {
        label:    'Reserva confirmada',
        headline: 'Sua experiência está garantida.',
        body:     'O agendamento foi realizado com sucesso. Em breve você receberá todos os detalhes por e-mail. Prepare as malas!',
        icon:     'calendar',
        bg:       'assets/img/carousel/capri-italia.webp',
        primaryBtn: {
            text: '<i class="fa-solid fa-calendar-check"></i> Ver minha reserva',
            href: '#',
        },
        secondaryBtn: {
            text: '<i class="fa-solid fa-arrow-left"></i> Voltar ao início',
            href: 'index.html',
        },
        sub: 'Precisa alterar? <a href="#">Gerenciar reservas</a>',
    },
};

const ICON_PATHS = {
    check:    'M20 32 L29 41 L44 24',
    error:    'M23 23 L41 41 M41 23 L23 41',
    mail:     'M18 24 L32 35 L46 24 M18 24 L18 40 L46 40 L46 24 L32 35',
    calendar: 'M24 20 L24 26 M40 20 L40 26 M20 30 L44 30 M20 22 L44 22 L44 44 L20 44 Z',
};

function getStateFromURL() {
    const params = new URLSearchParams(window.location.search);
    const type   = params.get('type');
    return STATES[type] ? type : 'success';
}

function render(stateKey) {
    const state  = STATES[stateKey];
    const layout = document.getElementById('confirmationLayout');

    layout.dataset.state = stateKey;

    const bgImg = document.getElementById('confirmationBgImg');
    if (bgImg && state.bg) bgImg.src = state.bg;

    document.getElementById('confirmationLabel').textContent = state.label;

    document.getElementById('confirmationHeadline').textContent = state.headline;

    document.getElementById('confirmationBody').textContent = state.body;

    const iconPath = document.getElementById('iconPath');
    if (iconPath) iconPath.setAttribute('d', ICON_PATHS[state.icon]);

    document.getElementById('confirmationSub').innerHTML = state.sub;


    const actionsEl = document.getElementById('confirmationActions');
    actionsEl.innerHTML = `
        <a href="${state.primaryBtn.href}" class="btn-confirmation-primary">
            ${state.primaryBtn.text}
        </a>
        <a href="${state.secondaryBtn.href}" class="btn-confirmation-secondary">
            ${state.secondaryBtn.text}
        </a>
    `;

    document.title = `${state.label} - Travel Explorer`;
}

document.addEventListener('DOMContentLoaded', () => {
    render(getStateFromURL());
});