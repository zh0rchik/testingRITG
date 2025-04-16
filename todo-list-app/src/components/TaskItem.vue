<template>
  <div class="task-row">
    <div>
      <el-checkbox class="task-checkbox"></el-checkbox>
      <span>{{ task.title }}</span> <!--повесить псевдокласс-->
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
export default {
  name: 'TaskItem',
  props: {
    task: {
      type: Object,
      required: true,
    },
  },

  setup(props, {emit}) {
    const deleteTask = () => {
      // call-back функция
      emit('delete', props.task.id);
    };

    return {
      deleteTask,
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
