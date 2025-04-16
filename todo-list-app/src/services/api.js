import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.VUE_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export default {
    getTasks() {
        console.log(apiClient.get('/tasks'));
        return apiClient.get('/tasks');
    },

    createTask(task) {
        return apiClient.post('/tasks', task);
    },

    deleteTask(id) {
        return apiClient.delete(`/tasks/${id}`);
    }
};