import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../../../../../../configuration/services/configuration-service';
import {EndpointConfigData} from '../../../../../../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';
import {OrderForm} from '../models/order-form';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService) {
    this.resource = this.applicationConfigService.endpoints.find(resource => resource.name === 'order-endpoint');
  }

  public createOrder(order: OrderForm): Observable<any> {
    return this.httpClient
      .post<any>(`${this.resource.address}`, order);
  }

}
