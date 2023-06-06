import { Component, OnInit, ViewChild } from '@angular/core';
import RecipesJson from './recipes.json';

interface RECIPES {
    no: Number;
    name: String;
    ingredient1: String;
    ingredient2: String;
    ingredient3: String;
    ingredient4: String;
    effects: String;
}

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {
  Recipes: RECIPES[] = RecipesJson;
  constructor() { }

  ngOnInit(): void {
    $(document).ready(function () {
      $('#food').DataTable(
        { 
          dom: 'Blrftip',
          responsive: true, 
          "lengthMenu": [25, 50, 75, 100],
          buttons: [ {
            extend: 'excelHtml5',
            autoFilter: true,
            sheetName: 'Exported data'
        } ]
        }
      );
    });

  }
}
declare var $: any;