import {registerLocaleData} from "@angular/common";
import localeSk from "@angular/common/locales/sk";
import {Component, Input, OnInit} from '@angular/core';
import {Project} from '../../../../../../models/project/project.model';

@Component({
  selector: 'app-individual-project-info',
  templateUrl: './individual-project-info.component.html',
  styleUrls: ['./individual-project-info.component.scss']
})
export class IndividualProjectInfoComponent implements OnInit {

  @Input() project: Project;

  ngOnInit(): void {
    registerLocaleData(localeSk, 'sk');
  }

}
