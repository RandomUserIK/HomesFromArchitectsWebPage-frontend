import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../admin-view/models/project-data';
import {ProjectInfo} from '../../models/project-info.interface';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.scss']
})
export class ProjectInfoComponent implements OnInit {

  @Input() project: ProjectData;
  infoAttributes = new Array<ProjectInfo>();

  ngOnInit(): void {
    this.infoAttributes.push({name: 'Počet izieb', value: this.project.rooms});
    this.infoAttributes.push({name: 'Počet osôb', value: this.project.persons});
    this.infoAttributes.push({name: 'Zastavaná plocha', value: this.project.builtUpArea});
    this.infoAttributes.push({name: 'Úžitková plocha', value: this.project.grossArea});
    this.infoAttributes.push({name: 'Energetická trieda', value: this.project.energeticClass});
    this.infoAttributes.push({name: 'Orientácia vstupu', value: this.project.angleOfRoof});
    this.infoAttributes.push({name: 'Svojpomocná výstavba', value: this.project.selfHelpBuild});
    this.infoAttributes.push({name: 'Cena na kľúč', value: this.project.priceOnKey});
  }

}
