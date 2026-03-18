import { computed, Injectable, signal } from '@angular/core';
import { TaskItem, TaskStatus } from '../models/task-item';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks = signal<TaskItem[]>([]);

  taskCount = computed(() => this.tasks().length);

  addTask(taskName: string) {
    const newTask: TaskItem = {
      id: this.generateTaskId(),
      name: taskName,
      status: 'Active',
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  updateTaskStatus(taskId: string, newStatus: TaskStatus) {
    this.tasks.update((tasks: TaskItem[]) =>
      tasks.map((task) => (task.id === taskId ? { ...task, status: newStatus } : task))
    );
  }

  deleteTask(taskId: string) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== taskId));
  }

  //private method to generate task id
  private generateTaskId = () => {
    return 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
  };
}
