import {
  Component,
  ViewChild,
  AfterViewInit,
} from '@angular/core';

import { SohoDataGridComponent } from '@infor/sohoxi-angular';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DataGridDemoService } from './datagrid-demo.service';

@Component({
  selector: 'soho-datagrid-empty-message-demo',
  templateUrl: './datagrid-empty-message.demo.html',
  providers: [ DataGridDemoService ]
})
export class DataGridEmptyMessageDemoComponent implements AfterViewInit {
  @ViewChild(SohoDataGridComponent) dataGrid: SohoDataGridComponent;

  public hasData: boolean;

  private DATA: any[] = [
    {
      id: 0,
      productId: 214220,
      productName: 'Compressor 1',
      activity: 'Assemble Paint',
      quantity: 1,
      price: 210.99,
      orderDate: '2015-01-01T06:00:00.000Z',
      action: 'Action',
      favorite: true
    },
    {
      id: 1,
      productId: 214221,
      productName: 'Compressor 2',
      activity: 'Assemble Paint',
      quantity: 1.5,
      price: 209.99,
      status: 'Late',
      orderDate: '2015-01-02T06:00:00.000Z',
      action: 'Action',
      favorite: false
    },
    {
      id: 2,
      productId: 214222,
      productName: 'Compressor 3',
      activity: 'Assemble Paint',
      quantity: 2,
      price: 208.99,
      status: 'Active',
      orderDate: '2015-01-03T06:00:00.000Z',
      action: 'Action',
      favorite: true
    },
    {
      id: 3,
      productId: 214223,
      productName: 'Compressor 4',
      activity: 'Assemble Paint',
      quantity: 2.5,
      price: 207.99,
      status: 'Inactive',
      orderDate: '2015-01-04T06:00:00.000Z',
      action: 'Action',
      favorite: true
    },
    {
      id: 4,
      productId: 214224,
      productName: 'Compressor 5',
      activity: 'Assemble Paint',
      quantity: 3,
      price: 206.99,
      status: 'Inactive',
      orderDate: '2015-01-05T06:00:00.000Z',
      action: 'Action',
      favorite: false
    },
    {
      id: 5,
      productId: 214225,
      productName: 'Compressor 6',
      activity: 'Assemble Paint',
      quantity: 3.5,
      price: 205.99,
      status: 'Inactive',
      orderDate: '2015-01-06T06:00:00.000Z',
      action: 'Action',
      favorite: false
    },
    {
      id: 6,
      productId: 214226,
      productName: 'Compressor 7',
      activity: 'Assemble Paint',
      quantity: 4,
      price: 204.99,
      status: 'On Hold',
      orderDate: '2015-01-07T06:00:00.000Z',
      action: 'Action',
      favorite: true
    },
    {
      id: 7,
      productId: 214227,
      productName: 'Compressor 8',
      activity: 'Assemble Paint',
      quantity: 4.5,
      price: 203.99,
      status: 'On Hold',
      orderDate: '2015-01-08T06:00:00.000Z',
      action: 'Action',
      favorite: true
    },
    {
      id: 8,
      productId: 214228,
      productName: 'Compressor 9',
      activity: 'Assemble Paint',
      quantity: 5,
      price: 202.99,
      status: 'On Hold',
      orderDate: '2015-01-09T06:00:00.000Z',
      action: 'Action',
      favorite: false
    },
    {
      id: 9,
      productId: 214229,
      productName: 'Compressor 10',
      activity: 'Assemble Paint',
      quantity: 5.5,
      price: 201.99,
      status: 'On Hold',
      orderDate: '2015-01-10T06:00:00.000Z',
      action: 'Action',
      favorite: false
    }
  ];

  emptyMessage: SohoDataGridEmptyMessageOptions = {
    title: 'Server Error',
    info: 'The target server returned an error',
    icon: 'icon-empty-error-loading', // needs to be the full SVG name
    button: { text: 'Retry', click: () => { alert('try again'); } },
    click: () => { alert('click 2'); }
  };

  get data() {
   return this.hasData ? this.service.data : [];
  }

  constructor(private service: DataGridDemoService) { }

  ngAfterViewInit() {
  }

  public get columns(): SohoDataGridColumn[] {
    return this.service.getColumns();
  }

  makeChange() {
    this.hasData = !this.hasData;
  }

  /**
   * Sets the empty message to a different one from the default, or
   * the one defined in the markup.
   */
  changeMessage() {
    this.dataGrid.emptyMessage = {
      title: 'No Matches',
      info: 'No products found that match your query',
      icon: 'icon-empty-no-orders', // needs to be the full SVG name
      button: { text: 'Retry', click: () => { alert('try again'); } },
      click: () => { alert('click 2'); }
    };
  }

  /**
   * Sets the message back to the starting message defined in the markup.
   */
  resetMessage() {
    this.dataGrid.emptyMessage = this.emptyMessage;
  }

  /**
   * Sets the message to the default - this can be null or undefined.
   */
  defaultMessage() {
    this.dataGrid.emptyMessage = null;
  }
}
