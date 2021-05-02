import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../../../models/project/project.model';
import {ProjectsService} from '../../../../../services/projects-service';

@Component({
  selector: 'app-interior-project',
  templateUrl: './interior-project.component.html',
  styleUrls: ['./interior-project.component.scss']
})
export class InteriorProjectComponent implements OnInit {

  public project: Project;
  public error: Error;
  public isLoading = false;

  constructor(private _route: ActivatedRoute,
              private _projectService: ProjectsService) {
  }

  ngOnInit(): void {
    this.project = {
      id: 1,
      title: 'Palisander',
      persons: 6,
      builtUpArea: 198.72,
      energeticClass: 'A0',
      usableArea: 131.72,
      titleImage: 'slide1.png',
      imagePaths: ['slide1.png', 'slide2.png'],
      textSections: [
        {
          id: 1,
          title: '',
          text: 'Rodinný dom Palisander patrí medzi nadštandardné dvojpodlažné šesťizbové rodinné domy. ' +
            'Určený je pre bývanie až šiestich členov rodiny. Je ideálny na rovinatý prípadne mierne svahovitý pozemok. ' +
            'Tento rodinný dom je samotne stojaci objekt, bez podpivničenia s plochou strechou.'
        },
        {
          id: 2,
          title: 'Dispozícia',
          text: 'Na spodnom podlaží vchádzame cez prestrešený vstup do vstupnej haly. ' +
            'Nachádza sa tu hosťovská izba s vlastnou kúpeľnou, WC, technická miestnosť s komorou, ' +
            'veľký otvorený šatník a denný priestor s polooddelenou jedálenskou časťou. Schodiskom vchádzame na ' +
            'druhé nadzemné podlažie, kde sú dve izby s vlastnou kúpeľňou a plne vybavený spálňový apartmán. ' +
            'Pod vykonzolovanou časťou domu sa nachádza polokrytá garáž pre dve autá s miestom na stolovanie ' +
            'alebo iné aktivity pod strechou.'
        },
        {
          id: 3,
          title: 'Technické riešenie',
          text: 'Rodinný dom je navrhnutý z keramických tvárnic, ktoré možno zameniť za pórobetón. ' +
            'Stropy sú monolitické betónové. Vykurovanie je podlahové.'
        }
      ]
    }

    // TODO:
    // this.fetchProject();
  }

  private fetchProject(): void {
    this.isLoading = true
    const projectId = +this._route.snapshot.params.id;
    this._projectService.getProject(projectId).subscribe((projectMessageResource) => {
      this.project = projectMessageResource.project;
      this.isLoading = false;
    }, error => {
      // TODO: display project not found
    });
  }

}
