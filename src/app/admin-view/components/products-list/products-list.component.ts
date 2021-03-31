import {Component, OnInit} from '@angular/core';
import {ProductListService} from '../../services/product-list-service';
import {ProjectData} from '../../models/project-data';
import {Observable} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-abstract-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {

  products: Array<ProjectData>;
  loading = false;
  pageSize = 9;
  totalElements = 0;
  currentPage = 1;
  keyword: string = ""

  constructor(private _productListService: ProductListService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params.pipe(
      switchMap((routeData) => {
        return this.handleProductList(routeData.id, this.currentPage - 1)
      })).subscribe(this.processData());
  }

  public handleProductList(productsType: string, currentPage: number): Observable<any> {
    this.loading = true;
    if (this.keyword == "") {
      return this.searchAll(productsType, currentPage);
    } else {
      return this.searchByKeyword(productsType, currentPage);
    }
  }

  public onPageChange(): void {
    this.handleProductList(this.route.snapshot.params['id'], this.currentPage - 1)
      .subscribe(this.processData())
  }

  public onSearchKeyword(value: string) {
    this.keyword = value;
    this._productListService
      .searchByKeyword(this.route.snapshot.params['id'], this.currentPage - 1, this.keyword)
      .subscribe(this.processData());
  }

  private searchAll(productsType: string, currentPage: number): Observable<any> {
    return this._productListService.searchAll(productsType, currentPage);
  }

  private searchByKeyword(productsType: string, currentPage: number): Observable<any> {
    return this._productListService.searchByKeyword(productsType, currentPage, this.keyword);
  }

  private processData() {
    return (data) => {
      this.products = data.individualProjects;
      this.currentPage = data.currentPage + 1;
      this.totalElements = data.totalElements;
      this.loading = false;
    }
  }

}
