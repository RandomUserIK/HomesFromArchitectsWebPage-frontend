import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../../../services/projects-service';
import {AbstractProjectView} from '../general/project-view/abstract-project-view';

@Component({
  selector: 'app-interior-project',
  templateUrl: './interior-project.component.html',
  styleUrls: ['./interior-project.component.scss']
})
export class InteriorProjectComponent extends AbstractProjectView implements OnInit {

  constructor(projectService: ProjectsService,
              private _route: ActivatedRoute) {
    super(projectService);
  }

  ngOnInit(): void {
    const projectId = +this._route.snapshot.params.id;
    this.init(projectId);
  }

}
