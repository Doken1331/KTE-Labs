import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
import { itemService } from 'src/app/services/itemService.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  public value: string = '';

  public itemObj!: IItem;

  public itemArr: IItem[] = [];

  constructor(private itemService: itemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  public getAllItems(): void {
    this.itemService.getAllItems().subscribe(res => {
      this.itemArr = res;
    }, err => {
      alert("Unable to get list of items");
    });
  }

  public deleteItem(item: IItem): void {
    this.itemService.deleteItem(item).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete item");
    });
  }

}
