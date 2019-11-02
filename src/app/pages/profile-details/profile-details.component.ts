import { Component, OnInit } from '@angular/core';
import {ProfileData} from '../../shared/types/profile-data';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-details',
  templateUrl: './profile-details.component.html',
  styleUrls: ['./profile-details.component.scss']
})
export class ProfileDetailsComponent implements OnInit {
  profileDetails: ProfileData;
  activeLink;

  constructor(private router: Router) {
    this.profileDetails = history.state.data;
    this.activeLink = 'profileDetail';
  }

  ngOnInit() {
    if (!this.profileDetails) {
      this.router.navigate(['/profiles']).then( (e) => {
        if (e) {
          console.log('Navigation is successful!');
        } else {
          console.log('Navigation has failed!');
        }
      });
    }
  }

}
