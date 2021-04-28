import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {NgbCarouselModule} from '@ng-bootstrap/ng-bootstrap';
import {ImageCarouselModule} from '../../../../../components/image-carousel/image-carousel.module';
import {LightboxModule} from '../../../../../components/lightbox/lightbox.module';
import {ProjectContentComponent} from './project-content/project-content.component';
import {ProjectCustomizedProposalComponent} from './project-customized-proposal/project-customized-proposal.component';
import {ProjectTextSectionComponent} from './project-description/components/project-text-section/project-text-section.component';
import {ProjectDescriptionComponent} from './project-description/project-description.component';
import {ProjectNotFoundComponent} from './project-not-found/project-not-found.component';
import {ProjectPriceInfoComponent} from './project-price-info/project-price-info.component';
import {ProjectComponent} from './project.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectDescriptionComponent,
    ProjectContentComponent,
    ProjectCustomizedProposalComponent,
    ProjectTextSectionComponent,
    ProjectPriceInfoComponent,
    ProjectNotFoundComponent
  ],
  exports: [
    ProjectDescriptionComponent,
    ProjectContentComponent,
    ProjectCustomizedProposalComponent,
    ProjectPriceInfoComponent,
    ProjectNotFoundComponent
  ],
  imports: [
    CommonModule,
    LightboxModule,
    ImageCarouselModule,
    NgbCarouselModule
  ]
})
export class ProjectModule {
}
