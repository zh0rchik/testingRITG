<template>
  <task-list />
</template>

<script>
import { defineComponent } from '@vue/composition-api';
import TaskList from './components/TaskList.vue';

export default defineComponent({
  name: 'App',
  components: {
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
</style>
