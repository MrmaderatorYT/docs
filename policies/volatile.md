# Політика конфіденційності — Volatile

Додаток **Volatile** (ідентифікатор пакета: `com.ccs.volatileapp`).  
Останнє оновлення: 20 листопада 2026.

Цей документ описує принципи обробки даних у додатку **Volatile** для Android.

## 1. Хто відповідає за обробку

Володільцем додатка є CyberCraft Studio. Контакти: [cybercraftstudiopro@gmail.com](mailto:cybercraftstudiopro@gmail.com).

## 2. Збір та передача даних

- Усі перехоплені проксі-сервісом запити, історія SQLite та результати сканування зберігаються **виключно локально** на пристрої користувача.
- CyberCraft Studio **не має доступу** до вашого трафіку, не збирає телеметрію та не використовує сторонні аналітичні трекери.

## 3. Дозволи мережі та фонового сервісу

Дозволи `INTERNET`, `ACCESS_NETWORK_STATE` та `FOREGROUND_SERVICE` використовуються виключно для функціонування локального проксі, надсилання запитів у Repeater та виконання авторизованих перевірок безпеки користувачем.

## 4. Відкритий вихідний код

Додаток поширюється під ліцензією GNU General Public License v3.0 (GPL-3.0).

## 5. Контакти

- Email: [cybercraftstudiopro@gmail.com](mailto:cybercraftstudiopro@gmail.com)
- GitHub: [CyberCraft Studio](https://github.com/MrmaderatorYT)
