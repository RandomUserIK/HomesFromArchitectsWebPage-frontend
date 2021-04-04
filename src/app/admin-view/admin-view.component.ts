import {Component, OnDestroy} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthService} from '../auth/services/auth.service';
import {exhaustMap} from 'rxjs/operators';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.scss']
})
export class AdminViewComponent implements OnDestroy{

  private test: Subscription;

  constructor(private httpClient: HttpClient, private authService: AuthService) {
  }

  testConnection() {
    this.test = this.authService.user.pipe(exhaustMap(user => {
      return this.httpClient.get('http://localhost:8090/api/admin/helloWorld');
    })).subscribe(val => console.log(val));
  }

  ngOnDestroy(): void {
    // this.test.unsubscribe();
  }
}
