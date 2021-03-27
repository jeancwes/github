import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss']
})
export class RepositoryComponent implements OnInit {

  @Input() userLogin: string;

  public repositories: any = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    console.log('SimpleChanges');
    if (!simpleChanges.userLogin.currentValue) {
      return;
    }
    this.getUserRepositories();
  }

  getUserRepositories() {
    this.httpClient.get(`${environment.serverUrl}/users/${this.userLogin}/repos`)
      .subscribe((response: []) => {
        console.log(response);
        if (response) {
          this.repositories = this.sort(response);
        }
      });
  }
  
  sort(repositories: []) {
    return repositories.sort((a: any, b: any) => { 
      if(a.stargazers_count < b.stargazers_count) {
        return 1;
      }
      return -1;
    });
  }

}
