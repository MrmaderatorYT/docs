# Політика конфіденційності — aJVvisualiser

Десктопний додаток **aJVvisualiser** (macOS ARM64).  
Останнє оновлення: 20 листопада 2026.

Цей документ описує принципи приватності для монітора JVM **aJVvisualiser**.

## 1. Хто відповідає за обробку

Володільцем проєкту є CyberCraft Studio. Контакти: [cybercraftstudiopro@gmail.com](mailto:cybercraftstudiopro@gmail.com).

## 2. Локальний моніторинг JVM

- Додаток інспектує виключно локальні процеси JVM поточного користувача macOS через системні файли `hsperfdata` та локальний Attach API.
- Жодні дампи потоків, `.hprof` файли, метрики пам'яті чи системні властивості **не передаються** в інтернет.
- У додатку відсутні телеметрія, аналітика чи мережеві трекери.

## 3. Відкритий вихідний код

aJVvisualiser поширюється під ліцензією GNU General Public License v3.0 (GPL-3.0).

## 4. Контакти

- Email: [cybercraftstudiopro@gmail.com](mailto:cybercraftstudiopro@gmail.com)
- GitHub: [CyberCraft Studio](https://github.com/MrmaderatorYT)
