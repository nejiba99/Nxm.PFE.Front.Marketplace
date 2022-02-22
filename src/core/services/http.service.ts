import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment.prod";
import { IApplication } from "../entities/Application";
import { IMenu } from "../entities/Menu";

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  
  constructor(private httpClient: HttpClient) {}
  //CRUD APPLICATION
  create(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiHost}${environment.apiUrl}${endPoint}`, data);
  }
  getAll(endPoint: string): Observable<any>{
    return this.httpClient.get(`${environment.apiHost}${environment.apiUrl}${endPoint}`);
  }
  delete(endPoint:string,id: string ){

    return this.httpClient.delete<any>(`${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`)
  }

  update(endPoint: string, id: string, data: any): Observable<any> {
    return this.httpClient.patch(`${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`,data);
  }
  findById(endPoint: string, id: string): Observable<any> {

    return this.httpClient.get(
      `${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`
    );
}
  //CRUD MENU
  createmenu(endPoint: string, data: any): Observable<any> {
    return this.httpClient.post(`${environment.apiHost}${environment.apiUrl}${endPoint}`, data);
  }
  getAllmenus(endPoint: string): Observable<any>{
    return this.httpClient.get(`${environment.apiHost}${environment.apiUrl}${endPoint}`);
  }
  deletemenu(endPoint:string,id: string) {

    return this.httpClient.delete<any>(`${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`)
  }
  updatemenu(endPoint: string, id: string, data: any):Observable<any>{
    return this.httpClient.patch<any>(`${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`, data);
  }
  findByIdMenu(endPoint: string, id: string): Observable<any> {

    return this.httpClient.get(
      `${environment.apiHost}${environment.apiUrl}${endPoint}/${id}`
    );
}
}
