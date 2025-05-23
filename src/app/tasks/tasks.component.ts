import { Component, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { TaskComponent } from './task/task.component';
@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.scss',
})
export class TasksComponent {
  @Input({ required: true }) name!: any;

  ngOnInit() {
    console.log('TasksComponent initialized');
    
  }
}

