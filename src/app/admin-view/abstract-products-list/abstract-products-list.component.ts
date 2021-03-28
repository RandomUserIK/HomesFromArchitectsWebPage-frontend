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
  productsSubscription: Subscription;

  constructor(private _projectsService: ProjectService) {
  }

  ngOnInit(): void {
    this.productsSubscription = this._projectsService.getProjects(0).subscribe(products => {
        this.products = products;
        console.log(this.products)
      }
    );
  }

  ngOnDestroy(): void {
    this.productsSubscription.unsubscribe();
  }

}
