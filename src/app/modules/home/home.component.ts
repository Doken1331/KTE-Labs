import { Component, OnInit } from '@angular/core';
import { IItem } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public itemArr: IItem[] = [];

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
    this.getAllItems();
  }

  public getAllItems(): void {
    this.ItemService.getAllItems().subscribe(res => {
      this.itemArr = res;
    }, err => {
      alert("Unable to get list of items");
    });
  }

  public deleteItem(item: IItem): void {
    this.ItemService.deleteItem(item).subscribe(res => {
      this.getAllItems();
    }, err => {
      alert("Failed to delete item");
    });
  }

}
