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
import { SmallItemComponent } from './features/dashboard/small-item/small-item.component';
import { TrendItemComponent } from './features/dashboard/trend-item/trend-item.component';
import { StartItemComponent } from './features/dashboard/start-item/start-item.component';
import { CurrentItemComponent } from './features/dashboard/current-item/current-item.component';
import { TargetItemComponent } from './features/dashboard/target-item/target-item.component';
import { ChangeItemComponent } from './features/dashboard/change-item/change-item.component';
import { PredictedItemComponent } from './features/dashboard/predicted-item/predicted-item.component';
import { ProgressItemComponent } from './features/dashboard/progress-item/progress-item.component';
import { TimeItemComponent } from './features/dashboard/time-item/time-item.component';
import { CalendarComponent } from './features/dashboard/calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    DataInputComponent,
    DataTableComponent,
    UserProfileComponent,
    NavbarComponent,
    DashboardComponent,
    PaginationComponent,
    SmallItemComponent,
    TrendItemComponent,
    StartItemComponent,
    CurrentItemComponent,
    TargetItemComponent,
    ChangeItemComponent,
    PredictedItemComponent,
    ProgressItemComponent,
    TimeItemComponent,
    CalendarComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
