import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { concatMap, tap, windowTime } from 'rxjs/operators';

@Component({
  selector: 'window-time',
  templateUrl: 'window-time.component.html',
  styleUrls: ['window-time.component.scss'],
})
export class WindowTimeComponent {
  a = new Subject<string>();
  b = 1000;
  c = 1000;
  x: Observable<any>;
  y: Observable<any>;

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

  setC(value: string) {
    this.c = +value;
    this.buildResult();
  }

  private buildResult() {
    this.x = this.a.asObservable().pipe(
      windowTime(this.b, this.c),
      tap((v) => {
        this.y = v;
      }),
      concatMap((value) => value)
    );
  }
}
