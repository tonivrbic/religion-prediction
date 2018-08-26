import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { StatsComponent } from './stats/stats.component';
import { PredictComponent } from './predict/predict.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'predict',
    component: PredictComponent
  },
  {
    component: HomeComponent,
    path: 'my-predictions'
  },
  {
    component: AboutComponent,
    path: 'about'
  },
  {
    path: '**',
    redirectTo: 'predict'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
