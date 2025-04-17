<template>
  <div class="task-item">
    <div v-if="!isEditing">
      <div class="task-row">
        <div class="task-content">
          <el-checkbox
              v-model="isCompleted"
              @change="updateTaskStatus"
          ></el-checkbox>
          <span
              style="margin-left: 20px"
              :class="{ 'completed': isCompleted }"
              @click="modeEdit"
          >
            {{ task.title }}
          </span>
        </div>
        <el-button
            type="text"
            @click="deleteTask"
            class="delete-btn"
        >
          <i class="el-icon-close"></i>
        </el-button>
      </div>
    </div>
    <div v-else class="edit-form">
      <el-checkbox
          v-model="isCompleted"
          @change="updateTaskStatus"
      ></el-checkbox>
      <el-input
          style="margin-left: 10px"
          type="text"
          v-model="editedTitle"
          @blur="saveEdit"
          ref="editInput"
      ></el-input>

      <el-button
          type="text"
          @click="deleteTask"
          class="delete-btn"
      >
        <i class="el-icon-close"></i>
      </el-button>
    </div>
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
    const isEditing = ref(false);
    const editedTitle = ref('');
    const editInput = ref(null);
    const isCompleted = ref(props.task.completed);

    const modeEdit = () => {
      editedTitle.value = props.task.title;
      isEditing.value = true;
      // Фокусировка на поле ввода при переходе в режим редактирования
      setTimeout(() => {
        if (editInput.value) {
          editInput.value.focus();
        }
      });
    };

    const saveEdit = () => {
      if (editedTitle.value.trim()) {
        emit('update', {
          ...props.task,
          title: editedTitle.value,
        });
      }
      isEditing.value = false;
    };

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
      isEditing,
      editedTitle,
      isCompleted,
      editInput,
      modeEdit,
      saveEdit,
      updateTaskStatus,
      deleteTask,
    };
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
  align-items: center;
}

.edit-form {
  display: flex;
  align-items: center;
}

</style>
