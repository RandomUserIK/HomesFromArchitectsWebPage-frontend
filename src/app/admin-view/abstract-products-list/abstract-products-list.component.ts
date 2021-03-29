import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductListService} from '../individual-projects/services/product-list-service';
import {ProjectData} from '../individual-projects/interfaces/project-data';
import {Observable, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

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
  keyword: string = ""

  constructor(private _projectsService: ProductListService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.productsSubscriptions.push(
      this.route.params.pipe(switchMap((routeData) => {
        return this.handleProductList(routeData.id, this.currentPage - 1)
      })).subscribe(this.processData())
    );
  }

  ngOnDestroy(): void {
    this.productsSubscriptions.forEach(subscription => subscription.unsubscribe());
  }

  handleProductList(productsType: string, currentPage: number): Observable<any> {
    if (this.keyword == "") {
      return this.searchAll(productsType, currentPage);
    } else {
      this.searchByKeyword(productsType, currentPage);
    }
  }

  searchAll(productsType: string, currentPage: number): Observable<any> {
    return this._projectsService.searchAll(productsType, currentPage);
  }

  searchByKeyword(productsType: string, currentPage: number): Observable<any> {
    return this._projectsService.searchByKeyword(productsType, currentPage, this.keyword);
  }

  private processData() {
    return (data) => {
      console.log(data);
      this.products = data.individualProjects;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
    }
  }

  listProducts() {
    this.productsSubscriptions.push(
      this._projectsService.searchAll(this.route.snapshot.params['id'], this.currentPage - 1).subscribe(data => {
          this.products = data.individualProjects;
          this.currentPage = data.currentPage + 1;
          this.totalElements = data.totalElements;
        }
      ));
  }

  doSearch(value: string) {
    this.keyword = value;
    this.productsSubscriptions.push(
      this._projectsService.searchByKeyword(this.route.snapshot.params['id'], this.currentPage - 1, this.keyword)
        .subscribe(this.processData())
    );
  }
}
