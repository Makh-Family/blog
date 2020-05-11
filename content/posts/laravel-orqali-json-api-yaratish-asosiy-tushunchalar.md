---
title: "Laravel orqali JSON API yaratish: Asosiy tushunchalar"
description: Bugun ko'pchilik yangi dasturlashga kirib kelayotgan uchun
  balki   qiziq bo'lishi mumkin bo'lgan yana bir API turlaridan biri JSON API
  lar bilan   tanishib chiqishga harakat qilamiz.
cover_image: /uploads/alexandr-podvalny-220262-unsplash.jpg
date: 2020-05-11T12:29:20.294Z
tags:
  - Markdown
---
Bugungi kunda dasturchilar orasida ancha mashhur bo'lib ulgurgan JSON API tushunchasi mavjud. Oldingi maqolalarimda **[php](https://www.texnoman.uz/post/php-yordamida-sodda-restful-api-yaratish.html)** va **[Lumen Framework](https://www.texnoman.uz/post/lumen-micro-framework-da-restful-api-dan-foydalanish.html)** orqali RESTful API dan foydalanishni ko'rib chiqgan edik. Bugun ko'pchilik yangi dasturlashga kirib kelayotgan uchun balki qiziq bo'lishi mumkin bo'lgan yana bir API turlaridan biri JSON API lar bilan tanishib chiqishga harakat qilamiz. Bu maqolalarda men Laravel Framework orqali JSON API yaratishga harakat qilib ko'raman. Bugungi kunda server side / Back end dasturchilarning ko'pchiligi web ilovalar yaratayotgan vaqtlarida asosan JSON API lar bilan juda ko'p ishlashadi va ular bilan o'zaro integratsiyalarni hosil qilishadi. Ushbu qisqa seriyada biz Laravel-dan foydalanib, o'zimizning asosiy JSON API-ni yaratmoqchimiz. Seria qancha davom etishini aniq bilmayman, ammo quyidagi fikrlarni keltirmoqchiman;

* Nega JSON?
* CRUD / BREAD tushunchalari nimani anglatadi?
* Laravel Modeller & Eloquent yordamida ma'lumotlarni yaratish
* Modellarni Internetda namoyish qilish
* Model (lar) ni yaratish, yangilash va o'chirish bo'yicha kirish so'rovlarini tekshirish
* API sinovi
* Va b...

Dastlab quyida biz yuqorida keltirgan ikkita fikrlarni izohlab o'taylik.

**PHP**:

```
class OAuth
{
    /**
     * An instance of the League OAuth Client Provider.
     *
     * @var AbstractProvider
     */
    protected $provider;

    /**
     * OAuth constructor.
     *
     * @param array $options Associative array containing
     *                       `provider`, `userName`, `clientSecret`, `clientId` and `refreshToken` elements
     */
    public function __construct($options)
    {
        $this->provider = $options['provider'];
        $this->oauthUserEmail = $options['userName'];
        $this->oauthClientSecret = $options['clientSecret'];
        $this->oauthClientId = $options['clientId'];
        $this->oauthRefreshToken = $options['refreshToken'];
    }
}
```

**JS**:

```
window.addEventListener( "pageshow", function ( event ) {
  var historyTraversal = event.persisted || 
                         ( typeof window.performance != "undefined" && 
                              window.performance.navigation.type === 2 );
  if ( historyTraversal ) {
    // Handle page restore.
    window.location.reload();
  }
});
```