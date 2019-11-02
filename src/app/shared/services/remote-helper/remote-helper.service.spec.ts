import {async, TestBed} from '@angular/core/testing';

import { RemoteHelperService } from './remote-helper.service';
import {HttpClientModule} from '@angular/common/http';

describe('RemoteHelperService', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    }).compileComponents();
  }));

  it('should be created', () => {
    const service: RemoteHelperService = TestBed.get(RemoteHelperService);
    expect(service).toBeTruthy();
  });
});
