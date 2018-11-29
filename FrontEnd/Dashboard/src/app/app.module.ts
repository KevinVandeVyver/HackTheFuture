import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraService } from './Services/camera.service';
import { NavbarComponent } from './Navigatie/navbar.component';
import { HomeComponent } from './Home/home.component';
import { Page2Component } from './page2/page2.component';
import { HttpClientModule } from '@angular/common/http';
import { Http, HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    Page2Component,
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    //HttpClientModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "page1", component: HomeComponent},
      { path: "page2", component: Page2Component},
      { path: "", redirectTo: "page1", pathMatch: "full" },
    ], { useHash: false})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CameraService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
