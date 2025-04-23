// файл для управления состоянием авторизации
// название атрибута в LS
const AUTH_KEY = 'user';

export default {
    // сохрание в LS
    saveUser(user) {
        localStorage.setItem(AUTH_KEY, JSON.stringify({
            id: user.id,
            username: user.username,
        }));
    },

    // получить из LS
    getUser(){
        const userJSON = localStorage.getItem(AUTH_KEY);
        return userJSON ? JSON.parse(userJSON) : null;
    },

    // очистка LS
    removeUser() {
        localStorage.removeItem(AUTH_KEY);
    },

    // проверка наличия
    isAuthenticated() {
        return !!this.getUser(); // быстро превратить в булево
    }
}