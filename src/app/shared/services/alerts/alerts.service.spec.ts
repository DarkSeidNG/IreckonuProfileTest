import { TestBed } from '@angular/core/testing';

import { AlertsService } from './alerts.service';

describe('AlertsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AlertsService = TestBed.get(AlertsService);
    expect(service).toBeTruthy();
  });

  it('add method should override the existing alert message', () => {
    const service: AlertsService = TestBed.get(AlertsService);
    service.add(alertMock);
    expect(service.alerts[0]).toEqual(alertMock);
  });

  it('clear method should clear data', () => {
    const service: AlertsService = TestBed.get(AlertsService);
    service.add(alertMock);
    service.clear();
    expect(service.alerts.length).toEqual(0);
  });
});

export const alertMock = {
  type: 'error',
  message: 'An error has occured'
};
