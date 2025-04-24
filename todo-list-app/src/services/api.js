import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getTasks(userId) {
        console.log(apiClient.get(`/tasks?userId=${userId}`));
        return apiClient.get(`/tasks?userId=${userId}`);
    },

    createTask(task) {
        return apiClient.post('/tasks', task);
    },

    deleteTask(id) {
        return apiClient.delete(`/tasks/${id}`);
    },

    updateTask(task) {
        return apiClient.patch(`/tasks/${task.id}`, task);
    },

    // Новые api для учеток
    register(username, password) {
        return apiClient.post('/users', { username, password });
    },

    login(username, password) {
        console.log(apiClient.get(`/users?username=${username}&password=${password}`));
        return apiClient.get(`/users?username=${username}&password=${password}`);
    }
};