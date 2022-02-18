import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})

export class FoodComponent implements OnInit {

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