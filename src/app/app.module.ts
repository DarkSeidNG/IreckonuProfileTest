import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './shared/components/containers/app-container/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/components/containers/header/header.component';
import { BodyComponent } from './shared/components/containers/body/body.component';
import { ProfileDetailsComponent } from './pages/profile-details/profile-details.component';
import { ProfilesListComponent } from './pages/profiles-list/profiles-list.component';
import {MatIconModule, MatPaginatorModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {FormsModule} from '@angular/forms';
import { PercentageChartComponent } from './shared/components/custom/percentage-chart/percentage-chart.component';
import { AlertsComponent } from './shared/components/layouts/alerts/alerts.component';
import { QuickFactsComponent } from './shared/components/layouts/quick-facts/quick-facts.component';
import { ProfileDetailTabComponent } from './shared/components/layouts/profile-detail-tab/profile-detail-tab.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    ProfileDetailsComponent,
    ProfilesListComponent,
    PercentageChartComponent,
    AlertsComponent,
    QuickFactsComponent,
    ProfileDetailTabComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
