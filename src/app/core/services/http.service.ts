import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class HttpService {
  constructor(
    private httpClient: HttpClient,
  ) {}

  get(url: string, options?): Observable<ArrayBuffer> {
    return this.httpClient.get(url, options);
  }
}