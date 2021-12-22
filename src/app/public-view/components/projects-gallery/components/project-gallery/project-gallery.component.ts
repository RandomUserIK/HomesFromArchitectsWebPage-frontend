import {registerLocaleData} from '@angular/common';
import localeSk from '@angular/common/locales/sk';
import {Component, Input, OnInit} from '@angular/core';
import {SafeUrl} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Project} from '../../../../../models/project/project.model';
import {HttpClient} from '@angular/common/http';
import {EndpointConfigData} from '../../../../../configuration/models/enpoint-config-data';
import {environment} from '../../../../../../environments/environment';
import {ImageService} from '../../../../../services/image.service';

@Component({
  selector: 'app-project-gallery',
  templateUrl: './project-gallery.component.html',
  styleUrls: ['./project-gallery.component.scss']
})
export class ProjectGalleryComponent implements OnInit {

  @Input() project: Project;

  public image: SafeUrl;
  public isLoading = false;
  public imageUrl: string;
  private resource: EndpointConfigData;

  constructor(private _httpClient: HttpClient,
              private _router: Router,
              private _imageService: ImageService) {
    registerLocaleData(localeSk, 'sk');
    this.resource = environment.providers.resources.find(resource => resource.name === 'image-endpoint');
  }

  ngOnInit(): void {
    this.imageUrl = this._imageService.getImageFullUrl(this.project.titleImage.id.toString());
  }

  public onProjectClick(): void {
    let navigateTo = '';
    switch (this.project.category) {
      case 'INDIVIDUAL':
        navigateTo = 'individualne-projekty';
        break;
      case 'INTERIOR_DESIGN':
        navigateTo = 'interierovy-dizajn';
        break;
      case 'COMMON':
        navigateTo = 'katalogove-projekty';
        break;
    }

    if (navigateTo) {
      this._router.navigate([`${navigateTo}/${this.project.id}`]);
    }
  }

}
