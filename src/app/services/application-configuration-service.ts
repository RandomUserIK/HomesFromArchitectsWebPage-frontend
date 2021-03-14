import {Injectable} from '@angular/core';
import {ApplicationProperties} from '../interfaces/application-properties';



@Injectable({
  providedIn: 'root'
})
export abstract class AbstractConfigurationService{

  protected constructor(protected configuration: ApplicationProperties) {
  }

  public getConfigurationSubtree(pathSegments: Array<string>): any | undefined {
    let root = this.configuration;
    for (const segment of pathSegments) {
      if (root[segment] === undefined) {
        return undefined;
      }
      root = root[segment];
    }
    return AbstractConfigurationService.deepCopy(root);
  }

  public get(): ApplicationProperties {
    return this.createConfigurationCopy();
  }

  private createConfigurationCopy(): any {
    return AbstractConfigurationService.deepCopy(this.configuration);
  }

  private static deepCopy(obj: object): object {
    return JSON.parse(JSON.stringify(obj));
  }

}
