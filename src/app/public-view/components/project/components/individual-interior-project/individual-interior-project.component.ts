import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProjectsService} from '../../../../../services/projects-service';
import {AbstractProjectView} from '../general/project-view/abstract-project-view';
import {AutoScrollService} from '../../../../../services/auto-scroll.service';

@Component({
  selector: 'app-individual-interior-project',
  templateUrl: './individual-interior-project.component.html',
  styleUrls: ['./individual-interior-project.component.scss']
})
export class IndividualInteriorProjectComponent extends AbstractProjectView implements OnInit {

  public readonly INDIVIDUAL_CATEGORY_ID = 'INDIVIDUAL';
  public readonly INTERIOR_CATEGORY_ID = 'INTERIOR_DESIGN';

  constructor(projectService: ProjectsService,
              private _route: ActivatedRoute,
              private _autoScrollService: AutoScrollService) {
    super(projectService);
  }

  ngOnInit(): void {
    const projectId = +this._route.snapshot.params.id;
    this.init(projectId);
    this._autoScrollService.scrollToTop();
  }

}
