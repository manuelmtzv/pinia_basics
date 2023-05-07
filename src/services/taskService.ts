import { type Task } from '@/interfaces/Task'

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const res = await fetch('http://localhost:3000/tasks')
    const data = await res.json()

    return data as Promise<Task[]>
  },
  async addTask(task: Task) {
    await fetch('http://localhost:3000/tasks', {
      method: 'POST',
      body: JSON.stringify(task),
      headers: {
        'Content-Type': 'application/json',
      },
    })
  },
  async deleteTask(id: string) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'DELETE',
    })
  },
  async toggleFav(id: string, task: Task) {
    await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ isFav: task.isFav }),
      headers: { 'Content-Type': 'application/json' },
    })
  },
}
