import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IItem } from 'src/app/interfaces/item';
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  public value: string = '';

  public inputName: string = '';

  public inputDesc: string = '';

  public form: FormGroup = new FormGroup({
    "name": new FormControl('', [Validators.minLength(4), Validators.required]),
    "description": new FormControl('', [Validators.minLength(4), Validators.required])
  });

  constructor(private ItemService: ItemService) { }

  ngOnInit(): void {
  }

  public submit(): void {
    const item: IItem = {
      id: this.ItemService.makeId(),
      name: this.inputName,
      description: this.inputDesc
    };
    this.ItemService.addItem(item).subscribe(res => {

    }, err => {
      alert(err);
    });
    this.inputName = '';
    this.inputDesc = '';
  }

}
