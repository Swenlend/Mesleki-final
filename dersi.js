    

document.addEventListener('DOMContentLoaded', function() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const listingCards = document.getElementById('listing-cards').children;

    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        const terms = document.getElementById('terms').checked;
        
        // Ad Soyad doğrulama
        if (fullname.trim().length < 3) {
            alert('Ad Soyad en az 3 karakter olmalıdır.');
            return;
        }
        
        // E-posta doğrulama
        if (!validateEmail(email)) {
            alert('Geçerli bir e-posta adresi giriniz.');
            return;
        }
        
        // Telefon doğrulama
        if (!validatePhone(phone)) {
            alert('Geçerli bir telefon numarası giriniz (05XX XXX XX XX).');
            return;
        }
        
        // Şifre doğrulama
        if (password.length < 6) {
            alert('Şifre en az 6 karakter olmalıdır.');
            return;
        }
        
        // Şifre eşleşme kontrolü
        if (password !== confirmPassword) {
            alert('Şifreler eşleşmiyor.');
            return;
        }
        
        // Kullanım şartları kontrolü
        if (!terms) {
            alert('Kullanım şartlarını kabul etmelisiniz.');
            return;
        }
        
        // Başarılı kayıt simülasyonu
        alert('Kayıt başarılı! Giriş sayfasına yönlendiriliyorsunuz.');
        window.location.href = '#login';
    });
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Basit doğrulama
        if (!validateEmail(email)) {
            alert('Geçerli bir e-posta adresi giriniz.');
            return;
        }
        
        if (password.length < 6) {
            alert('Şifre en az 6 karakter olmalıdır.');
            return;
        }
        
        // Başarılı giriş simülasyonu
        alert('Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.');
        window.location.href = '#home';
    });

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.toLowerCase();
        for (let card of listingCards) {
            const title = card.getAttribute('data-title').toLowerCase();
            const category = card.getAttribute('data-category').toLowerCase();
            const price = card.getAttribute('data-price').toLowerCase();
            if (title.includes(query) || category.includes(query) || price.includes(query)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
    
    // E-posta doğrulama fonksiyonu
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    
    // Telefon doğrulama fonksiyonu
    function validatePhone(phone) {
        const re = /^(05)[0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]$/;
        return re.test(String(phone).replace(/\s/g, ''));
    }
});