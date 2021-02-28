import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-cards',
  templateUrl: './display-cards.component.html',
  styleUrls: ['./display-cards.component.scss']
})
export class DisplayCardsComponent implements OnInit {

  @Input()
  displayCardsContent;

  constructor() { }

  ngOnInit(): void {
    console.log("dispalycars", this.displayCardsContent)
  }

}
