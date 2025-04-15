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
