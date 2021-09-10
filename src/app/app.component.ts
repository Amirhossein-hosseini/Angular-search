import { Component, Input } from '@angular/core';
import { Product, products,  } from './product';
import { process, State } from "@progress/kendo-data-query";

import { GridDataResult } from "@progress/kendo-angular-grid";
import { SortDescriptor, orderBy } from "@progress/kendo-data-query";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-search-ostan';
  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [
    {
      field: "id",
      dir: "asc",
    },
  ];
  public gridView!: GridDataResult;
  public products: Product[] = products;

  constructor() {
    this.loadProducts();
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadProducts();
  }

  private loadProducts(): void {
    this.gridView = {
      data: orderBy(this.products, this.sort),
      total: this.products.length,
    };
  }
}
