import { Component, OnInit } from '@angular/core';
import {SalesPerson} from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrapped.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  salesPersonList : SalesPerson[] = [
    new SalesPerson("Kesavan", "Murali", "kesavanmu@gmail.com", 22),
    new SalesPerson("Keshav", "M", "k7rrrr@gmail.com", 11)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
