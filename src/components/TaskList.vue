<template>
  <div class="task-list">
    <p>You have ({{ taskStore.getCountByStatus(filter) }}) tasks to do</p>
    <div v-for="task in taskStore.getTasksByStatus(filter)">
      <!-- Task entry -->
      <TaskDetails :task="task" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { useTaskStore } from '@/stores/TaskStore'
import { type TaskStatus } from '@/types/TaskStatus'
import TaskDetails from './TaskDetails.vue'

export default defineComponent({
  name: 'TaskList',
  components: { TaskDetails },
  props: {
    filter: {
      required: true,
      type: String as PropType<TaskStatus>,
    },
  },
  setup() {
    const taskStore = useTaskStore()

    return {
      taskStore,
    }
  },
})
</script>
