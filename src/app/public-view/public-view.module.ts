import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FooterComponent} from './components/footer/footer.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {ProjectComponent} from './components/project/project.component';
import {ProjectModule} from './components/project/project.module';
import {PublicViewComponent} from './public-view.component';

const routes: Routes = [
  {
    path: '', component: PublicViewComponent, children: [
      {path: '', component: HomeComponent},
      // {path: 'projekty', component: ProjectsComponent},
      {path: 'projekty/:id', component: ProjectComponent},
    ]
  },
]

@NgModule({
  declarations: [
    PublicViewComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    ProjectModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicViewModule {
}
