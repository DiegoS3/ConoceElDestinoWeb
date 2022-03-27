import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoint } from 'src/environments/apis/apis';
import { map, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) { }

  postMessage(formData: any): Observable<any> {
    return this.http.post(endpoint.SEND_MAIL, formData);
  }

}
