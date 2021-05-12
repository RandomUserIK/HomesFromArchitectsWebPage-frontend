import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../../../services/projects-service';
import {AbstractProjectView} from '../general/project-view/abstract-project-view';

@Component({
  selector: 'app-common-project',
  templateUrl: './common-project.component.html',
  styleUrls: ['./common-project.component.scss']
})
export class CommonProjectComponent extends AbstractProjectView implements OnInit {

  constructor(projectService: ProjectsService,
              private _route: ActivatedRoute) {
    super(projectService);
  }

  ngOnInit(): void {
    const projectId = +this._route.snapshot.params.id;
    this.init(projectId);
  }

}
