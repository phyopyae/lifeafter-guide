import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lifeafter-food-recipes';
  food_recipes: boolean = true;
  certificates: boolean = false;
  videoguide: boolean = false;

  onGoToFoodRecipes() {
    this.food_recipes = true;
    this.certificates = false;
    this.videoguide = false;
  }

  onGoToCertificates() {
    this.food_recipes = false;
    this.certificates = true;
    this.videoguide = false;
  }

  onGoToVideoGuide() {
    this.food_recipes = false;
    this.certificates = false;
    this.videoguide = true;
  }
}
