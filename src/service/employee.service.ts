import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseURL: string = environment.employeeUrl;
  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.baseURL + "/employee/getEmployee");
  }

  post(data): Observable<any> {
    return this.http.post(this.baseURL + "/employee/add", data)
  }


}
