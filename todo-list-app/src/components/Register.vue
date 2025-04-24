<template>
  <div class="register-container">
    <h2>Регистрация</h2>
    <el-form :model="registerForm" ref="registerForm" :rules="rules">
      <el-form-item prop="username">
        <el-input
            v-model="registerForm.username"
            placeholder="Логин"
            prefix-icon="el-icon-user"
        ></el-input>
      </el-form-item>

      <el-form-item prop="password">
        <el-input
            v-model="registerForm.password"
            type="password"
            placeholder="Пароль"
            prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>

      <el-form-item prop="confirmPassword">
        <el-input
            v-model="registerForm.confirmPassword"
            type="password"
            placeholder="Подтвердите пароль"
            prefix-icon="el-icon-lock"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm" :loading="loading" style="width: 100%">
          Зарегистрироваться
        </el-button>
      </el-form-item>
    </el-form>

    <div class="login-link">
      <p>Уже есть аккаунт? <router-link to="/login">Войти</router-link></p>
    </div>

    <el-alert
        v-if="error"
        :title="error"
        type="error"
        show-icon
        :closable="false"
    ></el-alert>
  </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
import api from '../services/api';
import auth from '../services/auth';

export default {
  name: 'Register',
  setup(props, { root }) {
    const registerForm = reactive({
      username: '',
      password: '',
      confirmPassword: '',
    });

    const loading = ref(false);
    const error = ref('');
    const registerFormRef = ref(null);

    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Введите пароль'));
      } else {
        if (registerForm.confirmPassword !== '') {
          registerFormRef.value.validateField('confirmPassword');
        }
        callback();
      }
    };

    const validateConfirmPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Подтвердите пароль'));
      } else if (value !== registerForm.password) {
        callback(new Error('Пароли не совпадают'));
      } else {
        callback();
      }
    };

    const rules = {
      username: [{ required: true, message: 'Введите логин', trigger: 'blur' }],
      password: [{ validator: validatePass, trigger: 'blur' }],
      confirmPassword: [{ validator: validateConfirmPass, trigger: 'blur' }],
    };

    const submitForm = async () => {
      try {
        loading.value = true;
        error.value = '';

        // Проверка существования пользователя
        const checkUser = await api.login(registerForm.username, '');

        if (checkUser.data && checkUser.data.length > 0) {
          error.value = 'Пользователь с таким логином уже существует';
          return;
        }

        const response = await api.register(
            registerForm.username,
            registerForm.password
        );

        auth.saveUser(response.data);
        auth.removeUser(response.data)
        root.$router.push('/login');

      } catch (err) {
        error.value = 'Ошибка при регистрации';
        console.error(err);
      } finally {
        loading.value = false;
      }
    };

    return {
      registerForm,
      registerFormRef,
      loading,
      error,
      rules,
      submitForm,
    };
  },
};
</script>