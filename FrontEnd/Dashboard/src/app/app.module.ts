import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule} from 'angular-bootstrap-md';

import { AppComponent } from './app.component';
import { CameraService } from './Services/camera.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [
    CameraService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
