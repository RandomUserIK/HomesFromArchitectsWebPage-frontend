import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './public-view.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';
import {ProjectComponent} from './components/project/project.component';
import {ProjectImageCarouselComponent} from './components/project/components/project-image-carousel/project-image-carousel.component';
import {ProjectInfoComponent} from './components/project/components/project-info/project-info.component';
import {ProjectPriceComparisonComponent} from './components/project/components/project-price-comparison/project-price-comparison.component';
import {ProjectDescriptionComponent} from './components/project/components/project-description/project-description.component';
import {ProjectImageFloorPlanComponent} from './components/project/components/project-image-floor-plan/project-image-floor-plan.component';
import {ProjectBuildingInfoComponent} from './components/project/components/project-building-info/project-building-info.component';
import {ProjectInteriorComponent} from './components/project/components/project-interior/project-interior.component';
import {ProjectChangesComponent} from './components/project/components/project-changes/project-changes.component';
import {ProjectContentComponent} from './components/project/components/project-content/project-content.component';
import {ProjectCustomizedProposalComponent} from './components/project/components/project-customized-proposal/project-customized-proposal.component';
import { ProjectTextSectionComponent } from './components/project/components/project-description/components/project-text-section/project-text-section.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {path: '', component: HomeComponent},
      // {path: 'projekty', component: ProjectsComponent},
      // {path: 'projekty/:id', component: ProjectComponent},
    ]
  },
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent,
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
    ProjectTextSectionComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicViewModule {
}
