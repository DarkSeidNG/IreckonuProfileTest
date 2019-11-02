import { Injectable } from '@angular/core';
import {AlertData} from '../../types/alert-data';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {
  alerts: AlertData[] = [];

  add(alert: AlertData) {
    this.alerts = [alert];
  }

  clear() {
    this.alerts = [];
  }
}
