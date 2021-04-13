import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, tap, window } from 'rxjs/operators';

@Component({
  selector: 'window',
  templateUrl: 'window.component.html',
  styleUrls: ['window.component.scss'],
})
export class WindowComponent {
  a = new Subject<string>();
  b = new Subject<void>();
  x: Observable<any>;
  y: Observable<any>;

  constructor() {
    this.buildResult();
  }

  setA(value: string) {
    this.a.next(value);
  }

  setB() {
    this.b.next();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      window(this.b),
      tap((v) => console.log(v)),
      tap((v) => (this.y = v)),
      concatMap((value) => value)
    );
  }
}
