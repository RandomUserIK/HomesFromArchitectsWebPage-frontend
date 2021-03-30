import {Injectable} from '@angular/core';
import {AbstractConfigurationService} from './application-configuration-service';
import {default as hfaConfig} from '../resources/config.json';
import {ApplicationProperties} from '../models/application-properties';
import {EndpointConfigData} from '../models/enpoint-config-data';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends AbstractConfigurationService {

  public endpoints: EndpointConfigData[];

  constructor() {
    super(hfaConfig as ApplicationProperties);
    this.endpoints = hfaConfig.providers.resources;
  }
}
