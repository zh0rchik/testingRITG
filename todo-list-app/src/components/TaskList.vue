<template>
  <div class="tasks">
    <div class="task-input">
      <!--поле ввода https://element-plus.org/en-US/component/input-->
      <el-input
          v-model="newTask"
          placeholder="Task"
          @keyup.enter.native="addTask"
      > <!--повесил ентер-->
        <template #prepend>Task</template>
      </el-input>

      <!--кнопка https://element-plus.org/en-US/component/button-->
      <el-button
          type="success"
          plain
          @click="addTask"
      >ADD</el-button>
    </div>

    <!--отображение списка-->
    <task-item
        v-for="task in tasks"
        :key="task.id"
        :task="task"

        @delete="deleteTask"
        @update="updateTask"
    />
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
import TaskItem from '../components/TaskItem.vue';
import api from '../services/api';
import auth from "@/services/auth";

export default {
  name: 'TaskList',
  components: {
    TaskItem,
  },
  setup() {
    const tasks = ref([]);
    const newTask = ref('');
    const user = auth.getUser();

    // Загрузка задач
    const fetchTasks = async () => {
      try{
        const response = await api.getTasks(user.id);
        tasks.value = response.data;
      } catch (error) {
        console.error(error);
      }
    };

    // Добавление задач
    const addTask = async () => {
      if (newTask.value.trim() && user){ // обрезает пробелы
        try {
          const task = {
            title: newTask.value,
            completed: false,
            userId: user.id, // новое поле
          };

          const response = await api.createTask(task);
          tasks.value.push(response.data);
          newTask.value = '';
        } catch (error) {
          console.error('Ошибка добавления: ',error);
        }
      }
    };

    // Удаление задачи
    const deleteTask = async (id) => {
      try{
        await api.deleteTask(id);
        tasks.value = tasks.value.filter((task) => task.id !== id);
      } catch (error) {
        console.error('Ошибка удаления', error);
      }
    };

    // Обновление задачи
    const updateTask = async (updatedTask) => {
      try{
        await api.updateTask(updatedTask);
        const response = await api.getTasks()
        tasks.value = response.data;
      } catch (error) {
        console.error("Ошибка обновления задачи", error)
      }
    }

    // хук
    onMounted(() => {
      fetchTasks();
    });

    return {
      tasks,

      newTask, // чтобы можно было вводить
      addTask,

      deleteTask,

      updateTask,
    }
  }
}
</script>

<style scoped>
.task-input {
  display: flex;
  margin-bottom: 20px;
}
</style>