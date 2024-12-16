import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobofferComponent } from './joboffer/joboffer.component';
import { JobofferlistComponent } from './jobofferlist/jobofferlist.component';
import { HomeComponent } from './home/home.component';
import {Routing} from './routing/routing.module';



@NgModule({
  declarations: [
      AppComponent
  ],
  imports: [
    Routing,
    JobofferComponent,
    JobofferlistComponent,
    BrowserModule,
    HttpClientModule,
    HomeComponent,
    RouterOutlet

],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}







