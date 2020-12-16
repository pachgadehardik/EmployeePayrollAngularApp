import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    return this.http.get<any>(this.baseURL + "/employee/getEmployee",{
      headers: new HttpHeaders().append("Authorization",localStorage.getItem("token"))
    });
  }

  getById(id):Observable<any> {
    console.log("getByID" +id)
    return this.http.get<any>(this.baseURL+"/employee/getEmployee/"+id,{
      headers:new HttpHeaders().append("Authorization",localStorage.getItem("token"))
    });
  }
  

  post(data): Observable<any> {
    return this.http.post(this.baseURL + "/employee/add", data,{
      headers: new HttpHeaders().append("Authorization",localStorage.getItem("token"))
    })
  }

  login(value):Observable<any> {
    return this.http.post(this.baseURL+"/employee/login",value)
  }

  delete(id):Observable<any>{
    return this.http.get<any>(this.baseURL+"/employee/delete/"+id,{
      headers: new HttpHeaders().append("Authorization",localStorage.getItem("token"))
    })
  }

  update(data):Observable<any>{
    return this.http.put(this.baseURL+"/employee/update/"+data.id,data,{
      headers:new HttpHeaders().append("Authorization",localStorage.getItem("token"))
    });
  }

}
