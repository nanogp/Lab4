import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttppeliculasService {
  private api_key: string;
  private url = 'https://api.themoviedb.org/3/trending/all/day?api_key=b7c994a64eb2ac142db08a3c294051fa';

  constructor(public http: HttpClient) {
    this.api_key = 'b7c994a64eb2ac142db08a3c294051fa';
  }

  public httpGetO(metodo: string): Observable<any> {
    return this.http.get(this.url)
      .pipe(res => res);
  }

}
