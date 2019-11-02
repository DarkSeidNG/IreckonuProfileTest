import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {ProfileData} from '../../types/profile-data';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/operators';
import {fetchApiError, profilesUrl} from '../../constants/GlobalConstant';
import {AlertsService} from '../alerts/alerts.service';
import {AlertData} from '../../types/alert-data';

@Injectable({
  providedIn: 'root'
})
export class RemoteHelperService {

  constructor( private http: HttpClient, private alertsService: AlertsService) { }

  getProfiles(): Observable<ProfileData[]> {
    return this.http.get<ProfileData[]>(profilesUrl)
      .pipe(
        catchError(this.handleError<ProfileData[]>('getProfiles', []))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (): Observable<T> => {
      // Send the error message to the alert service
      this.pushAlert({type: 'error', message: fetchApiError});
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Add the alert message to the list of available alerts */
  private pushAlert(alert: AlertData) {
    this.alertsService.add(alert);
  }
}
