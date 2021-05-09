import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Project} from '../../../models/project/project.model';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  private project: Project;

  constructor(private activatedRoute: ActivatedRoute) {
    this.project = this.activatedRoute.snapshot.queryParams.projectType;
  }

  ngOnInit(): void {
  }

}
