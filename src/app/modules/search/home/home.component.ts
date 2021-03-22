import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public entity: any = {};
  public entitySearch: string = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  search() {
    if (!this.entitySearch) {
      return;
    }

    this.httpClient.get(`${environment.serverUrl}/users/${this.entitySearch}`)
      .subscribe((response: any) => {
        console.log(response);
        if (response) {
          this.entity = response;
        }
      });
  }

}
