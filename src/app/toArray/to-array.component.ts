import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'to-array',
  templateUrl: 'to-array.component.html',
  styleUrls: ['to-array.component.scss'],
})
export class ToArrayComponent {
  a = new Subject<string>();
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(take(5), toArray());
  }
}
