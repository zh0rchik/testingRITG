<template>
  <div class="task-row">
    <div>
      <el-checkbox
          v-model="isCompleted"
          class="task-checkbox"
          @change="updateTaskStatus"
      />
      <span :class="{ 'completed': isCompleted }">{{ task.title }}</span> <!--повесить псевдокласс-->
    </div>
    <el-button
        type="text"
        class="delete-btn"
        @click="deleteTask"
    >
      <i class="el-icon-close"></i>
    </el-button>
  </div>

</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
import api from '../services/api'

export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  setup(props, {emit}) {
    const isCompleted = ref(props.task.completed);

    const deleteTask = () => {
      // call-back функция
      emit('delete', props.task.id);
    };

    const updateTaskStatus = () => {
      // Обновляем локальное состояние и родителю говорим про обновление
      emit('update', {
        ...props.task,
        completed: isCompleted.value,
      });

      try {
        const updatedTask = {
          ...props.task,
          completed: isCompleted.value,
        };

        api.updateTask(updatedTask);
      } catch (error) {
        console.error('Ошибка обновления статуса задачи: ', error);
      }
    };

    onMounted(() => {
      isCompleted.value = props.task.completed;
    });

    return {
      deleteTask,
      isCompleted,
      updateTaskStatus,
    }
  }
}
</script>

<style scoped>
.delete-btn {
  color: #ff0000;
}
.task-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/deep/ .el-checkbox__input.is-checked .el-checkbox__inner {
  background-color: #ff3434;
  border-color: #fd4c4c;
}
</style>
