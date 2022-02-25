import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  searchText: BehaviorSubject<string>= new BehaviorSubject<string>('')
  currentSelectedDetails: BehaviorSubject<any>= new BehaviorSubject<any>([])

  dataList: Array<any>= [
    {
      date: '',
      isProcessing: true,
      listName: 'Competitive Interlligence',
      noOfEntittes: 0,
      details: []
    },
    {
      date: '',
      isProcessing: true,
      listName: 'My Vendors',
      noOfEntittes: 0,
      details: []
    },
    {
      date: '',
      isProcessing: true,
      listName: 'My Customers',
      noOfEntittes: 0,
      details: []
    },
    {
      date: 'Fri Jul 23 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Test_30_Result',
      noOfEntittes: 28,
      details: [
        'Bundl Technologies Private Limited (Swiggy)',
        'Hector Beverages Private Limited',
        'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd.',
        'Infosys Limited',
        'Think & Learn Private Limited',
        'Delhivery Private Limited',
        'Wow Momo Foods Private Limited',
        'Rebel Foods Private Limited (Faasos)',
        'Lendigkart Technologied Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited(Private Circle',
        'Gala Precision Engineering Private Limited',
        'Balaji Wafers Private Limited',
        'Sangeetha Mobiles Private Limited',
        'Vodafone Idea Limited',
        'Vakrangee Limited',
        'Rebel Foods Private Limited (Faasos)',
        'Lendigkart Technologied Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited(Private Circle',
        'Gala Precision Engineering Private Limited',
        'Balaji Wafers Private Limited',
        'Sangeetha Mobiles Private Limited',
        'Vodafone Idea Limited',
        'Vakrangee Limited',
      ]
    },
    {
      date: 'Mon Jun 28 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'To_Index',
      noOfEntittes: 100,
      details: [
        'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd.',
        'Infosys Limited',
        'Think & Learn Private Limited',
        'Delhivery Private Limited',
        'Wow Momo Foods Private Limited',
        'Rebel Foods Private Limited (Faasos)',
        'Lendigkart Technologied Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited(Private Circle',
      ]
    },
    {
      date: 'Sat Apr 10 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'KPMG Request Companies - Listed Set_Prasad Kumar',
      noOfEntittes: 34,
      details: [
        'Rebel Foods Private Limited (Faasos)',
        'Lendigkart Technologied Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited(Private Circle',
        'Puma Sports India Private Limited',
        'Dewan Housing Finance Corporation Ltd.',
        'Infosys Limited',
        'Think & Learn Private Limited',
        'Delhivery Private Limited',
        'Wow Momo Foods Private Limited',
        'Rebel Foods Private Limited (Faasos)',
        'Lendigkart Technologied Private Limited',
        'ID Fresh Food(India) Private Limited',
        'Bharathiasha Technologies Private Limited(Private Circle',
      ]
    },
    {
      date: 'Fri Mar 12 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Error Case-LTB TO EBITDA Blank_Prasad Kumar',
      noOfEntittes: 24,
      details: []
    },
    {
      date: 'Mon Dec 14 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Two Companies',
      noOfEntittes: 2,
      details: []
    },
    {
      date: 'Sun Nov 01 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Custom',
      noOfEntittes: 30,
      details: []
    },
    {
      date: 'Thu Oct 29 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Mumbai',
      noOfEntittes: 3,
      details: []
    },
    {
      date: 'Fri Mar 12 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Error Case-LTB TO EBITDA Blank_Prasad Kumar',
      noOfEntittes: 24,
      details: []
    },
    {
      date: 'Mon Dec 14 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Two Companies',
      noOfEntittes: 2,
      details: []
    },
    {
      date: 'Sun Nov 01 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Custom',
      noOfEntittes: 30,
      details: []
    },
    {
      date: 'Thu Oct 29 2020 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Mumbai',
      noOfEntittes: 3,
      details: []
    },
    {
      date: 'Fri Mar 12 2021 00:00:00 GMT+0530',
      isProcessing: false,
      listName: 'Error Case-LTB TO EBITDA Blank_Prasad Kumar',
      noOfEntittes: 24,
      details: []
    }
  ]

}
