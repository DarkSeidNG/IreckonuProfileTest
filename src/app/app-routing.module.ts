import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfilesListComponent} from './pages/profiles-list/profiles-list.component';
import {ProfileDetailsComponent} from './pages/profile-details/profile-details.component';


const routes: Routes = [
  {path: '',  redirectTo: '/profiles', pathMatch: 'full'},
  {path: 'profiles', component: ProfilesListComponent},
  {path: 'profiles/:id', component: ProfileDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
