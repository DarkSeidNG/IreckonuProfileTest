import {Component, Input, OnInit} from '@angular/core';
import {ProfileData} from '../../../types/profile-data';

@Component({
  selector: 'app-profile-detail-tab',
  templateUrl: './profile-detail-tab.component.html',
  styleUrls: ['./profile-detail-tab.component.scss']
})
export class ProfileDetailTabComponent implements OnInit {
  @Input() profile: ProfileData;
  constructor() { }

  ngOnInit() {
  }

}
