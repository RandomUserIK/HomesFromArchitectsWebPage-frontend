import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProjectService} from '../individual-projects/services/project-service';
import {ProjectData} from '../individual-projects/interfaces/project-data';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-abstract-products-list',
  templateUrl: './abstract-products-list.component.html',
  styleUrls: ['./abstract-products-list.component.scss']
})
export class AbstractProductsListComponent implements OnInit, OnDestroy {

  products: Array<ProjectData>;
  productsSubscriptions: Array<Subscription> = [];
  loading = true;
  pageSize = 9;
  totalElements = 0;
  currentPage = 1;

  constructor(private _projectsService: ProjectService) {
  }

  ngOnInit(): void {
    this.productsSubscriptions.push(this._projectsService.getProjects(this.currentPage - 1).subscribe(data => {
        this.products = data.individualProjects;
        this.currentPage = data.currentPage + 1;
        this.totalElements = data.totalElements;
      }
    ));
  }

  ngOnDestroy(): void {
    this.productsSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  listProducts() {
    this.productsSubscriptions.push(
      this._projectsService.getProjects(this.currentPage - 1).subscribe(data => {
          this.products = data.individualProjects;
          this.currentPage = data.currentPage + 1;
          this.totalElements = data.totalElements;
        }
      ));
  }
}
