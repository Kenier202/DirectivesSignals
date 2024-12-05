import { Component, inject, OnInit, signal } from '@angular/core';
import { UsersServiceService } from '../../services/usersService.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrls: ['./user-info-page.component.css']
})
export class UserInfoPageComponent implements OnInit {

  private userService = inject(UsersServiceService);
  public userId = signal(1);
  public currentUser = signal<User | undefined>(undefined);
  public userWasFound = signal(true);

  ngOnInit(): void {
    this.loadUser(this.userId());
  }

  loadUser(id: number) {
    if(id <= 0) return;

    this.userId.set(id);



    this.userService.getUsersById(id)
      .subscribe(user => {
        this.currentUser.set(user);
      })
  }


}
