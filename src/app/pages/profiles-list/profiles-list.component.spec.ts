import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilesListComponent } from './profiles-list.component';
import {RouterTestingModule} from '@angular/router/testing';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../../app-routing.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule, MatPaginatorModule, MatProgressSpinnerModule, MatSortModule, MatTableModule, MatTabsModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {ProfileDetailsComponent} from '../profile-details/profile-details.component';
import {HeaderComponent} from '../../shared/components/containers/header/header.component';
import {BodyComponent} from '../../shared/components/containers/body/body.component';
import {QuickFactsComponent} from '../../shared/components/layouts/quick-facts/quick-facts.component';
import {ProfileDetailTabComponent} from '../../shared/components/layouts/profile-detail-tab/profile-detail-tab.component';
import {AlertsComponent} from '../../shared/components/layouts/alerts/alerts.component';
import {PercentageChartComponent} from '../../shared/components/custom/percentage-chart/percentage-chart.component';

describe('ProfilesListComponent', () => {
  let component: ProfilesListComponent;
  let fixture: ComponentFixture<ProfilesListComponent>;

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
    fixture = TestBed.createComponent(ProfilesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain the Profiles header title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.header-title').textContent).toContain('Profiles');
  });

  it('search should return empty result', () => {
    component.searchText = '9323bndbyd32by3b32y3b2u23b y32bb3u';
    const compiled = fixture.debugElement.nativeElement;
    compiled.querySelector('.search-button').click();
    expect(component.dataSource.paginator).toBeUndefined();
  });
});
