import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataInputComponent } from './features/data-input/data-input.component';
import { DataTableComponent } from './features/data-table/data-table.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { PaginationComponent } from './features/pagination/pagination.component';
import { TrendItemComponent } from './features/dashboard/trend-item/trend-item.component';
import { CalendarComponent } from './features/dashboard/calendar/calendar.component';
import { BmiComponent } from './features/dashboard/bmi/bmi.component';
import { DashItemComponent } from './features/dashboard/dash-item/dash-item.component';
import { ChangeComponent } from './features/dashboard/change/change.component';
import { ProgressComponent } from './features/dashboard/progress/progress.component';
import { FormsModule } from '@angular/forms';
import { ElapsedTimeComponent } from './features/dashboard/elapsed-time/elapsed-time.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DataTableComponent,
    UserProfileComponent,
    NavbarComponent,
    DashboardComponent,
    PaginationComponent,
    TrendItemComponent,
    CalendarComponent,
    BmiComponent,
    DashItemComponent,
    ChangeComponent,
    ProgressComponent,
    ElapsedTimeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
