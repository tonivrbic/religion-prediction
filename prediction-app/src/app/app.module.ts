import 'chart.js';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatTabsModule,
  MatMenuModule,
  MatCheckboxModule,
  MatSelectModule,
  MatDialogModule,
  MatSnackBarModule
} from '@angular/material';
import { HomeComponent } from './home/home.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { StatsComponent } from './stats/stats.component';
import { PredictComponent } from './predict/predict.component';
import { BarchartComponent } from './barchart/barchart.component';
import { PredictionDialogComponent } from './prediction-dialog/prediction-dialog.component';
import { UnauthorizedInterceptor } from './auth/unauthorized.interceptor';
@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    LoginComponent,
    StatsComponent,
    PredictComponent,
    BarchartComponent,
    PredictionDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ChartsModule,
    LayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatTabsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatMenuModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RouterModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UnauthorizedInterceptor,
      multi: true
    }
  ],
  entryComponents: [PredictionDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
