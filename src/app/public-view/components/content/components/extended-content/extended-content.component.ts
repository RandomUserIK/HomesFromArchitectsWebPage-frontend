import {Component, Input, OnInit} from '@angular/core';
import {ExtendContentColumnData, TextSection} from '../../resources/content-data';
import ExtendedContentData from '../../resources/extended-content-data.json';

@Component({
  selector: 'app-extended-content',
  templateUrl: './extended-content.component.html',
  styleUrls: ['./extended-content.component.scss']
})
export class ExtendedContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getExtendedContentData() : ExtendContentColumnData[]{
    return ExtendedContentData.data as ExtendContentColumnData[];
  }

}
