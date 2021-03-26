import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: any = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.httpClient.get(environment.serverUrl + '/users')
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.users = response;
        }
      });
  }

}
