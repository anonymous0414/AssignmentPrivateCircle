import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-data-details',
  templateUrl: './data-details.component.html',
  styleUrls: ['./data-details.component.scss']
})
export class DataDetailsComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  details: Array<any>= []

  ngOnInit(): void {
    this.dataService.currentSelectedDetails.subscribe(res=>{
      this.details= res
    })
  }

}
