import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { Recommendations } from './recommendations';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {
  private recommenderUrl = environment.recommenderUrl;

  constructor(private http: HttpClient) { }

  public getRecommendations(key: string): Observable<Recommendations> {
    return this.http.get<Recommendations>(`${this.recommenderUrl}/${key}`);
  }

  public getRecommendationsByUnit(key: string): Observable<Recommendations> {
    return this.http.get<Recommendations>(`${this.recommenderUrl}-ppu/${key}`);
  }

  public getRecommendationsByRating(key: string): Observable<Recommendations> {
    return this.http.get<Recommendations>(`${this.recommenderUrl}-rating/${key}`);
  }
}
