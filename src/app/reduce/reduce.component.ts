import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { reduce, take } from 'rxjs/operators';

@Component({
  selector: 'reduce',
  templateUrl: 'reduce.component.html',
  styleUrls: ['reduce.component.scss'],
})
export class ReduceComponent {
  a = new Subject<string>();
  x: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      take(5),
      reduce((acc, val) => {
        return acc + val;
      }, '')
    );
  }
}
