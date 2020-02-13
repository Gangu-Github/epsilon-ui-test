import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-ui-test',
  templateUrl: './ui-test.component.html',
  styleUrls: ['./ui-test.component.scss']
})
export class UiTestComponent implements OnInit {
  tableHeader: Object[];
  tableData: Object[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.tableHeader = [
      { field: 'name', header: 'Product Name' },
      { field: 'price', header: 'Price' },
      { field: 'category', header: 'Category' }
    ];
    this.dataService.sendGetRequest().subscribe((data: any[]) => {
      this.tableData = data;
    });
  }

}
