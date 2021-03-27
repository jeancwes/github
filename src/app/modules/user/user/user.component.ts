import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input() userLogin: string;

  public user: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      if (!params.get('userLogin')) {
        return;
      }
      this.userLogin = params.get('userLogin');
      this.getUser();
    });
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
      if (!simpleChanges.userLogin.currentValue) {
        return;
      }
      this.getUser();
  }

  getUser() {
    this.httpClient.get(`${environment.serverUrl}/users/${this.userLogin}`)
      .subscribe((response: {}) => {
        if (response) {
          this.user = response;
        }
      });
  }

}
