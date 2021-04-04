import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PublicViewComponent} from './public-view.component';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {HomeModule} from './components/home/home.module';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
    RouterModule.forChild(routes)
  ]
})
export class PublicViewModule {
}
