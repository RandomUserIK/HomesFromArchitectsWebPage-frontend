import {Component, Input, OnInit} from '@angular/core';
import {ProjectData} from '../../../../../models/project-data';
import {ProjectInfo} from '../../models/project-info.interface';

@Component({
  selector: 'app-project-building-info',
  templateUrl: './project-building-info.component.html',
  styleUrls: ['./project-building-info.component.scss']
})
export class ProjectBuildingInfoComponent implements OnInit {

  @Input() project: ProjectData;

  buildingInfo = new Array<ProjectInfo>();

  ngOnInit(): void {
    this.buildingInfo.push({name: 'obytné miestnosti', value: this.project.persons});
    this.buildingInfo.push({name: 'zastavaná plocha', value: this.project.builtUpArea});
    this.buildingInfo.push({name: 'celková úžitková plocha', value: this.project.grossArea});
    this.buildingInfo.push({name: 'celková obytná plocha', value: this.project.totalLivingArea});
    this.buildingInfo.push({name: 'sklon strechy', value: this.project.angleOfRoof});
    this.buildingInfo.push({name: 'minimálna šírka pozemku', value: this.project.minimumParcelWidth});
  }

}
