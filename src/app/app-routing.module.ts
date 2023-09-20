import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './domain/dashboard/dashboard.component';
import { FaithfulComponent } from './domain/faithful/faithful.component';

const routes: Routes = [
  { path: 'faithful', component: FaithfulComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/faithful', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
