import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cr-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // TODO:
  // optmize this.. animate... 
  // and if possible use routerLink 
  goTo(location: string): void {
    window.location.hash = location;
  }

}
