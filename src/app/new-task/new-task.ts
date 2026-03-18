import { Component, signal, output, inject } from '@angular/core';
import { TaskService } from '../services/task-service';

@Component({
  selector: 'app-new-task',
  imports: [],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  taskService = inject(TaskService);
  showWarning = signal<boolean>(false);

  constructor() {}

  onCreateTask(taskInput: HTMLInputElement) {
    const taskName = taskInput.value;
    // Trim whitespace
    if (!taskName || taskName.trim() === '') {
      this.showWarning.set(true); // show inline warning
      return;
    }
    this.taskService.addTask(taskName);
    taskInput.value = '';
  }
}
