# Remzzi - Seri İlanlar Web Uygulaması

**Remzzi**, seri ilanların yayınlanmasını ve aranmasını kolaylaştırmak için tasarlanmış bir web uygulamasıdır. İster alım, ister satım veya kiralama yapmak isteyin, Remzzi alıcıları ve satıcıları buluşturmak için kullanıcı dostu bir platform sunar.

## Özellikler

* **Kullanıcı Dostu Arayüz:** Kolay gezinme ve kullanım için temiz ve sezgisel bir tasarım.
* **Arama İşlevi:** Ürünler, kategoriler veya konumlar için anahtar kelimeler kullanarak ilanları hızla bulun.
* **Kullanıcı Kimlik Doğrulaması:** Kullanıcı hesaplarını yönetmek için güvenli kayıt ve giriş sistemi.
* **Kategorize Edilmiş İlanlar:** Araçlar, emlak ve elektronik gibi kategorilere ayrılmış ilanlara göz atın.
* **Duyarlı Tasarım:** Çeşitli cihazlarda (masaüstü, tablet ve cep telefonları) sorunsuz görüntüleme ve kullanım için optimize edilmiştir.
* **QR Kod Erişimi:** Oluşturulan bir QR kodu aracılığıyla ana sayfaya hızlı erişim.

## Kullanılan Teknolojiler

* **Frontend (Ön Yüz):**
    * HTML5
    * CSS3
    * JavaScript
* **Backend (İsteğe Bağlı - Eğer genişletirseniz):** (Daha sonra bir sunucu tarafı bileşeni eklemeyi planlıyorsanız, burada amaçlanan teknolojiyi belirtin, örneğin Node.js, Python/Django, vb.)
* **QR Kod Oluşturma:**
    * Python
    * `qrcode` kütüphanesi

## İçerilen Dosyalar

* `index.html`: Web sayfasını yapılandıran ana HTML dosyası.
* `dersi.css`: Görsel sunumu kontrol eden ana stil dosyası.
* `dersi.js`: İstemci tarafı etkileşim ve form işleme için JavaScript dosyası.
* `qrcodegenator.py`: QR kodu oluşturmak için Python betiği.
* `form.css`: Formlar için stiller
* `some_file.png`: Logo resmi
* `rmzi.jpg`: Logo resmi
* `150bin tl araç.jpg`: Örnek resim
* `kiralik ev 1.jpg`: Örnek resim
* `tfl.jpg`: Örnek resim
* `lptp.jpg`: Örnek resim
* `spor araba.jpg`: Örnek resim
* `villa.jpg`: Örnek resim
* `e bsklt.jpg`: Örnek resim
* `iş ilanı.jpg`: Örnek resim

## Kurulum

1.  **Depoyu klonlayın (kopyalayın):**
    ```bash
    git clone <depo_urlsi>
    ```
2.  **`index.html` dosyasını web tarayıcınızda açın:**
    Uygulamayı görüntülemek için dosyaya çift tıklamanız yeterlidir. (QR kodunun sağlanan Python betiğiyle doğru çalışması için HTML'yi yerel bir sunucudan sunmanız gerekir. Python'un yerleşik basit HTTP sunucusunu kullanabilirsiniz: `python -m http.server` ve ardından `http://localhost:8000` adresinden erişebilirsiniz)
3.  **(İsteğe Bağlı) QR kodunu oluşturun:**
    * Python'un kurulu olduğundan emin olun.
    * `qrcode` kütüphanesini yükleyin:
        ```bash
        pip install qrcode
        ```
    * Betiyi çalıştırın:
        ```bash
        python qrcodegenator.py
        ```
    * QR kodu `some_file.png` olarak kaydedilecektir.

## Gelecekteki Geliştirmeler

* **Backend Entegrasyonu:** Verileri kalıcı olarak depolamak ve yönetmek için bir sunucu tarafı backend uygulayın (örneğin, kullanıcı hesapları, ilanlar).
* **Veritabanı:** Kullanıcı bilgilerini, ilanları ve diğer verileri depolamak için bir veritabanı entegre edin.
* **Gelişmiş Arama:** Arama işlevi için daha fazla filtreleme seçeneği ekleyin (örneğin, fiyat aralığı, konum).
* **Resim Yüklemeleri:** Kullanıcıların ilanları için resim yüklemesine izin verin.
* **Kullanıcı Profilleri:** Kullanıcıların profillerini oluşturmasına ve yönetmesine olanak tanıyın.
* **Mesajlaşma Sistemi:** Alıcılar ve satıcılar arasında iletişim için bir mesajlaşma sistemi uygulayın.

## Katkıda Bulunma


1.  Depoyu çatallayın (fork).
2.  Özelliğiniz veya hata düzeltmeniz için yeni bir dal oluşturun.
3.  Değişikliklerinizi yapın.
4.  Çekme isteği (pull request) gönderin.

## Lisans


## İletişim

Yunusemre Perdi
yunusemreperdi05@gmail.com
