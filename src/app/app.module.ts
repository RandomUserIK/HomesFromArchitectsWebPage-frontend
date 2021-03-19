import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AdminModule} from './admin/admin.module';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
