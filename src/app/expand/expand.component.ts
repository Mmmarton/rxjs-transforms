import { Component } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { expand, take } from 'rxjs/operators';

@Component({
  selector: 'expand',
  templateUrl: 'expand.component.html',
  styleUrls: ['expand.component.scss'],
})
export class ExpandComponent {
  a = new Subject<string>();
  b = 1;
  x: Observable<string>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB(value: string) {
    this.b = +value;
    this.buildResult();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      expand((value) => {
        return of(`${value}x`);
      }),
      take(this.b)
    );
  }
}
