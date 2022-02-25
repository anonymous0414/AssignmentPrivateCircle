import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderMenuComponent } from './core/header-menu/header-menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataListComponent } from './dashboard/saved-list/data-list/data-list.component';
import { DataDetailsComponent } from './dashboard/saved-list/data-details/data-details.component';
import { NotAvailableComponent } from './core/not-available/not-available.component';
import { SavedListComponent } from './dashboard/saved-list/saved-list.component';
import { SearchFilterPipe } from './common/pipe/searchFilter.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderMenuComponent,
    DashboardComponent,
    DataListComponent,
    DataDetailsComponent,
    NotAvailableComponent,
    SavedListComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
