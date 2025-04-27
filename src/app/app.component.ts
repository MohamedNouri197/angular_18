import { Component, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent,TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular_18';
  users = DUMMY_USERS;
  name :string='test' ;
  //x²@Output() userSelected = new EventEmitter();
  OnselectedUser(id: string) {
     this.name= this.users.find((user) => user.id === id)?.name || '';
     console.log(this.name);
  }
}
