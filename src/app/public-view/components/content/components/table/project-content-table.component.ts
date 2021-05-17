import {Component} from '@angular/core';
import tableData from '../../resources/table-content-data.json';
import {TableContentData} from '../../resources/content-data';

@Component({
  selector: 'project-content-table',
  templateUrl: './project-content-table.component.html',
  styleUrls: ['./project-content-table.component.scss']
})
export class ProjectContentTableComponent {

  public getTableData(): TableContentData[]{
    return tableData.table as TableContentData[];
  }

  public isString(data : string | boolean) : boolean {
    return typeof(data) === 'string';
  }
}
