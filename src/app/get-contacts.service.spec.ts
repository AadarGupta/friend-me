import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { RawContact } from './model/rawContact';
import { Contact } from './model/contact';

import { GetContactsService } from './get-contacts.service';

describe('GetContactsService', () => {
  let service: GetContactsService;
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(GetContactsService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return data', () => {
    service.getData(1).subscribe((data: any) => {
      expect(data).toBeTruthy();
    });
  });
});
