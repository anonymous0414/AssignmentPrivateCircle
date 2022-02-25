import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/common/services/data.service';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {

  dataList: Array<any>=[]

  searchItem: string= ''

  constructor(
    private dataService: DataService
  ) { 
    this.dataList= dataService.dataList
    dataService.searchText.subscribe(st=>{
      this.searchItem= st
    })
  }

  ngOnInit(): void {
  }

  getFormattedDate(date: string){
    var d= new Date(date);
    var months= ['Jan','Feb','Mar','Arp','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
    return `${months[d.getMonth()]}  ${d.getDate()>9?'':0}${d.getDate()}`
  }

  openDetails(data: any){
    this.dataService.currentSelectedDetails.next(data.details)
  }

}
