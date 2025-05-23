Необходимо написать форму, с CRUD(create, read, update, delete) задач.

Требования:

 - Добавление задач через input поле, по клавише “enter” / по кнопке “add”.
 - Снизу под полем выводится список добавленных задач.
 - Задача должна иметь возможность быть отмеченной как выполнена (checkbox).
 - Любую задачу можно удалить по кнопке справа.
 - По клику на задачу, должна появиться возможность редактирования.
 - При любом действии, страница не должна перезагружаться.
 - Работа с api  - [json-server](https://github.com/typicode/json-server) - [Статья](https://code.tutsplus.com/ru/tutorials/fake-rest-api-up-and-running-using-json-server--cms-27871).
     - Создать необходимые mock-объекты (объекты api).
     - Создать .env файл, вынести в него адрес api.
     - Написать логику получения, создания и обновления тасков с использованием api.
     - Подключить axios в проект.
 - Настроить eslint, добавить [eslint airbnb](https://www.npmjs.com/package/@vue/eslint-config-airbnb) в проект, в проекте не должно быть ошибок eslint
 - Разбить приложение на однофайловые компоненты. Структура примерно следующая:
     - app
     - list
     - item (task)
     - layout/container

Стек технологий:
 - [vue2 (composition api)](https://vuejs.org/) + [element iu](https://element.eleme.io)
element iu необходим для использования готовых компонентов, не требующих верстки с нуля.

<hr>

Инициализация проекта
```
vue create todo-list-app
cd todo-app
```

[json-server](https://code.tutsplus.com/ru/fake-rest-api-up-and-running-using-json-server--cms-27871t)

Чтобы начать работу с `json-server` потребуется его установить через Менеджер пакетов Node (npm).
```
npm install -g json-server
```

Запускаем сервер через командную строку, указывая созданный в корне файл `info.json` в качестве источника данных REST API, доступных по адресу `http://localhost:3000`.
```
json-server info.json
```

### Тестирование точек входа REST API
GET/ 

![image](https://github.com/user-attachments/assets/af5d5267-19e6-4098-9be1-76e7e0f61385)

POST/

![image](https://github.com/user-attachments/assets/e0a1fd79-4983-4ad9-854f-c059e4474d70)
![image](https://github.com/user-attachments/assets/8a35f56f-42b6-4370-b226-cb9a7a6f3730)

DELETE/

![image](https://github.com/user-attachments/assets/b48a20fd-417b-4435-ae13-695089536f24)

PATCH/

![image](https://github.com/user-attachments/assets/488110b7-f24d-4692-8e25-c6cb551e74ec)
![image](https://github.com/user-attachments/assets/8f76e259-21b1-42ce-90d7-546e00813148)

Зависимости
```
"dependencies": {
    "@vue/composition-api": "^1.7.2",
    "axios": "^1.8.4",
    "core-js": "^3.8.3",
    "element-ui": "^2.15.14",
    "vue": "^2.6.14",
    "vue-template-compiler": "^2.6.14"
  },
  "devDependencies": {
    "@babel/core": "^7.12.16",
    "@babel/eslint-parser": "^7.12.16",
    "@eslint/js": "^9.24.0",
    "@vue/cli-plugin-babel": "~5.0.0",
    "@vue/cli-plugin-eslint": "~5.0.0",
    "@vue/cli-service": "~5.0.0",
    "@vue/eslint-config-airbnb": "^8.0.0",
    "eslint": "^7.32.0",
    "eslint-config-airbnb-base": "^15.0.0",
    "eslint-plugin-import": "^2.31.0",
    "eslint-plugin-vue": "^6.2.2",
    "globals": "^16.0.0",
    "json-server": "^1.0.0-beta.3"
  },
```

Таблица установленных зависимсотей и зачем они:
|Библиотка                |Назначение             |
|-------------------------|-----------------------|
|vue, @vue/composition-api|Фреймы                 |
|axios                    |HTTP-запросы           |
|element-ui               |UI                     |
|@vue/cli-service         |Разработка и сборка    |
|json-server              |mock-API               |
|ESlist                   |правил стиля JavaScript|
|airbnb                   |Чтобы ESLint понимал шаблоны .vue|


Неавторизованное и авторизованное состояние
![image](https://github.com/user-attachments/assets/226f5a5a-25fd-458e-83ba-690193dd697f)
![image](https://github.com/user-attachments/assets/0e741b05-06fa-4889-b287-472066f2e710)



