import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileDetailsComponent } from './profile-details.component';
import {RouterTestingModule} from '@angular/router/testing';
import {MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProfilesListComponent} from '../profiles-list/profiles-list.component';
import {HeaderComponent} from '../../shared/components/containers/header/header.component';
import {BodyComponent} from '../../shared/components/containers/body/body.component';
import {QuickFactsComponent} from '../../shared/components/layouts/quick-facts/quick-facts.component';
import {ProfileDetailTabComponent} from '../../shared/components/layouts/profile-detail-tab/profile-detail-tab.component';
import {AlertsComponent} from '../../shared/components/layouts/alerts/alerts.component';
import {PercentageChartComponent} from '../../shared/components/custom/percentage-chart/percentage-chart.component';
import {AppComponent} from '../../shared/components/containers/app-container/app.component';
import {TelephoneCustomPipe} from '../../shared/pipes/telephone/telephone-custom.pipe';
import {CustomPipe} from '../../shared/pipes/custom/custom.pipe';

describe('ProfileDetailsComponent', () => {
  let component: ProfileDetailsComponent;
  let fixture: ComponentFixture<ProfileDetailsComponent>;

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
        AppComponent,
        ProfileDetailsComponent,
        ProfilesListComponent,
        HeaderComponent,
        BodyComponent,
        QuickFactsComponent,
        ProfileDetailTabComponent,
        AlertsComponent,
        PercentageChartComponent,
        TelephoneCustomPipe,
        CustomPipe,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    history.pushState({data: profileDataMock}, 'data');
    fixture = TestBed.createComponent(ProfileDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have profile details passed', () => {
    expect(component.profileDetails).toEqual(profileDataMock);
  });

  it('has profileDetail as the default selected tab link', () => {
    expect(component.activeLink).toEqual('profileDetail');
  });
});

export const profileDataMock = {
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
