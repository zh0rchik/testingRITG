import axios from 'axios'

const apiClient =  axios.create({
    baseURL: 'http://localhost:3000',   // засунуть потом в .env
    headers: {
        'Content-Type': 'application/json',
    }
});

// Если модуль определяет экспорт по умолчанию
export default apiClient;