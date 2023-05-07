<template>
  <div class="task">
    <!-- Task title -->
    <h3>{{ task.title }}</h3>

    <!-- Task actions -->
    <div class="icons">
      <i @click="handleDeleteTask" class="material-icons trash">delete</i>
      <i
        @click="handleToggleFav"
        class="material-icons heart"
        :class="{ favorite: task.isFav }"
        >favorite</i
      >
    </div>
  </div>
</template>

<script lang="ts">
import type { Task } from '@/interfaces/Task'
import { useTaskStore } from '@/stores/TaskStore'
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'TaskDetails',
  props: {
    task: {
      required: true,
      type: Object as PropType<Task>,
    },
  },
  setup(props) {
    const taskStore = useTaskStore()

    const handleDeleteTask = () => {
      taskStore.deleteTask(props.task.id)
    }

    const handleToggleFav = () => {
      taskStore.toggleFav(props.task.id)
    }

    return {
      taskStore,
      handleDeleteTask,
      handleToggleFav,
    }
  },
})
</script>
