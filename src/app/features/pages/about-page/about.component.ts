import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public arrayItems = [
    {id: 1, title: "title1", checked: true},
    {id: 2, title: "title2", checked: false},
    {id: 3, title: "title3", checked: true},
    {id: 4, title: "title4", checked: false},
    {id: 5, title: "title5", checked: false}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public CheckboxesChecked(count) {
     console.log(count)
  }

}
