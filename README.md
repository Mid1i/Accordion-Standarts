# Стандарты аккордеона

Демонстрационный проект с реализацией аккордеона, по двум стандартам ARIA:

- [Accordion Example](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)
- [Disclosure Example](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-faq/)

>За основу взят аккордеон с сайта [Хакатон](https://gorkycode.ru/).

## Стек технологий:

- **Vue.js**
- **TypeScript**
- **SCSS**
- **Vite**


## Структура:

Оба варианта используют атрибуты **aria-expanded** и **aria-controls** для того, чтобы сделать сайт более доступным согласно стандартам WCAG. 

- **aria-expanded** показывает открыта данная вкладка аккордеона или нет.

- **aria-controls** показывает id вкладки, которой управляет.

Также оба варианта имеют управление с клавиатуры:

- **Tab/Shift+Tab** - перемещение по вкладкам.

- **Enter/Space** - Активация вкладки.


#### [Accordion Example](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)

- Используется семантический тег **h3** для заголовков аккордеона.

- Используется роль **region** для создания области ориентира развёрнутой вкладки.

- Используется атрибут **aria-labelledby**, показывающая какой кнопкой управляется данная вкладка.


#### [Disclosure Example](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/examples/accordion/)

- Используются теги **dl**, **dt** и **dd**:

	- **dl** - список вкладок.

	- **dt** - вопрос данной вкладки.

	- **dd** - ответ на данный вопрос.