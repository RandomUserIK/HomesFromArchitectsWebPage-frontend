import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CommonProject} from '../../../../../models/project/common-project.model';
import {ProjectsService} from '../../../../../services/projects-service';

@Component({
  selector: 'app-common-project',
  templateUrl: './common-project.component.html',
  styleUrls: ['./common-project.component.scss']
})
export class CommonProjectComponent implements OnInit {

  public project: CommonProject;
  public error: Error;
  public isLoading = false;

  constructor(private _route: ActivatedRoute,
              private _projectService: ProjectsService) {
  }

  ngOnInit(): void {
    // TODO: remove
    // this.project = {
    //   id: 1,
    //   title: 'Palisander',
    //   persons: 6,
    //   builtUpArea: 198.72,
    //   totalLivingArea: 231.30,
    //   energeticClass: 'A0',
    //   entryOrientation: 'S, V, Z',
    //   selfHelpBuildPrice: 145500,
    //   onKeyPrice: 220000,
    //   basicProjectPrice: 2550,
    //   extendedProjectPrice: 2950,
    //   rooms: 6,
    //   usableArea: 131.72,
    //   roofPitch: 1.5,
    //   minimumParcelWidth: 20,
    //   heatingSource: 'tepelné čerpadlo',
    //   heatingType: 'podlahové vykurovanie',
    //   floorPlanImagePaths: ['floor_plan.png'],
    //   imagePaths: ['slide1.png', 'slide2.png'],
    //   textSections: [
    //     {
    //       id: 1,
    //       title: '',
    //       text: 'Rodinný dom Palisander patrí medzi nadštandardné dvojpodlažné šesťizbové rodinné domy. ' +
    //         'Určený je pre bývanie až šiestich členov rodiny. Je ideálny na rovinatý prípadne mierne svahovitý pozemok. ' +
    //         'Tento rodinný dom je samotne stojaci objekt, bez podpivničenia s plochou strechou.'
    //     },
    //     {
    //       id: 2,
    //       title: 'Dispozícia',
    //       text: 'Na spodnom podlaží vchádzame cez prestrešený vstup do vstupnej haly. ' +
    //         'Nachádza sa tu hosťovská izba s vlastnou kúpeľnou, WC, technická miestnosť s komorou, ' +
    //         'veľký otvorený šatník a denný priestor s polooddelenou jedálenskou časťou. Schodiskom vchádzame na ' +
    //         'druhé nadzemné podlažie, kde sú dve izby s vlastnou kúpeľňou a plne vybavený spálňový apartmán. ' +
    //         'Pod vykonzolovanou časťou domu sa nachádza polokrytá garáž pre dve autá s miestom na stolovanie ' +
    //         'alebo iné aktivity pod strechou.'
    //     },
    //     {
    //       id: 3,
    //       title: 'Technické riešenie',
    //       text: 'Rodinný dom je navrhnutý z keramických tvárnic, ktoré možno zameniť za pórobetón. ' +
    //         'Stropy sú monolitické betónové. Vykurovanie je podlahové.'
    //     }
    //   ]
    // }

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
