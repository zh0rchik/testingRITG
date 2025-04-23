<template>
  <div id="app">
    <el-header v-if="isAuthenticated">
      <div class="header-content">
        <h2>To-Do List</h2>
        <div class="user-info">
          <span>{{ username }}</span>
          <!--<el-button type="text">Выйти</el-button>-->
        </div>
      </div>
    </el-header>

    <container v-if="isAuthenticated">
      <task-list />
    </container>
  </div>
</template>

<script>
import { defineComponent, ref, onMounted } from '@vue/composition-api';
import TaskList from './components/TaskList.vue';
import Container from './components/Layout/Container.vue';
import auth from "@/services/auth";

export default defineComponent({
  name: 'App',
  components: {
    Container,
    TaskList,
  },

  setup() {
    const isAuthenticated = ref(false);
    const username = ref('');

    const checkAuth = () => {
      isAuthenticated.value = auth.isAuthenticated();
      if (isAuthenticated.value) {
        const user = auth.getUser();
        username.value = user.username;
      }
    };

    onMounted(() => {
      checkAuth();

    });

    return {
      isAuthenticated,
      username
    };
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

* {
  font-family: 'Arial', 'Helvetica', sans-serif;
  font-size: 14px;
}
</style>
