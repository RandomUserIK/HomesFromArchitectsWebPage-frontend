import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EndpointConfigData} from '../../../../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';
import {ContactForm} from '../contact-form/models/contact-form';
import {environment} from '../../../../../environments/environment';

@Injectable()
export class ContactsService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient) {
    this.resource = environment.providers.resources.find(resource => resource.name === 'contact-endpoint');
  }

  public sendForm(contactForm: ContactForm): Observable<any> {
    return this.httpClient
      .post<any>(`${this.resource.address}`, contactForm);
  }
}
