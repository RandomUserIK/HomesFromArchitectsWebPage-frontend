import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-customer-request',
  templateUrl: './project-customer-request.component.html',
  styleUrls: ['./project-customer-request.component.scss']
})
export class ProjectCustomerRequestComponent {

  @Input() projectTitle: string;

  constructor(private _router: Router) {
  }

  onButtonClick(): void {
    this._router.navigate([`/objednavka/${this.projectTitle}`]);
  }

}
