import {Component, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ProfileData} from '../../shared/types/profile-data';
import {RemoteHelperService} from '../../shared/services/remote-helper/remote-helper.service';
import {AlertsService} from '../../shared/services/alerts/alerts.service';
import {filterProfilesError} from '../../shared/constants/GlobalConstant';

@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.scss']
})
export class ProfilesListComponent implements OnInit {

  searchText = '';
  displayedColumns: string[] = ['image', 'id', 'email', 'name', 'phone', 'address', 'modified', 'view'];
  dataSource: MatTableDataSource<ProfileData>;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router: Router, private remoteHelperService: RemoteHelperService, private alertsService: AlertsService) {
    this.dataSource = new MatTableDataSource([]);
  }

  ngOnInit() {
    this.getProfileData();
  }

  getProfileData(): void {
    this.remoteHelperService.getProfiles()
      .subscribe(profiles => this.updateDataSource(profiles));
  }

  updateDataSource(profiles: ProfileData[]) {
    this.dataSource = new MatTableDataSource(profiles);
    this.dataSource.paginator = this.paginator;
    this.dataSource.paginator._intl.itemsPerPageLabel = 'Rows per page:';
    this.dataSource.sort = this.sort;
    this.dataSource.filterPredicate = (data, filter: string): boolean => {
      return (
        data.first_name.toLowerCase().includes(filter) ||
        data.last_name.toLowerCase().includes(filter) ||
        data.email.toLowerCase().includes(filter)
      );
    };
  }

  applyFilter(filterValue) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
    if (this.dataSource.paginator.length === 0) {
      this.alertsService.add({type: 'error', message: filterProfilesError});
    }
  }

  openProfileDetails(profileData: ProfileData) {
    this.router.navigate(['/profiles', profileData.localid], {state: {data: profileData}}).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
