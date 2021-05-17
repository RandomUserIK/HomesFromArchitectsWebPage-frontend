import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EndpointConfigData} from '../../../../../../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';
import {OrderForm} from '../models/order-form';
import {environment} from '../../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'order-endpoint');
  }

  public createOrder(order: OrderForm): Observable<any> {
    return this.httpClient
      .post<any>(`${this.resource.address}`, order);
  }

}
