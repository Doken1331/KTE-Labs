import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IItem } from 'src/app/interfaces/item';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  public serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = "http://localhost:3000/items";
  }

  public addItem(item: IItem): Observable<IItem> {
    return this.http.post<IItem>(this.serviceUrl, item);
  }

  public getAllItems(): Observable<IItem[]> {
    return this.http.get<IItem[]>(this.serviceUrl);
  }

  public deleteItem(item: IItem): Observable<IItem> {
    return this.http.delete<IItem>(this.serviceUrl + '/' + item.id);
  }

  public editItem(item: IItem): Observable<IItem> {
    return this.http.put<IItem>(this.serviceUrl + '/' + item.id, item);
  }

  public makeId(): string {
    const chars = "123456789";
    const idLength = 6;
    let id = "";
    for (let i = 0; i <= idLength; i++) {
      let randomNumber = Math.floor(Math.random() * chars.length);
      id += chars.substring(randomNumber, randomNumber + 1);
    }
    return id;
  }

}
