import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ConfigurationService} from '../../../../configuration/services/configuration-service';
import {EndpointConfigData} from '../../../../configuration/models/enpoint-config-data';
import {Observable} from 'rxjs';
import {ContactForm} from '../models/contact-form';

@Injectable()
export class ContactsService {

  private resource: EndpointConfigData;

  constructor(private httpClient: HttpClient,
              private applicationConfigService: ConfigurationService) {
    this.resource = this.applicationConfigService.endpoints.find(resource => resource.name === 'project-endpoint');
  }

  public sendForm(contactForm: ContactForm): Observable<any> {
    return this.httpClient
      .post<any>(`${this.resource.address}/contact`, contactForm);
  }
}
