import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selected-details',
  templateUrl: './selected-details.component.html',
  styleUrls: ['./selected-details.component.sass']
})
export class SelectedDetailsComponent implements OnInit {
  private list:["pavi","lal"];
  constructor() { }

  ngOnInit() {
  }

}
