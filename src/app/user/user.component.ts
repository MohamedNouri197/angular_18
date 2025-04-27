import {
  Component,
  computed,
  input,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input() avatar!: string;
  @Input() name!: string;
  @Input() id!: string;
  @Output() select = new EventEmitter();
  /*   avatar = input<string>();
  name = input<string>();
 */
  getImagePath = computed(() => {
    'assets/users/users/' + this.avatar;
  });

  /* getImagePath() {
    return 'assets/users/users/' + this.avatar();
  } */
  onSelectUser() {
    this.select.emit(this.id);
  }
}
