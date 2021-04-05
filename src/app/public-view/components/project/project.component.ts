import {Component, OnInit} from '@angular/core';
import {ProjectData} from '../../../admin-view/models/project-data';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  // TODO: set as input
  project: ProjectData;

  constructor() {
  }

  ngOnInit(): void {
    // TODO: remove
    this.project = {
      id: 1,
      projectName: 'Palisander',
      persons: 6,
      builtUpArea: 198.72,
      totalLivingArea: 231.30,
      energeticClass: 'A0',
      orientation: 'S,V,Z',
      selfHelpBuild: 145500,
      priceOnKey: 220000,
      basicProject: 2550,
      advancedProject: 2950,
      rooms: 6,
      grossArea: 131.72,
      angleOfRoof: 1.5,
      minimumParcelWidth: 20,
      heatingSource: 'tepelné čerpadlo',
      heatingType: 'podlahové vykurovanie',
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
  }

}
