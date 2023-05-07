import { defineStore } from 'pinia'
import { type Task } from '@/interfaces/Task'
import { type TaskStatus } from '@/types/TaskStatus'
import { taskService } from '@/services/taskService'

export const useTaskStore = defineStore('taskStore', {
  state: (): { tasks: Task[]; loading: boolean } => ({
    tasks: [] as Task[],
    loading: false as boolean,
  }),
  getters: {
    favs(): Task[] {
      return this.tasks.filter((task) => task.isFav)
    },
    totalCount(): number {
      return this.tasks.length
    },
    favCount(): number {
      return this.favs.length
    },
    isEmpty(): boolean {
      return !(this.tasks.length > 0)
    },
  },
  actions: {
    async getTasks() {
      try {
        this.loading = true

        this.tasks = await taskService.getTasks()
      } catch (error) {
        console.log(`Error at getTasks action: ${error}`)
      } finally {
        this.loading = false
      }
    },
    addTask(task: Task) {
      try {
        this.tasks.push(task)

        taskService.addTask(task)
      } catch (error) {
        console.log(`Error at addTask action: ${error}`)
      }
    },
    deleteTask(id: string) {
      try {
        this.tasks = this.tasks.filter((task) => task.id !== id)

        taskService.deleteTask(id)
      } catch (error) {
        console.log(`Error at deleteTask action: ${error}`)
      }
    },

    deleteAllTasks() {
      try {
        console.log(this.isEmpty)
        const tasks = [...this.tasks]

        this.$reset()

        tasks.forEach((task) => {
          this.deleteTask(task.id)
        })
      } catch (error) {
        console.log(`Error at deleteAllTasks: ${error}`)
      }
    },
    getTasksByStatus(status: TaskStatus): Task[] {
      return status === 'all' ? this.tasks : this.favs
    },
    getCountByStatus(status: TaskStatus): number {
      return status === 'all' ? this.totalCount : this.favCount
    },
  },
})
