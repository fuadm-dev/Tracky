import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { DataInputComponent } from './features/data-input/data-input.component';
import { DataTableComponent } from './features/data-table/data-table.component';
import { DataGraphComponent } from './features/data-graph/data-graph.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardItemComponent } from './features/dashboard/dashboard-item/dashboard-item.component';
import { PaginationComponent } from './features/pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DataInputComponent,
    DataTableComponent,
    DataGraphComponent,
    UserProfileComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardItemComponent,
    PaginationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
