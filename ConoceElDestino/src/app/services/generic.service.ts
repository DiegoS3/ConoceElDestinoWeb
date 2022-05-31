import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GenericService {
  constructor(private http: HttpClient) { }

  httpGet(
    url: string,
    params: { [key: string]: string | number } = {},
    additionalOptions = {}
  ): Observable<any> {
    let options: HttpParams = new HttpParams();

    for (const param of Object.keys(params)) {
      options = options.set(param, params[param]);
    }

    return this.http.get(`${environment.apiUrl}${url}`, {
      params: options,
      observe: 'response',
      ...additionalOptions,
    });
  }

  httpDownloadFile(
    url: string,
    params: { [key: string]: any } = {}
  ): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, params, {
      responseType: 'blob',
      observe: 'response',
    });
  }

  httpDelete(
    url: string,
    params: { [key: string]: string } = {}
  ): Observable<any> {
    let options: HttpParams = new HttpParams();

    for (const param of Object.keys(params)) {
      options = options.set(param, params[param]);
    }

    return this.http.delete(`${environment.apiUrl}${url}`, {
      params: options,
      observe: 'response',
    });
  }

  httpPost(url: string, params: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, params);
  }

  httpPostBody(url: string, params: any, body: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}${url}`, body, params);
  }

  httpPostFile(url: string, formData: FormData): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');

    return this.http.post(`${environment.apiUrl}${url}`, formData, {
      headers,
      responseType: 'blob',
      observe: 'response',
    });
  }

  httpPut(url: string, params: any = {}): Observable<any> {
    return this.http.put(`${environment.apiUrl}${url}`, params);
  }


}
