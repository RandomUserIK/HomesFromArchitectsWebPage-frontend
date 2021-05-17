import {Component} from '@angular/core';
import {ExtendContentColumnData} from '../../resources/content-data';
import ExtendedContentData from '../../resources/extended-content-data.json';

@Component({
  selector: 'app-extended-content',
  templateUrl: './extended-content.component.html',
  styleUrls: ['./extended-content.component.scss']
})
export class ExtendedContentComponent {

  public getExtendedContentData(): ExtendContentColumnData[] {
    return ExtendedContentData.data as ExtendContentColumnData[];
  }

}
