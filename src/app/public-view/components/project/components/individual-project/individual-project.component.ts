import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../../../services/projects-service';
import {AbstractProjectView} from '../general/project-view/abstract-project-view';

@Component({
  selector: 'app-individual-project',
  templateUrl: './individual-project.component.html',
  styleUrls: ['./individual-project.component.scss']
})
export class IndividualProjectComponent extends AbstractProjectView implements OnInit {

  constructor(projectService: ProjectsService,
              private _route: ActivatedRoute) {
    super(projectService);
  }

  ngOnInit(): void {
    const projectId = +this._route.snapshot.params.id;
    this.init(projectId);
  }

}
