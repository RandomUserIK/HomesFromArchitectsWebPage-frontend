import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../../models/project/project.model';
import {ProjectsService} from '../../../../../services/projects-service';

@Component({
  selector: 'app-individual-project',
  templateUrl: './individual-project.component.html',
  styleUrls: ['./individual-project.component.scss']
})
export class IndividualProjectComponent implements OnInit {

  public project: Project;
  public error: Error;
  public isLoading = false;

  constructor(private _route: ActivatedRoute,
              private _projectService: ProjectsService) {
  }

  ngOnInit(): void {
    // TODO:
    this.fetchProject();
  }

  private fetchProject(): void {
    this.isLoading = true
    const projectId = +this._route.snapshot.params.id;
    this._projectService.getProject(projectId).subscribe((project) => {
      this.project = project;
      this.isLoading = false;
    }, error => {
      // TODO: display project not found
    });
  }

}
