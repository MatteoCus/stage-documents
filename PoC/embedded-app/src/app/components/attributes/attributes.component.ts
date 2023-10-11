import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' }
];

const ELEMENT_DATA_: any[] = [
  { key: 'position', value: 1 },
  { key: 'name', value: 'Hydrogen' },
  { key: 'weight', value: 1.0079 },
  { key: 'symbol', value: 'H' },
  {  },
  { key: 'position', value: 2 },
  { key: 'name', value: 'Helium' },
  { key: 'weight', value: 4.0026 },
  { key: 'symbol', value: 'He' },
  {  },
  { key: 'position', value: 3 },
  { key: 'name', value: 'Lithium' },
  { key: 'weight', value: 6.941 },
  { key: 'symbol', value: 'Li' },
  {  },
  { key: 'position', value: 4 },
  { key: 'name', value: 'Beryllium' },
  { key: 'weight', value: 9.0122 },
  { key: 'symbol', value: 'Be' },
  {  },
  { key: 'position', value: 5 },
  { key: 'name', value: 'Boron' },
  { key: 'weight', value: 10.811 },
  { key: 'symbol', value: 'B' },
  {  },
  { key: 'position', value: 6 },
  { key: 'name', value: 'Carbon' },
  { key: 'weight', value: 12.0107 },
  { key: 'symbol', value: 'C' },
  {  }
];

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}