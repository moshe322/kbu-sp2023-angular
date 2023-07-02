import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Recommendations } from './recommendations';

@Injectable({
  providedIn: 'root'
})
export class SuggestedService {
  private suggestedProductsUrl = environment.suggestedProductsUrl;

  constructor(private http: HttpClient) { }

  public getSuggestedProducts(key: string): Observable<Recommendations> {
    return this.http.get<Recommendations>(`${this.suggestedProductsUrl}/${key}`);
  }

}
