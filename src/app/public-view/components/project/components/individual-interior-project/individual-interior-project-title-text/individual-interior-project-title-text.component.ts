import {Component, Input} from '@angular/core';
import {IndividualInteriorProjectTitleTextData} from '../../../../../../models/project/individual-interior-project-title-text-data';

@Component({
  selector: 'app-individual-interior-project-title-text',
  templateUrl: './individual-interior-project-title-text.component.html',
  styleUrls: ['./individual-interior-project-title-text.component.scss']
})
export class IndividualInteriorProjectTitleTextComponent {

  @Input() titleTextData: IndividualInteriorProjectTitleTextData;

}
