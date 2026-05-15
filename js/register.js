import { initRegisterCarousel } from './modules/register-carousel.js';

// 1. Inicia o carrossel
initRegisterCarousel();

// 2. Toggle de Senha
const passwordInput = document.getElementById('password');
const toggleBtn = document.getElementById('togglePassword');

if (toggleBtn && passwordInput) {
    const toggleIcon = toggleBtn.querySelector('i');
    
    toggleBtn.addEventListener('click', () => {
        const isPassword = passwordInput.getAttribute('type') === 'password';
        passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
        
        if (toggleIcon) {
            toggleIcon.classList.toggle('fa-eye', !isPassword);
            toggleIcon.classList.toggle('fa-eye-slash', isPassword);
        }
    });
}

// 3. Validação de Força da Senha
const bars = [
    document.getElementById('bar-1'),
    document.getElementById('bar-2'),
    document.getElementById('bar-3'),
    document.getElementById('bar-4')
];
const strengthText = document.getElementById('strengthText');

if (passwordInput && strengthText) {
    passwordInput.addEventListener('input', (e) => {
        const val = e.target.value;
        let strength = 0;

        if (val.length >= 8) strength += 1;
        if (val.match(/[A-Z]/) && val.match(/[a-z]/)) strength += 1;
        if (val.match(/[0-9]/)) strength += 1;
        if (val.match(/[^a-zA-Z0-9]/)) strength += 1;

        bars.forEach(bar => {
            if (bar) bar.style.backgroundColor = 'var(--light-gray)';
        });

        if (val.length === 0) {
            strengthText.textContent = 'Use pelo menos 8 caracteres';
            strengthText.style.color = 'var(--muted-text)';
            return;
        }

        const colors = [
            '#e63946', // Fraca
            '#E8B428', // Razoável
            '#a3b18a', // Boa
            '#2a9d8f'  // Forte
        ];
        
        const texts = ['Senha muito fraca', 'Pode melhorar', 'Senha boa', 'Senha forte!'];
        const displayIndex = Math.max(0, strength - 1); 
        
        for (let i = 0; i < strength; i++) {
            if(bars[i]) bars[i].style.backgroundColor = colors[displayIndex];
        }

        strengthText.textContent = texts[displayIndex];
        strengthText.style.color = colors[displayIndex];
    });
}