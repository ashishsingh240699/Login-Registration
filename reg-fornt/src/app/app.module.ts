import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatButtonModule} from '@angular/material/button';
import { BackendService } from './service/backend.service';

import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { NavbarComponent } from './components/navbar/navbar/navbar.component';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { ViewdataComponent } from './components/viewdata/viewdata.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginPageComponent,
    NavbarComponent,
    ViewdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    
    

    

  ],
  providers: [MatSnackBar,BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
