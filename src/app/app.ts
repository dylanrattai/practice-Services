import { Component, inject, signal } from '@angular/core';
import { NewTask } from './new-task/new-task';
import { Task } from './task/task';
import { TaskService } from './services/task-service';
import { TaskItem } from './models/task-item';

@Component({
  selector: 'app-root',
  imports: [NewTask, Task],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  taskService = inject(TaskService);
}
