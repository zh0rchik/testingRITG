import apiClient from './index'

export default {
    // запрос GET для получения всех задач
    getTasks(){
        return apiClient.get('/tasks');
    },

    // запрос POST для создания задачи
    createTask(task){
        return apiClient.post('/tasks', task);
    },

    // PATCH запрос для обновления задачи
    updateTask(id, task) {
        return apiClient.patch('/tasks/${id}', task);
    },

    // запрос DELETE для удаления задачи
    deleteTask(id) {
        return apiClient.delete('/tasks/${id}');
    }
};