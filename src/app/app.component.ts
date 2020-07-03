import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'lifeafter-guide';
  food_recipes: boolean = true;
  certificates: boolean = false;
  videoguide: boolean = false;
  newbie: boolean = false;

  constructor(private titleService: Title, private metaService: Meta) {}

  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.metaService.addTags([
      {name: 'keywords', content: 'LifeAfter, Guide'},
      {name: 'description', content: 'LifeAfter Mobile/PC Game Guide And Reference'},
      {name: 'robots', content: 'index, follow'}
    ]);
  }

  onGoToFoodRecipes() {
    this.food_recipes = true;
    this.certificates = false;
    this.videoguide = false;
    this.newbie = false;
  }

  onGoToCertificates() {
    this.food_recipes = false;
    this.certificates = true;
    this.videoguide = false;
    this.newbie = false;
  }

  onGoToVideoGuide() {
    this.food_recipes = false;
    this.certificates = false;
    this.videoguide = true;
    this.newbie = false;
  }

  onGoToNewbieGuide() {
    this.food_recipes = false;
    this.certificates = false;
    this.videoguide = false;
    this.newbie = true;
  }
}
