<template>
  <div class="tasks">
    <task-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"
    />
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
import TaskItem from '../components/TaskItem.vue';
import api from '../services/api';

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  setup() {
    const tasks = ref([]);

    const fetchTasks = async () => {
      try{
        const response = await api.getTasks();
        tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,
    }
  }
}
</script>

<style scoped>

</style>