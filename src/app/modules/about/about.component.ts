import { Component, OnDestroy, OnInit } from '@angular/core';
import { ItemService } from 'src/app/services/item.service';
import { IItem } from 'src/app/interfaces/item';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {

  public itemArr: IItem[] = [];

  public item!: IItem;

  public id!: number;

  public inputName: string = '';

  public inputDesc: string = '';

  private routeSub!: Subscription;

  public form: FormGroup = new FormGroup({
    "name": new FormControl('', [Validators.minLength(4), Validators.required]),
    "description": new FormControl('', [Validators.minLength(4), Validators.required])
  });

  constructor(private ItemService: ItemService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.getAllItems();
    this.routeSub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnDestroy(): void {
    this.routeSub.unsubscribe();
  }

  public getAllItems(): void {
    this.ItemService.getAllItems().subscribe(res => {
      this.itemArr = res;

      for (let i = 0; i < this.itemArr.length; i++) {
        if (this.itemArr[i].id == String(this.id)) {
          this.id = i;
        }
      }

    }, err => {
      alert("Unable to get list of items");
    });
  }

  public submit(): void {
    const item: IItem = {
      id: String(this.itemArr[this.id].id),
      name: this.inputName,
      description: this.inputDesc
    };
    this.ItemService.editItem(item).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to update item");
    });
  }

}
