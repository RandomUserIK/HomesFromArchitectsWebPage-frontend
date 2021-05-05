import {Project} from '../../../../../../models/project/project.model';
import {ProjectsService} from '../../../../../../services/projects-service';

export abstract class AbstractProjectView {

  public project: Project;
  public error: Error;
  public isLoading = false;
  public readonly projectNotFoundMessage = 'Projekt nebol nájdený';

  protected constructor(private _projectService: ProjectsService) {
  }

  public init(projectId: number): void {
    this.fetchProject(projectId);
  }

  private fetchProject(projectId: number): void {
    this.isLoading = true
    this._projectService.getProject(projectId).subscribe((project) => {
      this.project = project.project;
      this.isLoading = false;
    }, error => {
      this.error = error;
      this.isLoading = false;
    });
  }

}
