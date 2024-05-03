# Neredekal.com Demo

## FRONTEND CASE

- NextJs ve Typescript kullanılarak listeleme ve detaydan oluşan bir uygulama
  geliştirilmelidir.
- Geliştireceğiniz uygulamadaki dataları herhangi bir fake json service kullanarak
  geliştirme yapabilirsiniz.

Örneğin:
Pokemon Api
Marvel Api
Uygulama bir listeleme ve bir detay sayfasından oluşmalıdır.
Uygulama içerisinde kullanılacak sabit değerler environment bazlı tutulup ve environmente göre
değişiklik gösterebilir olmalıdır.

- Route yapısı isteğe bağlı belirleyeceğiniz bir patternde olabilir.
  Örneğin:
  /pokemon-list
  /pikhacu-detail

- UI için isteğe bağlı seçmiş olduğunuz bir Framework kullanabilirsiniz. (EmotionUI,
  Bootstrap, Styled-Component)

- API Call için Axios kullanılmalıdır.
- Global State Management için Redux veya ContextAPI kullanabilirsiniz.
- Listeleme sayfası maksimum 10 adet (bu değer environment bazlı değişebilir)
  listelemelidir ve pagination olmalıdır.
- Detay sayfasının tasarımını ve yerleşimini isteğe bağlı geliştirebilirsiniz.

Çalışmanın Tamamlanması:
Çalışma tamamlandığında bu codebase'i kişisel git repository'sine aktarmanız, çalışma bitiminde
de bu repository adresiyle paylaşmanız beklenecektir.

## Sayfalar & Tasarım

Uygulama aşağıdaki sayfalardan oluşmaktadır ve [bu tasarım](https://dribbble.com/shots/21488745-Pok-dex-Web-Version-Redesign) baz alınarak yapılmıştır.

- Ana Sayfa (Listeleme Sayfası)
- Detay Sayfası
- Bulunamadı Sayfası

Demo isterleri doğrultusunda ve zaman kısıtını da hesaba katınca daha fazla sayfa yazılmamış ve eldeki sayfalar zenginleştirilmiştir. Kullanılan API'ın sayfada sergilenen bilgilerle tam olarak örtüşmemesinden dolayı arzulanandan fazla istek atılmaktadır. Uygun API servisleri ile servis edilen veriler sayfalara uygun hale getirilirse performansta artış görülecektir.

## Lighthouse & Performans Test Sonuçları

Lighthouse skorları aşağıda gösterilmiştir. Uygun olanı domain altından yayınlandıktan sonra bakılması olsa da fikir yürütmek için test yapmayı uygun gördüm. Performanstaki düşüklüğün sebebi, transfer edilmek ve sunulmak için optimize edilmemiş resimler ve kod dosyalarından kaynaklanmaktadır. Uygulamayı derlerken kod dosyaları küçültülebilir ve resimler servis edilirken webp formatında servis edilebilir. Ancak demo kapsamında ek bir servis uygulaması kullanılmadığından bu iyileştirmeler yapılamamıştır.

Kalan değerler ise 100 veya 100'e yakın çıkmıştır. Zaman kısıtı ve projenin yayınlanmadığı göz önünde bulundurulursa değerler teorik olarak istenen seviyeleri yakalamıştır. Uygulama yayınlandıktan sonra tekrardan bir analiz aracı kullanılarak eksikler giderilmelidir. Bu eksiklerin bir kısmı için aşağıdaki liste kullanılabilir.

[Frontend Checklist](https://github.com/thedaviddias/Front-End-Checklist)

Görseller

[Ana Sayfa (Listeleme Sayfası)](./homepage.png)
[Detay Sayfası](./detailpage.png)

## Dikkat edilenler

Aşağıdaki liste, projenin başında eklenmesi planlanmış özellikleri göstermektedir. Zaman kısıtından dolayı bir kısmı eksik kalsa da projenin ne kadar kapsamlı ele alındığına dair fikir vermektedir.

- [ ] Sayfanın telefonda yanlışlıkla büyütülebilir olmasını meta tag ile önle
- [x] Bilinir Fontlar kullan, cihaz uyumlu olsun
  - [ ] Fallback Font kullan
- [x] Mobil uyumlu web arayüzü oluştur
- [ ] Build için performans iyileştirmeleri yap
  - [ ] Minify JS
  - [ ] Uglify JS
  - [ ] Sourcemap Kaldır
- [ ] Resimler için webp dönüştürücü kur ve cache'le
- [x] Arama Fonksiyonu kullan
- [ ] Preload, prefetch sources
- [x] Sayfaları inşaa ederken etiket kullanımlarına dikkat et, uyumlu kullan
- [x] Hata kontrolü yap
- [ ] Bağlantı hatası için hata ekranı oluştur
- [x] Bulunamayan sayfa için sayfa düzenle
- [ ] Klavye navigasyonu dizayn et
- [ ] Google Analytics için etiket oluştur
- [ ] Sitemap.xml oluştur
- [ ] robots.txt oluştur
- [ ] Dil tercihi için mekanizma oluştur
- [ ] OG Tag kullan
- [x] Pagination
- [ ] Loading Ekranı (Skeleton)
- [x] Logo ekle
- [ ] Detay sayfasında pokemonun renklerine göre renk paleti kullan

## Faydalı Linkler

- [Pokemon Color Palette](https://pokemonpalette.com/)
- [Pokemon Page Design](https://dribbble.com/shots/21488745-Pok-dex-Web-Version-Redesign)
- [Frontend Checklist](https://github.com/thedaviddias/Front-End-Checklist)
