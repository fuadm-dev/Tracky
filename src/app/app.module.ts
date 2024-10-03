import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './features/calendar/calendar.component';
import { DataInputComponent } from './features/data-input/data-input.component';
import { DataTableComponent } from './features/data-table/data-table.component';
import { UserProfileComponent } from './features/user-profile/user-profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { DashboardItemComponent } from './features/dashboard/dashboard-item/dashboard-item.component';
import { PaginationComponent } from './features/pagination/pagination.component';
import { DatedItemComponent } from './features/dashboard/dated-item/dated-item.component';
import { UnDatedItemComponent } from './features/dashboard/un-dated-item/un-dated-item.component';
import { SmallItemComponent } from './features/dashboard/small-item/small-item.component';
import { TrendItemComponent } from './features/dashboard/trend-item/trend-item.component';
import { StartItemComponent } from './features/dashboard/start-item/start-item.component';
import { CurrentItemComponent } from './features/dashboard/current-item/current-item.component';
import { TargetItemComponent } from './features/dashboard/target-item/target-item.component';
import { ChangeItemComponent } from './features/dashboard/change-item/change-item.component';
import { PredictedItemComponent } from './features/dashboard/predicted-item/predicted-item.component';
import { ProgressItemComponent } from './features/dashboard/progress-item/progress-item.component';
import { TimeItemComponent } from './features/dashboard/time-item/time-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    DataInputComponent,
    DataTableComponent,
    UserProfileComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardItemComponent,
    PaginationComponent,
    DatedItemComponent,
    UnDatedItemComponent,
    SmallItemComponent,
    TrendItemComponent,
    StartItemComponent,
    CurrentItemComponent,
    TargetItemComponent,
    ChangeItemComponent,
    PredictedItemComponent,
    ProgressItemComponent,
    TimeItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
