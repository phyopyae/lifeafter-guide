import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(function() {
      $('#food').DataTable(
        {responsive: true,"lengthMenu": [ 25, 50, 75, 100 ]});
    } );

  }
}
declare var $: any;