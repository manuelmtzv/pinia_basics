<template>
  <div class="container">
    <!-- Heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="Pinia icon" />
      <h1>Pinia Tasks (basics)</h1>
    </header>

    <!-- New task form -->
    <div class="new-task-form">
      <TaskForm />
    </div>

    <!-- Filter -->
    <nav class="filter">
      <button @click="() => handleChangeFilter('all')">All tasks</button>
      <button @click="() => handleChangeFilter('favs')">Fav tasks</button>
    </nav>

    <!-- Loading -->
    <div class="loading" v-if="taskStore.loading">Loading tasks...</div>

    <!-- Task List -->
    <TaskList v-else :filter="filter" />

    <!-- Reset all -->
    <div class="reset">
      <button
        @click="taskStore.deleteAllTasks"
        class="reset-button"
        :class="{ disabled: taskStore.isEmpty }"
        :disabled="taskStore.isEmpty"
      >
        Reset
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useTaskStore } from './stores/TaskStore'

// Components
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

import { type TaskStatus } from './types/TaskStatus'

export default defineComponent({
  name: 'App',
  components: { TaskForm, TaskList },
  setup() {
    const taskStore = useTaskStore()
    const filter = ref<TaskStatus>('all')

    // Fetch tasks
    onMounted(() => {
      taskStore.getTasks()
    })

    const handleChangeFilter = (newValue: TaskStatus) => {
      filter.value = newValue
    }

    return { taskStore, filter, handleChangeFilter }
  },
})
</script>
