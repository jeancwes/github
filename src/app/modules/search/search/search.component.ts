import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public entity: any;
  public entityLogin: any;
  public entitySearch: string = '';
  public isSearchPerformed: boolean = false;
  public opened: boolean = false;

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  search() {
    if (!this.entitySearch) {
      return;
    }

    this.isSearchPerformed = false;

    this.httpClient.get(`${environment.serverUrl}/users/${this.entitySearch}`)
      .subscribe((response: any) => {
        if (response) {
          this.entity = response;
          this.entityLogin = response.login;
        }
        this.isSearchPerformed = true;
      }, (response: any) => {
        delete(this.entity);
        this.isSearchPerformed = true;
      });
  }

  openInDialog() {
    this.opened = true;
  }

  openInPage() {
    const url = this.router.serializeUrl(
      this.router.createUrlTree([`/user/user/${this.entityLogin}`])
    );

    window.open(url, '_blank');
  }

  openedChange(opened) {
    this.opened = opened;
  }
}
