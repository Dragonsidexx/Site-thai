document.addEventListener('DOMContentLoaded', () => {
    const languageSelect = document.getElementById('language-select');
    const title = document.getElementById('title');
    const price = document.getElementById('price');
    const ctaText = document.getElementById('cta-text');
    const loginBtn = document.getElementById('login-btn');

    const texts = {
        pt: {
            title: 'Filmes, séries e muito mais, sem limites',
            price: 'A partir de R$ 20,90. Cancele quando quiser.',
            ctaText: 'Quer assistir? Clique aqui',
            loginBtn: 'Vamos lá'
        },
        en: {
            title: 'Movies, series, and more, with no limits',
            price: 'Starting at R$ 20.90. Cancel anytime.',
            ctaText: 'Want to watch? Click here',
            loginBtn: 'Let\'s go'
        }
    };

    languageSelect.addEventListener('change', (event) => {
        const selectedLang = event.target.value;
        const text = texts[selectedLang];

        title.textContent = text.title;
        price.textContent = text.price;
        ctaText.textContent = text.ctaText;
        loginBtn.textContent = text.loginBtn;
    });
});