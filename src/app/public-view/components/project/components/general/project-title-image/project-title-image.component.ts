import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-project-title-image',
  templateUrl: './project-title-image.component.html',
  styleUrls: ['./project-title-image.component.scss']
})
export class ProjectTitleImageComponent {

  @Input() titleImage: string;

}
