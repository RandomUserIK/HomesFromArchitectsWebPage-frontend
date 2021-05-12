import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ImageCarouselModule} from '../../../../../components/image-carousel/image-carousel.module';
import {LightboxModule} from '../../../../../components/lightbox/lightbox.module';
import {LoadingModule} from '../../../../../components/loading/loading.module';
import {NotFoundModule} from '../../../../../components/not-found/not-found.module';
import {ProjectModule} from '../general/project.module';
import {CommonProjectBuildingInfoComponent} from './common-project-building-info/common-project-building-info.component';
import {CommonProjectChangesComponent} from './common-project-changes/common-project-changes.component';
import {CommonProjectFloorPlanComponent} from './common-project-floor-plan/common-project-floor-plan.component';
import {CommonProjectImageCarouselComponent} from './common-project-image-carousel/common-project-image-carousel.component';
import {CommonProjectInfoComponent} from './common-project-info/common-project-info.component';
import {CommonProjectInteriorComponent} from './common-project-interior/common-project-interior.component';
import {CommonProjectPriceComparisonComponent} from './common-project-price-comparison/common-project-price-comparison.component';
import {CommonProjectPriceInfoComponent} from './common-project-price-info/common-project-price-info.component';
import {CommonProjectComponent} from './common-project.component';


@NgModule({
  declarations: [
    CommonProjectComponent,
    CommonProjectBuildingInfoComponent,
    CommonProjectChangesComponent,
    CommonProjectFloorPlanComponent,
    CommonProjectInfoComponent,
    CommonProjectInteriorComponent,
    CommonProjectPriceComparisonComponent,
    CommonProjectPriceInfoComponent,
    CommonProjectImageCarouselComponent
  ],
  imports: [
    CommonModule,
    ProjectModule,
    LightboxModule,
    ImageCarouselModule,
    LoadingModule,
    NotFoundModule
  ]
})
export class CommonProjectModule {
}
