import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-project-customized-proposal',
  templateUrl: './project-customized-proposal.component.html',
  styleUrls: ['./project-customized-proposal.component.scss']
})
export class ProjectCustomizedProposalComponent {

  constructor(private _router: Router) {
  }

  onLinkClick(): void {
    this._router.navigate(['/kontakty']);
  }

}
