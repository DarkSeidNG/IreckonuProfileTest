import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickFactsComponent } from './quick-facts.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProfileDetailsComponent} from '../../../../pages/profile-details/profile-details.component';
import {ProfilesListComponent} from '../../../../pages/profiles-list/profiles-list.component';
import {HeaderComponent} from '../../containers/header/header.component';
import {BodyComponent} from '../../containers/body/body.component';
import {ProfileDetailTabComponent} from '../profile-detail-tab/profile-detail-tab.component';
import {AlertsComponent} from '../alerts/alerts.component';
import {PercentageChartComponent} from '../../custom/percentage-chart/percentage-chart.component';

describe('QuickFactsComponent', () => {
  let component: QuickFactsComponent;
  let fixture: ComponentFixture<QuickFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
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
      declarations: [
        ProfileDetailsComponent,
        ProfilesListComponent,
        HeaderComponent,
        BodyComponent,
        QuickFactsComponent,
        ProfileDetailTabComponent,
        AlertsComponent,
        PercentageChartComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
