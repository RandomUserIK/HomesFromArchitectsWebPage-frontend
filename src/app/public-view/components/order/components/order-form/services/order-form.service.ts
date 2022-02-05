import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EndpointConfigData} from '../../../../../../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';
import {environment} from '../../../../../../../environments/environment';
import {FormGroup} from '@angular/forms';
import {DataField} from '../../../../../../components/data-fields/models/data-field';
import {RequestEntityPreparationService} from '../../../../../../services/request-entity-preparation.service';

@Injectable({
  providedIn: 'root'
})
export class OrderFormService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient, private _preparationService: RequestEntityPreparationService) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'order-endpoint');
  }

  public createOrder(form: FormGroup, formConfig: DataField[]): Observable<string> {
    this._preparationService.prepareFormData(form, formConfig);
    return this.httpClient.post<any>(`${this.resource.address}`, this._preparationService.formData);
  }

}
