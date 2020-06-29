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

  onGoToFoodRecipes() {
    this.food_recipes = true;
    this.certificates = false;
  }

  onGoToCertificates() {
    this.food_recipes = false;
    this.certificates = true;
  }
}
