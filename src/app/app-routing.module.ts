import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotAvailableComponent } from './core/not-available/not-available.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SavedListComponent } from './dashboard/saved-list/saved-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        redirectTo: 'saved-list',
        pathMatch: 'full'
      },
      {
        path: 'saved-list',
        component: SavedListComponent
      },
      {
        path: 'saved-filters',
        component: NotAvailableComponent
      },
      {
        path: 'search-history',
        component: NotAvailableComponent
      }
    ]
  },
  {
    path: '**',
    component: NotAvailableComponent 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
