import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CameraService } from './Services/camera.service';
import { NavbarComponent } from './Navigatie/navbar.component';
import { HomeComponent } from './Home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot([
      { path: "page1", component: HomeComponent},
      { path: "", redirectTo: "page1", pathMatch: "full" },
    ], { useHash: false})
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CameraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
