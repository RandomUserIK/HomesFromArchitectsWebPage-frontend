import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {LightboxModule} from 'ngx-lightbox';
import {ProjectBuildingInfoComponent} from './components/project-building-info/project-building-info.component';
import {ProjectChangesComponent} from './components/project-changes/project-changes.component';
import {ProjectContentComponent} from './components/project-content/project-content.component';
import {ProjectCustomizedProposalComponent} from './components/project-customized-proposal/project-customized-proposal.component';
import {ProjectTextSectionComponent} from './components/project-description/components/project-text-section/project-text-section.component';
import {ProjectDescriptionComponent} from './components/project-description/project-description.component';
import {ProjectImageCarouselComponent} from './components/project-image-carousel/project-image-carousel.component';
import {ProjectImageFloorPlanComponent} from './components/project-image-floor-plan/project-image-floor-plan.component';
import {ProjectInfoComponent} from './components/project-info/project-info.component';
import {ProjectInteriorComponent} from './components/project-interior/project-interior.component';
import {ProjectPriceComparisonComponent} from './components/project-price-comparison/project-price-comparison.component';
import {ProjectPriceInfoComponent} from './components/project-price-info/project-price-info.component';
import {ProjectComponent} from './project.component';

@NgModule({
  declarations: [
    ProjectComponent,
    ProjectImageCarouselComponent,
    ProjectInfoComponent,
    ProjectPriceComparisonComponent,
    ProjectDescriptionComponent,
    ProjectImageFloorPlanComponent,
    ProjectBuildingInfoComponent,
    ProjectInteriorComponent,
    ProjectChangesComponent,
    ProjectContentComponent,
    ProjectCustomizedProposalComponent,
    ProjectTextSectionComponent,
    ProjectPriceInfoComponent
  ],
  exports: [
    ProjectComponent
  ],
  imports: [
    CommonModule,
    LightboxModule
  ]
})
export class ProjectModule {

}
