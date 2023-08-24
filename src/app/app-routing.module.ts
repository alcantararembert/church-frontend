import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { FaithfulComponent } from './domain/faithful/faithful.component';

const routes: Routes = [
  {path : 'dashboard', component: DashboardComponent},
  {path : 'faithful', component: FaithfulComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
