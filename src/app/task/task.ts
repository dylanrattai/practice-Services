import { Component, input, output, inject } from '@angular/core';
import { TaskService } from '../services/task-service';
import { TaskStatus } from '../models/task-item';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {
  taskService = inject(TaskService);
  task = input.required<{ id: string; name: string; status: string }>();

  onSetTo(status: TaskStatus) {
    this.taskService.updateTaskStatus(this.task().id, status);
  }

  badgeClass() {
    const status = this.task().status;
    if (!status) return 'badge bg-secondary small';

    switch (status) {
      case 'Completed':
        return 'badge bg-success';
      case 'In-Active':
        return 'badge bg-danger';
      case 'Active':
        return 'badge bg-warning';
      default:
        return 'badge bg-secondary';
    }
  }

  onDeleteTask() {
    this.taskService.deleteTask(this.task().id);
  }
}
