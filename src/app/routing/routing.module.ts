import { UnloadingComponent } from './../unloading/unloading.component';
import { MyDashboardComponent } from './../my-dashboard/my-dashboard.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path: 'dashboard', component: MyDashboardComponent},
  {path: 'unloading', component: UnloadingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
