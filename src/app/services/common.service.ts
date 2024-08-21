import { Generic } from '../models/generic';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

export class CommonService<E extends Generic> {

  protected baseEndPoint: string = "";

  protected headers: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor (protected http: HttpClient) {}

  public getByPage(page: string, size: string): Observable<any> {
    const params = new HttpParams();
    params.set('page', page);
    params.set('size', size);
    return this.http.get<any>(`${this.baseEndPoint}/pagina`, { params: params });
  }

  public get(): Observable<E[]> {
    return this.http.get<E[]>(this.baseEndPoint);
  }

  public getById(id: number): Observable<E> {
    return this.http.get<E>(`${this.baseEndPoint}/${id}`)
  }

  public post(e: E): Observable<E> {
    return this.http.post<E>(this.baseEndPoint, e, { headers: this.headers })
  }

  public put(e: E): Observable<E> {
    return this.http.put<E>(`${this.baseEndPoint}/${e.id}`, e, { headers: this.headers });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndPoint}/${id}`, { headers: this.headers });
  }
  
}
