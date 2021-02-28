import { Component, OnInit } from '@angular/core';
import { DisplayCardContent } from '../utils/display-card-content';

@Component({
  selector: 'app-business-section',
  templateUrl: './business-section.component.html',
  styleUrls: ['./business-section.component.scss']
})
export class BusinessSectionComponent implements OnInit {

  cardContent = DisplayCardContent;
  constructor() { }

  ngOnInit(): void {
  }

}
