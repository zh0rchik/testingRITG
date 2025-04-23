<template>
  <div>
    <h2>Вход</h2>
    <el-form :model="loginForm" ref="loginForm" :rules="rules">
      <el-form-item prop="username">
        <el-input
            v-model="loginForm.username"
            placeholder="Логин"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
            v-model="loginForm.password"
            type="password"
            placeholder="Пароль"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm">
          Войти
        </el-button>
      </el-form-item>
    </el-form>

    <el-alert
        v-if="error"
        :title="error"
        type="error"
        show-icon
    ></el-alert>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
import api from '../services/api';
import auth from '../services/auth';

export default {
  name: 'Login',
  setup(props, { root }) {
    const loginForm = reactive({
      username: '',
      password: '',
    });

    const error = ref('');

    const rules = {
      username: [{ required: true, message: 'Введите логин', trigger: 'blur' }],
      password: [{ required: true, message: 'Введите пароль', trigger: 'blur' }],
    };

    const submitForm = async () => {
      try {
        error.value = '';

        const response = await api.login(loginForm.username, loginForm.password);

        if (response.data && response.data.length > 0) {
          auth.saveUser(response.data[0]);
          root.$router.push('/tasks');
          window.location.reload();
        } else {
          error.value = 'Неверный логин или пароль';
        }
      } catch (err) {
        error.value = 'Ошибка при входе в систему';
        console.error(err);
      }
    };

    return {
      loginForm,
      error,
      rules,
      submitForm,
    };
  },
};
</script>

<style>

</style>