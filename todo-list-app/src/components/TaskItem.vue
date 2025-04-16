<template>
  <div>
    {{ task.title }}
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

  setup() {

  }
}
</script>

<style scoped>

</style>
