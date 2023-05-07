<template>
  <form @submit.prevent="handleSubmit">
    <!-- Task title input -->
    <input type="text" placeholder="I need to..." v-model="newTask" />

    <!-- Task submit -->
    <button type="submit">Add</button>
  </form>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores/TaskStore'
import { defineComponent, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export default defineComponent({
  name: 'TaskForm',
  setup() {
    const taskStore = useTaskStore()
    const newTask = ref<string>('')

    const handleSubmit = () => {
      if (newTask.value.length) {
        taskStore.addTask({
          id: uuidv4(),
          title: newTask.value,
          isFav: false,
        })
        newTask.value = ''
      }
    }

    return {
      newTask,
      handleSubmit,
    }
  },
})
</script>
