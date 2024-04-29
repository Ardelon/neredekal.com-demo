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

## Teknik Detaylar

- [ ] Pokémon's color palette consists of colors blue and yellow. The hexadecimal code for these two colors is #0075BE and #FFCC00, respectively

### Sayfalar

- Ana Sayfa
- Listeleme Sayfası
- Detay Sayfası

### Uygulama Özellikleri

### Accessability

### SEO

### Performans Test Sonuçları

#### Lighthouse

## Dikkat edilenler

- [ ] Sayfanın telefonda yanlışlıkla büyütülebilir olmasını meta tag ile önle
- [ ] Bilinir Fontlar kullan, cihaz uyumlu olsun
  - [ ] Fallback Font kullan
- [ ] Mobil uyumlu web arayüzü oluştur
- [ ] Build için performans iyileştirmeleri yap
  - [ ] Minify JS
  - [ ] Uglify JS
  - [ ] Sourcemap Kaldır
- [ ] Resimler için webp dönüştürücü kur ve cache'le
- [ ] Arama Fonksiyonu kullan
- [ ] Preload, prefetch sources
- [ ] Sayfaları inşaa ederken etiket kullanımlarına dikkat et, uyumlu kullan
- [ ] Hata kontrolü yap
- [ ] Bağlantı hatası için hata ekranı oluştur
- [ ] Bulunamayan sayfa için sayfa düzenle
- [ ] Klavye navigasyonu dizayn et
- [ ] Google Analytics için etiket oluştur
- [ ] Sitemap.xml oluştur
- [ ] robots.txt oluştur
- [ ] Dil tercihi için mekanizma oluştur
- [ ] OG Tag kullan
- [ ] Pagination
- [ ] Loading Ekranı (Skeleton)
- [ ] Logo yap
- [ ] Detay sayfasında pokemonun renklerine göre renk paleti kullan

### Faydalı Linkler

- [Pokemon Color Palette](https://pokemonpalette.com/)
