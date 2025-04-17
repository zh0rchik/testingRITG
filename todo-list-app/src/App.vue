<template>
  <container>
    <task-list />
  </container>
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import TaskList from './components/TaskList.vue';
import Container from './components/Layout/Container.vue';

export default defineComponent({
  name: 'App',
  components: {
    Container,
    TaskList,
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
