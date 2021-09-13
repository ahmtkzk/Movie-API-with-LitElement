# Movie API with Lit-Element

## Proje Bilgileri
- Bu proje, `Java` Spring Boot ile yazılmış olan Filmler API'sini `Javascript` Lit-Element ile çekip işlemek için
  yazılmıştır.
- Veritabanı bilgileri ve verileri proje içerisindeki `veritabanı.txt` içerisinde bulunmaktadır.
- The Movie DataBase (tmdb) web sitesinde bulunan API, `PHP` ile 5000 adet filme kadar çekilip veritabanına yazılmıştır.
  <br> PHP botu proje dizininde mevcuttur. Veritabanına işlenen veriler, Java ile çekilip ön yüze aktarılmıştır.
- İki farklı portta çalışan localhost sunucularında işlemler gerçekleşmektedir. Javascript portu `localhost:8000`, Java
  portu `localhost:8080`'dir.
- Proje anasayfası `localhost:8000/dev/index.html` URL'sidir. 
- **CORS (Cross-Origin Resource Sharing)** hatalarını engellemek için Java projesi içerisinde `@CrossOrigin` anotasyonu kullanılmıştır.
  <br> Post işlemi esnasında CORS hata verdiğinden dolayı Google Chrome tarayıcısına "Cors Unblock" isimli eklenti kurulmuştur.

## Proje Özellikleri
- Proje, Lit-Element ile arka yüzden ayrılarak Fetch işlemleri yapabilmek için yapılmıştır.
- Veritabanına veri ekleme ve silme işlemleri Java kısmında yazılmıştır.
- Ön kısımda Lit-Element ile `POST` işlemi yapılarak veri eklenebilir, `GET` işlemi ile veri silinebilir.
- Silme işlemleri için herhangi bir veriye tıklamak yeterlidir.
- Ekleme işlemi için form elementlerini doldurmak yeterlidir.