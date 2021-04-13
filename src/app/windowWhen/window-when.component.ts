import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, tap, windowWhen } from 'rxjs/operators';

@Component({
  selector: 'window-when',
  templateUrl: 'window-when.component.html',
  styleUrls: ['window-when.component.scss'],
})
export class WindowWhenComponent {
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
      windowWhen(() => {
        return this.b;
      }),
      tap((v) => {
        this.y = v;
      }),
      concatMap((value) => value)
    );
  }
}
