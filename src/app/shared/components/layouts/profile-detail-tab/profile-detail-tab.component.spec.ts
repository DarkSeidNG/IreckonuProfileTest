import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailTabComponent } from './profile-detail-tab.component';
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
import {QuickFactsComponent} from '../quick-facts/quick-facts.component';
import {AlertsComponent} from '../alerts/alerts.component';
import {PercentageChartComponent} from '../../custom/percentage-chart/percentage-chart.component';

describe('ProfileDetailTabComponent', () => {
  let component: ProfileDetailTabComponent;
  let fixture: ComponentFixture<ProfileDetailTabComponent>;

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
    fixture = TestBed.createComponent(ProfileDetailTabComponent);
    component = fixture.componentInstance;
    component.profile = {
      address: '6a Abe Street',
      birthdate: '2009-18-02',
      email: 'dark@gmail.com',
      email2: '',
      first_name: 'Chris',
      gender: 'Male',
      last_name: 'Orji',
      localid: 234,
      loyalty_member_id: '226',
      modified: '2019-02-19',
      phone: '223-322-3232',
      photo: '',
      prefix: 'Mr',
      suffix: 'Dr'
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
