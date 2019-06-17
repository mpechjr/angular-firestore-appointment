import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddComponent } from './components/add/add.component';
import { ListComponent } from './components/list/list.component';
import { AppointmentDetailComponent } from './components/appointment-detail/appointment-detail.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: ListComponent },
  { path: 'detail/:id', component: AppointmentDetailComponent },
  { path: 'add', component: AddComponent}
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
