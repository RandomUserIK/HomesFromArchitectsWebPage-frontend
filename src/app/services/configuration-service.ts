import { Injectable } from '@angular/core';
import {AbstractConfigurationService} from './application-configuration-service';
import {default as hfaConfig} from '../resources/config.json';
import {ApplicationProperties} from '../interfaces/application-properties';

@Injectable({
  providedIn: 'root'
})
export class ConfigurationService extends AbstractConfigurationService {

  constructor() {
    super(hfaConfig as ApplicationProperties);
  }
}
