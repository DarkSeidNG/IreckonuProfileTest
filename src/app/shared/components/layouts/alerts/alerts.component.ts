import { Component, OnInit } from '@angular/core';
import {AlertsService} from '../../../services/alerts/alerts.service';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  constructor(public alertsService: AlertsService) { }

  ngOnInit() {
  }

}
