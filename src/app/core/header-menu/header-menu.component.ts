import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  constructor(
    private dataservide: DataService
  ) { }
  searchText: string= ''

  menuItem: Array<any>= [
    {
      name: "Saved List",
      route: "saved-list",
      icon: "fa-list-ul"
    },
    {
      name: "Saved Filters",
      route: "saved-filters",
      icon: "fa-filter"
    },
    {
      name: "Search History",
      route: "search-history",
      icon: "fa-history"
    },
  ]

  ngOnInit(): void {
  }

  search(){
    this.dataservide.searchText.next(this.searchText)
  }

}
