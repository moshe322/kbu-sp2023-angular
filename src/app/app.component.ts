import { Component } from '@angular/core';
import { RecommendationService } from './recommendation.service';
import { Recommendations } from './recommendations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-recommender-system';
  recommendations! : Recommendations;

  constructor(private recommendationService: RecommendationService){}

  ngOnInit(): void {
    this.recommendationService.getRecommendations("100")
      .subscribe(
        (data: Recommendations) => {
          this.recommendations = data;
        },
        (error) => {
          console.error(error);
        }
      );
  }
}
